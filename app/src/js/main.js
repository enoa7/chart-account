import $ from 'jquery';

$(document).ready(function() {
	
	//questions!
	console.log('marcie.. are you??');

	//answer in 5 sec
	setTimeout(() => {
		console.log('yes!')
	}, 5000);

	// prevent the default action for button class
	$('.btn').on('click', (e) => {
		e.preventDefault();
	})

});