const express = require("express");
const { createServer } = require("http"); // Import http module
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app); // Create an http.Server instance
const io = new Server(httpServer);
io.on("connection", (socket) => {
   console.log("A user connected");

   // Handle incoming events from the frontend
   socket.on("chatMessage", (message) => {
      console.log("Received from client:", message);

      // Send data back to the frontend
   });
   socket.emit("serverMessage", "Hello, client!");
});

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/check.html");
});

httpServer.listen(5000, () => {
   console.log("Server is listening on port 3000");
});
