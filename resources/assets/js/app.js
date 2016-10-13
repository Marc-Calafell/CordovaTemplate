//var $ = require('jquery');
window.$ = window.jquery = require('jquery');

var _ = require('underscore');
window._ = window.underscore = require('underscore');

$(document).ready(function(){
    $("#msgid").html(_.capitalize("This is Hello World by JQuery"));
});
