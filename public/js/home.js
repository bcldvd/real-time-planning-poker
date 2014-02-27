var baseRoom = generateRandomString();
var baseUrl = window.location.protocol + "//" + window.location.host + "/";
var roomUrl = baseUrl+'room/'+baseRoom;

$(document).ready(function() {

	/**
	* Home
	* ________________________
	*/

	/**
	* Change Room name
	*/

	setTimeout(function(){
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



	/**
	* Theme
	*/

	// Check local storage if there is already a theme
	if(localStorage.getItem('theme') == undefined){
		// If not set it to flatly
		localStorage.setItem('theme','flatly');
	}

	// Then apply theme
	changeTheme(localStorage.getItem('theme'));

	$('#changeTheme li a').click(function(e){
		var newTheme = $(this).attr('data-theme');
		localStorage.setItem('theme', newTheme);
		changeTheme(newTheme);
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


function changeTheme(theme){
	// Remove previously added theme
	$('#customTheme').remove();
	// Add link to theme
	$('head').append('<link id="customTheme" rel="stylesheet" href="/css/themes/'+theme+'.css" />');
	// Add the border-radius to 0 back
	$('.navbar').css('border-radius', 0);
	// Set the name of the theme in the button
	$('#themeButton').html('Theme : '+capitaliseFirstLetter(theme)+' <span class="caret"></span>');
}

