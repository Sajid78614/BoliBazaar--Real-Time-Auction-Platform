import { io } from "socket.io-client";
import { API_BASE_URL, getAuthToken } from "./api.js";

let socket = null;

export const getSocket = () => {
  if (!socket) {
    socket = io(API_BASE_URL, {
      withCredentials: true,
      autoConnect: false,
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });
  }
  return socket;
};

export const connectSocket = () => {
  const s = getSocket();
  s.auth = {
    token: getAuthToken(),
  };

  if (!s.connected) {
    s.connect();
  }
  return s;
};

export const disconnectSocket = () => {
  if (socket && socket.connected) {
    socket.disconnect();
  }
};
