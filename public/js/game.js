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

	
	if (username!=null) { // On demande le nom du participant que l'on ajoute à la liste
		document.getElementById("participants").innerHTML=username;
	}else{ // Si il refuse de donner son nom on le redirige en page d'accueil
		window.location.replace('/');
	}

});
