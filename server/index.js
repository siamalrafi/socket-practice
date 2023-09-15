/* const express = require("express");
const http = require("http");
const PORT = 5000 || process.env.PORT;
const app = express();

const httpServer = http.createServer(app);
const { Server } = require("socket.io"); // Import Socket.io
const io = new Server(httpServer);

io.on("connection", (socket) => {
   console.log("New user connected server.");

   socket.on("disconnect", () => {
      console.log("user disconnected");
   });
});

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/app.html");
});

httpServer.listen(PORT, () => {
   console.log("Hello World Server.");
}); */
