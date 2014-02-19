$(document).ready(function() {
	
	/**
	* Socket.IO
	*/
	var socket = io.connect(window.location.href);
		socket.on('greet', function (data) {
		console.log(data);
		socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
	});

});
