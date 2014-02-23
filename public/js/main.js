$(document).ready(function() {
	
	/**
	* Socket.IO
	* ________________________
	*/
	var socket = io.connect(window.location.href);
	var id = undefined;

	socket.on('greet', function (data) {
		console.log(data);
		$('#participants').append('<li class="list-group-item">user1</li>');
	});

	// Everytime a new person joins or leave, update the participant's list
	socket.on('participants', function (data) {
		// Clear the participant's list
		$('#participants').html('');

		// We keep client's id to recognize him
		if(data.id !== undefined){
			id = data.id;
		}

		// Initialize vars
		var count = 0;
		var i;

		for (i in data.people) {
			if (data.people.hasOwnProperty(i)) {
				// Differentiate current client
				if(i == id){
					$('#participants').append('<li class="list-group-item list-group-item-success">✎ user '+(count+1)+'</li>');					
				}else{
					$('#participants').append('<li class="list-group-item">user '+(count+1)+'</li>');
				}
				console.log();
				count++;
			}
		}
		console.log(count+ ' participants');
	});



	/**
	* Home
	* ________________________
	*/

	/**
	* Get Planning !
	*/

	$("#getPlanning").click(function(event){
		$('#getPlanning').addClass('animated bounceOutDown');
		$('#footer').addClass('animated fadeOutDown');
		
		setTimeout(function() {
			$('p.lead').addClass('animated bounceOutDown');
		}, 500); // 1 second

		setTimeout(function() {
			$('h1').addClass('animated bounceOutDown');
		}, 1000); // 1 second

		setTimeout(function() {
			$('#game').show();
			$('#game').addClass('animated flipInY');
		}, 1000); // 1 second

		event.preventDefault();
	});


});

/**
* Functions
* ________________________
*/

function generateRandomString(){
    var howmany = 15;
    var input = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var output = new Array();
    var input_arr = input.split('');
    var input_arr_len = input_arr.length;
    
    for (x=0; x<howmany; x++){
        output[x] = input_arr[Math.floor(Math.random()*input_arr_len)];
    }
    
    output = output.join('');
    
    return output;
}