import $ from 'jquery';
import Person from './component/Person.js';

$(document).ready(function() {

    // prevent the default action for button class
    $('.btn').on('click', (e) => {
        e.preventDefault();
    })


    var Marcie = new Person('Marcie', 'yes');
    $('#question').text(Marcie.displayQuestion());

    setTimeout(() => {
        $('#answer').text(Marcie.displayAnswer());
    }, 5000);



});
