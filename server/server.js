const express = require('express');
<<<<<<< HEAD
const http = require('http');
const parser = require('body-parser');
const socketIo = require('socket.io');

const PORT = 3000;
const App = express();
const server = http.createServer(App);
const io = socketIo(server);

App.use(express.static('client'));
App.use(parser.urlencoded({extended: false}));
server.listen(3000, (err) => {
    if(err){
        console.log('error');
    } else {
        console.log('listening on 3000');
    }
});

io.on('connection', socket => {
    console.log(connected);
=======
const parser = require('body-parser');
const PORT = 3000;
const App = express();

App.use(parser.json());
App.use(parser.urlencoded({extended: true}));


App.listen(PORT, (err) => {
    if(err){
        console.log('Error setting up server.js')
    } else {
        console.log('Server.js is up and listening to Port:', PORT);
    }
>>>>>>> master
})