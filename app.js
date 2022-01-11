const { Console } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var users = [];

io.on('connection', (socket) => {
  io.emit('leaderboard', users.slice(0, 5));

  socket.on('username', (name) => {
    var startTime = Date.now();
    var user = { 'id': socket.id, 'name': name, 'time': startTime }
    users.push(user);
    users.sort((u1, u2) => u1['time'] - u2['time']);
    // send updates to the users score every second
    var scoreUpdates = setInterval(() => {
      io.to(socket.id).emit('update', 
        'Current Score: ' + 
        Math.round((Date.now() - startTime) / 1000) + 's'
      );
    }, 1000);
  });

  // send one last update and remove user from competition
  socket.on('disconnect', () => {
    var endTime = Date.now();
    io.to(socket.id).emit('update',
      'You disconnected! Final score: ' +
      Math.round((endTime - startTime) / 1000) + 's'
    );
    const newUsers = users.filter(u => u['id'] !== socket.id ); 
    users = newUsers;
  });
});

// update leaderboard of top 5 users every 5 seconds
var leaderboard = setInterval(() => {
  io.emit('leaderboard', users.slice(0, 5));
}, 5000);

// start the app
server.listen(port, () => {
  console.log(`Waiting Rooms Server listening at http://localhost:${port}`)
});