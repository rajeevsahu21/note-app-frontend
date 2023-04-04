import io from "socket.io-client";

export const socket = io("https://d2zrimmi3o3lmz.cloudfront.net", {
  autoConnect: false,
});
