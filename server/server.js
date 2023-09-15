const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server);

/* io.on("connection", (socket) => {
   console.log("new connection.");

   socket.on("disconnect", (socket) => {
      console.log("user disconnected.");
   });

   socket.emit("backend", "hello world backendbackendbackendbackend");
   socket.on("fifa", (message) => {
      console.log(message);
   });
}); */

const fifa = io.of("wordCup");

fifa.on("connection", (socket) => {
   fifa.emit("wordCupEvent", "Hello wordCupEvent");
});

// Define a route to handle GET requests to the root URL
app.get("/", (req, res) => {
   res.sendFile(__dirname + "/app.html");
});

// Start the server and listen on port 5000
const PORT = process.env.PORT || 5000; // Use the environment variable PORT if available, or default to 5000
server.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});
