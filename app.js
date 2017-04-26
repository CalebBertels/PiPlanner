var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var path = require('path');

app.use(express.static(path.join(__dirname))); 


app.get('/', function (req, res) {       
     res.sendFile(path.join(__dirname, '../Pi Planner/assets', 'index.html'));
});
app.get('/display', function (req, res) {       
     res.sendFile(path.join(__dirname, '../Pi Planner/assets', 'display.html'));
});

io.on('connection', function(socket){ 
      socket.on('updateText', function(msg){
           io.emit('updateText', msg);  
      });    
});

io.on('connection', function(socket){ 
      socket.on('updatePicture', function(msg){
           io.emit('updatePicture', msg);  
      });    
});

server.listen(8081, function () {
  console.log('listening on http://localhost:8081/');
});