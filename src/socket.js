import io from "socket.io-client";

export const socket = io("https://note-app-socket.onrender.com", {
  autoConnect: false,
});
