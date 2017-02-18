import React from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';

import App from './component/App.js';

ReactDOM.render(<App />, $('#app')[0]);


$(document).ready(function() {

    // prevent the default action for button class
    $('.btn').on('click', (e) => {
        e.preventDefault();
    })

});
