"use strict"

$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/activities",
    }).then(function(data) {
       console.log(data);
    });
});