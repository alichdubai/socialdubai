import io from 'socket.io-client';

let socket;

export const initSocket = () => {
  socket = io('https://socket-server.example.com', { transports: ['websocket'] });
};

export const sendMessage = (message) => {
  socket.emit('sendMessage', message);
};

export const receiveMessage = (callback) => {
  socket.on('receiveMessage', (message) => {
    callback(message);
  });
};
