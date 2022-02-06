"use strict"



$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/activities",
        dataType: "json"
    }).then(function(data) {
        console.log(typeof data);
       appendRecords(data);
    });

    let isRecording = false;
    let start;
    let end;
    $("#btn_record").click(function(){
        console.log("Clicked");
        if(isRecording === false){
            console.log("Integrity");
            $("#btn_record").html("Recording");
            start = new Date().toISOString();
            isRecording = true;
        }else{
            end = new Date().toISOString();
            let data = {id: 0, start: start, end: end, duration: end-start};
            let record = JSON.stringify(data);

            console.log(record);
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/activity",
                data: record,
                contentType:"application/json; charset=utf-8",
                dataType: "json",
                error: function (xhr, ajaxOptions, thrownError) {
                    //alert(xhr.responseText);
                    console.log("Error: "+thrownError+" "+xhr+" "+ajaxOptions );
                },
                success: function(){
                    window.location.reload();
                }
              });
        }
    })


    function appendRecords(data){

        
        console.log(data.length);
        for(let i = 0; i < data.length; i++) {

            let tr = $.parseHTML("<tr></tr>");
            $("#records").append(tr);
            console.log("i: "+i);
            let td_id = $.parseHTML("<td>" + data[i].id + "</td>");
            let td_start = $.parseHTML("<td>" + data[i].start + "</td>");
            let td_end = $.parseHTML("<td>" + data[i].end + "</td>");
            let td_duration = $.parseHTML("<td>" + data[i].duration + "</td>");
            $(tr).append(td_id);
            $(tr).append(td_start);
            $(tr).append(td_end);
            $(tr).append(td_duration);
            
        }    
    
    }



});





   
    

