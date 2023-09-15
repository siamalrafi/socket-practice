import { useEffect, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
   const [connected, setConnected] = useState(false);

   useEffect(() => {
      // Connect to the WebSocket server
      const socket = io("http://localhost:5000");

      // Listen for the "connect" event to know when the connection is established
      socket.on("connect", () => {
         console.log("Connected to server");
         setConnected(true); // Update the state to indicate the connection
      });

      // Listen for the "disconnect" event to know when the connection is closed
      socket.on("disconnect", () => {
         console.log("Disconnected from server");
         setConnected(false); // Update the state to indicate the disconnection
      });

      // Clean up the WebSocket connection when the component unmounts
      return () => {
         socket.disconnect();
      };
   }, []);

   return (
      <div>
         <h1>WebSocket Connection Status: {connected ? "Connected" : "Disconnected"}</h1>
         {/* Your other React component content */}
      </div>
   );
};

export default Chat;
