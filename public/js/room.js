var chati = null;
var currentRoom = null;
var username = null;

$(document).ready(function() {	
	/**
	* Socket.IO
	* ________________________
	*/
	// var socket = io.connect('http://localhost:3000');
	
	// socket.on('message', function (data) {
	// 	console.log(data);
	// 	socket.emit('respond', { message: 'Hello to you too, Mr.Server!' });
	// });



	/**
	* Room
	* ________________________
	*/

	/**
	* Get username
	*/

	var username = prompt("Enter your name for others to see");

	
	if (username!=null) { // On demande le nom du participant que l'on ajoute à la liste
		//$("#participants").append("<li>" + username + "</li>");
		chati = new Chat;
		currentRoom = $("h1").attr('data-room');
		chati.Connect(username, currentRoom);
	}else{ // Si il refuse de donner son nom on le redirige en page d'accueil
		window.location.replace('/');
	}

});





function Chat(){
  	this.socket = null;
  	this.Nickname = "";
  	this.Room = "";
  	
  	this.Connect = function(nick, room){

  		socket =  io.connect('http://localhost:3000'); 	
  		Nickname = nick;
  		Room = room;

  		//Connection
  		socket.on('connect',function (data) {
	    	socket.emit('setNickAndRoom', {nick: nick, room: room}, function(response){
	    		// List of the different participants
	    		response.forEach(function(client) {
	    			$("#participants").append("<li>" + client.nick + "</li>");
	    		});
	    	});
  		});

  		//Connected
  		socket.on("connected", function(msg, p, c){
  			$("#participants").append("<li>" + msg + "</li>");
  		});
  	};
  	
  	this.Send = function Send (msg) {
		socket.emit("message", {msg: msg, nick:  Nickname} , function(response) {
			
			$("#participants").append("<p>" + Nickname + ": " + msg + "</p>");
		});	
	};	
  }