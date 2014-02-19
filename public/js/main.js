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
	* Home
	* ________________________
	*/

	/**
	* Change Room name
	*/

	var baseUrl = window.location.protocol + "//" + window.location.host + "/";
	var roomUrl;

	setTimeout(function(){
		roomUrl = baseUrl+'room/'+generateRandomString();
		$('#roomName').val(roomUrl);
		$('#roomForm .btn').prop('disabled', false);
	},1500);

	/**
	* Redirect on form submission
	*/

	$("#roomForm").submit(function(event){
		window.location.replace(roomUrl);
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