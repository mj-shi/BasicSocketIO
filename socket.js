let app = require('http').createServer(); // create HTTP server
let io = require('socket.io')(app, {path: '/socket.io'}); // bind Socket to HTTP server
app.listen(3000); // listen on port 3000
console.log('Listening for connections on port 3000');
io.on('connection', function(socket) {
	console.log('Client connected');
	socket.emit('serverGreeting', {id: 'Hello'}); // send message serverGreeting to client
	socket.on('clientGreeting', function(data) { // listen for fromClient message
		console.log('Client says: Hi there');
		socket.emit('serverReply', {id: 'Hru'}); // send message serverReply to client
		 
		socket.on('clientReply', function(data) {
			console.log('Client says: Great');
		});
   });
   socket.on('disconnect', function(){
	   console.log('Client disconnected');
   });
});
