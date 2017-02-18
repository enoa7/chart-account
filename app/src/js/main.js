import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Header from './component/Header.js';
import Person from './component/Person.js';

ReactDOM.render(<Header/>, $('#header')[0]);

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
