	var id = undefined;
	var card = null;
$(document).ready(function() {
	
	/**
	* Socket.IO
	* ________________________
	*/
	var socket = io.connect(window.location.href);


	/**
	* Participants
	*/

	// Everytime a new person joins or leave, update the participant's list
	socket.on('participants', function (data) {
		// Clear the participant's list
		$('#participants').html('');

		// We keep client's id to recognize him
		if(data.id !== undefined){
			id = data.id;
		}

		// Send a alert for a connection
		if(data.connect !== undefined){
			var alert = newAlert('success', data.connect+' just joined');
			$('#alerts').append(alert.alert);
			removeAlert(alert.id);
		}

		// Send a alert for a disconnection
		if(data.disconnect !== undefined){
			var alert = newAlert('danger', data.disconnect+' just left');
			$('#alerts').append(alert.alert);
			removeAlert(alert.id);
		}

		// Initialize vars
		var i;

		for (i in data.people) {
			if (data.people.hasOwnProperty(i)) {
				// Differentiate current client
				if(i == id){
					$('#participants').append('<li class="list-group-item list-group-item-success">✎ '+data.people[i].name+'</li>');					
				}else{
					$('#participants').append('<li class="list-group-item">'+data.people[i].name+'</li>');
				}
			}
		}
	});

	/**
	* Selected Cards
	*/

	socket.on('cardSelected', function(people){
		displayCards(people);
		console.log('you chose '+people[id].card);
	});




	/**
	* Home
	* ________________________
	*/

	/**
	* Get Planning !
	*/

	$("#getPlanning").click(function(event){
		// Remove effect for button and footer
		$('#getPlanning').addClass('animated bounceOutDown');
		$('#footer').addClass('animated fadeOutDown');
		
		// Remove effect of lead text 500ms after
		setTimeout(function() {
			$('p.lead').addClass('animated bounceOutDown');
		}, 500);

		// Remove effect of title 1000ms after
		setTimeout(function() {
			$('h1').addClass('animated bounceOutDown');
		}, 1000);

		// Actual remove 1500ms after
		setTimeout(function() {
			$('#preGame').remove();
		}, 1500);

		// Game Arrival effect 1500ms after
		setTimeout(function() {
			$('#game').show();
			$('#game').addClass('animated flipInY');
		}, 1500);

		event.preventDefault();
	});


	/**
	* Select card
	*/

	$('.cardSelection').click(function(event){
		// Get the selected card value
		var cardValue = $(this).html();

		// Send it to the server
		socket.emit('cardSelected', cardValue);

		//console.log(cardValue);
		//alert(cardValue+' selected');
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

// Creates an alert, feed with alert type and content
function newAlert(type, msg){
	// Generate a random id for the alert
	var id = generateRandomString();

	// Generate the text and class for the associated alert
	var alert = '<div id='+id+' class="alert alert-'+type+' alert-dismissable animated fadeInDown">'
	+'<button type="button" data-dismiss="alert" aria-hidden="true" class="close">×</button>'
	+'<p>'+msg+'</p>'
	+'</div>';

	// Send the resulting object
	var data = {};
	data.id = id;
	data.alert = alert;
	return data;
}

// Removes an alert with style
function removeAlert(id){
	setTimeout(function() {
		$('#'+id).addClass('fadeOutRight');
	}, 1500);
	setTimeout(function() {
		$('#'+id).remove();
	}, 2000);
}

function displayCards(people){
	console.log(people);
	// Clear the current cards
	$('#cardsResult').html('');

	// Initialize vars
	var count = 0;
	var i;

	for (i in people) {
		if (people.hasOwnProperty(i)) {
			// Differentiate current client
			if(i == id){
				$('#cardsResult').append('<li><span>'+people[i].name+'</span>'
					+'<div data-card="'+people[i].card+'" class="bg-success">'
						+'<p>'+people[i].card+'</p>'
					+'</div>'
				+'</li>');					
			}else{
				$('#cardsResult').append('<li><span>'+people[i].name+'</span>'
					+'<div data-card="'+people[i].card+'" class="bg-danger">'
						+'<p></p>'
					+'</div>'
				+'</li>');				}
			console.log();
			count++;
		}
	}
}


