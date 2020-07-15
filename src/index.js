const processMessage = require('./chain-of-responsibility');

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
    const newMessage = processMessage(msg);
    io.sockets.emit('new-message', {user: msg.user, message: newMessage});
  });
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

