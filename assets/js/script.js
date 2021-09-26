

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
var savBtn9 = $("#saveBtn-9");
savBtn9.click(function() {
    
    var calendarEvent9 = $("#calendar-event-9").html();

    localStorage.setItem('9:00 AM', calendarEvent9);
});
// moment(calendarHour.format.toString(), "LT");