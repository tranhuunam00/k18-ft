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

const server = app.listen(3000, function () {
  console.log("Server is listening at 3000");
});

const socket = require("socket.io");
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

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});
