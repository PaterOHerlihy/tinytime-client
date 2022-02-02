"use strict"



$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/activities",
        dataType: "json"
    }).then(function(data) {
        console.log(typeof data);
       appendRecords(data);
    });

    function appendRecords(data){

        for(let i = 0; i < data.length; i++) {
            let obj = data[i];
        
            console.log(obj);
        }
            
            let li = $.parseHTML("<li> " + data[0] + " </li>");
            $("#records").append(li);
    
        
    }
});


