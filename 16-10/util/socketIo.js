const express = require("express");
const socket = require("socket.io");
var cors = require("cors");
const app = express();
app.use(cors());

const server = app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

const io = socket(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  },
});

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

  // Disconnect event
  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});
