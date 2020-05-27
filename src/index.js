const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const http = require('http');
const server = http.Server(app);

const socketIO = require('socket.io');
const io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('user connected');
  socket.on('new-message', (msg) => {
    io.sockets.emit('new-message', msg);
  });
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

io.on('new-message', (message) => {
  io.emit(message);
});
