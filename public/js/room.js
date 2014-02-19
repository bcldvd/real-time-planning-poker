$(document).ready(function() {
	
	/**
	* Socket.IO
	* ________________________
	*/
	var socket = io.connect(window.location.href);
	
	socket.on('greet', function (data) {
		console.log(data);
		socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
	});



	/**
	* Room
	* ________________________
	*/

	/**
	* Get username
	*/

	var username = prompt("Enter your name for others to see");

	if (username!=null) {
		document.getElementById("participants").innerHTML=username;
	}

});
