
var savBtn9 = $("#saveBtn-9");


// Display current date
var CurrentDate = moment().format('MMMM Do, YYYY');
$("#currentDay").append(CurrentDate);


// Link time blocks to colors
var time = moment().hours();

$(".calendar-hour").each(function(){
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);

    if(timeBlock < time){
        $("#calendar-event-"+timeBlock).addClass("past");
    }
    else if(timeBlock === time){
        $("#calendar-event-"+timeBlock).addClass("present");
        $("#calendar-event-"+timeBlock).removeClass("past");
    }
    else {
        $("#calendar-event-"+timeBlock).addClass("future");
        $("#calendar-event-"+timeBlock).removeClass("present");
        $("#calendar-event-"+timeBlock).removeClass("past"); 
    }
});


// Save event to localStorage
$(".saveBtn").each(function(){
    $(this).on("click", function(){
    var calendarEvent = parseInt($(this).attr("id").split("-")[1]);    
    var storeEvent = $("#event-"+calendarEvent).val();

    localStorage.setItem('event', storeEvent);
    });
});




// savBtn9.click(function() {
    
//     var calendarEvent9 = $("#calendar-event-9").val();

//     localStorage.setItem('event9', calendarEvent9);
//     console.log(calendarEvent9);
// }); 

// // Save event to localStorage
// $(".saveBtn").each(function(){
//     $(this).on("click", function(){
//     var calendarEvent = parseInt($(this).attr("id").split("-")[1]);    
    
//     var event9 = $("#event-9").val();

//     localStorage.setItem('event9', event9);
//     // console.log(event9);
//     });
// });