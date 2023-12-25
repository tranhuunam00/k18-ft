const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var cors = require("cors");
const connectMongo = require("./models/connect");
const authRouter = require("./route/auth.route");
const customerRouter = require("./route/customer.route");
const sellerRouter = require("./route/seller.route");
const productRouter = require("./route/product.route");
const cartRouter = require("./route/cart.route");
const orderRouter = require("./route/order.route");

app.use(cors());

app.use(express.static("public"));
app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/seller", sellerRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);

connectMongo();

const rooms = {
  // 1: ["1::2", "1::3"], // đã chat với bao nhiêu người có từng đấy room
  // 2: ["1::2", "2::4"],
  // 3: ["1::3"],
  // 4: ["2::4"],
  // 5: [],
}; // tất cả room của server

const sockets = {};

const server = app.listen(3001, function () {
  console.log("Server is listening at 3001");
});

const socket = require("socket.io");
const HelperApp = require("./util/helper");
const userRepo = require("./repositories/user.repo");
const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});
require("./util/socketIo");
io.on("connection", (socket) => {
  console.log("New socket connection");

  // Listen for incoming messages
  socket.on("message", (message) => {
    console.log(`Received message`, message);
    // nhận từ ông A -> gửi tới ông B > nội dung > thời gina

    // Broadcast the message to all connected sockets

    // giả sử có ông B C D A F connected
    // gửi cho tất cả A B C D E
    // client: lọc xem message nào gửi cho mình dựa vào userId
    // mình là ông b thì minh so sánh id của mình vs id của người nhận
    // nếu == thì là nó gửi đến mình

    io.emit("message", message);
  });
  socket.on("join", (room) => {
    // verify ai vào room
    console.log("join vào ", room); //AB AC
    //room + senderId + receiveid
    socket.join(room);
  });

  socket.on("privateMessage", (message) => {
    // {
    //   "senderId":1, //là mình
    //   "message":"chào em",
    //   "receiverId":2, // là người nhận
    //   "time":"2023-02-01 19:19:19" // khi ấn nút gửi
    // }
    console.log("runnnnn");
    io.to("room1").emit("privateMessage", message);
  });

  socket.on("chat", async (data) => {
    // là 1 cái api
    const { message, token, id } = data;
    // check token
    const user = { id: id };
    // const dataToken = HelperApp.decodeToken(token);
    // const [user] = await Promise.all([
    //   userRepo.getUserById(dataToken?._doc?._id), // 1
    // ]);
    // VALIDATE
    // check receiverID ở database
    // check time < now()
    // check senderId = user id
    const roomName =
      message.senderId > message.receiverId
        ? `${message.receiverId}::${message.senderId}`
        : `${message.senderId}::${message.receiverId}`;
    console.log("roomName", roomName);
    // check xem tk sender đã có room này chưa
    if (!rooms[message.senderId]?.some((room) => room == roomName)) {
      if (!rooms[message.senderId]) {
        rooms[message.senderId] = [];
      }
      if (!rooms[message.receiverId]) {
        rooms[message.receiverId] = [];
      }
      rooms[message.senderId].push(roomName);
      rooms[message.receiverId].push(roomName);

      socket.join(roomName);
      sockets[message.receiverId]?.join(roomName);
      console.log("rooms mới", rooms);
      console.log(Object.keys(sockets));
    }
    io.to(roomName).emit("chat", data.message);
    if (!user) return;
  });

  socket.on("join_chat", async (data) => {
    const { token, id } = data;
    sockets[id] = socket;
    // bảo mật - phân quyền
    const dataToken = HelperApp.decodeToken(token);
    const [user] = await Promise.all([
      userRepo.getUserById(dataToken?._doc?._id), // 1
    ]);
    if (user.status == 2) {
      console.log("user", user);
      console.log("id", id);
      if (!rooms[id]) {
        rooms[id] = [];
      }
      for (let room of rooms[id]) {
        //1::2 1::3
        console.log("join thành công ", room);
        socket.join(room);
      }
    }
  });
  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

// {
//   "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsic3RhdHVzIjoiaW5pdCIsInJvbGUiOiJpbml0IiwiZGVsZXRlZCI6ImRlZmF1bHQiLCJfaWQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwibmFtZSI6ImluaXQiLCJkb2IiOiJpbml0IiwiX192IjoiaW5pdCJ9LCJzdGF0ZXMiOnsiZGVmYXVsdCI6eyJkZWxldGVkIjp0cnVlfSwiaW5pdCI6eyJfaWQiOnRydWUsImVtYWlsIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiZG9iIjp0cnVlLCJzdGF0dXMiOnRydWUsIl9fdiI6dHJ1ZSwicm9sZSI6dHJ1ZX19fSwic2tpcElkIjp0cnVlfSwiJGlzTmV3IjpmYWxzZSwiX2RvYyI6eyJkZWxldGVkIjpmYWxzZSwiX2lkIjoiNjU0OGY0ZDJlZDBhODAwYmJiNGE4MmZiIiwiZW1haWwiOiJ0cmFuaHV1bmFtMjMwMjIwMDBAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkODBxNDNHaWVtcDJLWkF6aUJXVzE5dWo5eU1ObXUwelNVdGIxNXdxcWlNNTFoYmRuLldGTi4iLCJuYW1lIjoiazE4IiwiZG9iIjoiMjAyMy0xMC0xMFQwMDowMDowMC4wMDBaIiwic3RhdHVzIjoyLCJfX3YiOjAsInJvbGUiOjJ9LCJpYXQiOjE3MDI0NzU3ODUsImV4cCI6MTcwNDI3NTc4NX0.6DuBLD2mGGQlUWCOGvtVTpY77YNLXy4BQG05taon1gs",
//   "id":"1"
// }
