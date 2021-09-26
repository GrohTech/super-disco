
var savBtn9 = $("#saveBtn-9");
var event9 = $("#event-9");
var event10 = $("#event-10");
var event11 = $("#event-11");
var event12 = $("#event-12");
var event13 = $("#event-13");
var event14 = $("#event-14");
var event15 = $("#event-15");
var event16 = $("#event-16");
var event17 = $("#event-17");


// Display current date
var CurrentDate = moment().format('MMMM Do, YYYY');
$("#currentDay").append(CurrentDate);


// Link time blocks to colors
var time = moment().hours();

$(".calendar-hour").each(function(){
    var timeBlock = parseInt($(this).attr("id").split("-")[1]);

    if(timeBlock < time){
        $("#event-"+timeBlock).addClass("past");
    }
    else if(timeBlock === time){
        $("#event-"+timeBlock).addClass("present");
        $("#event-"+timeBlock).removeClass("past");
    }
    else {
        $("#event-"+timeBlock).addClass("future");
        $("#event-"+timeBlock).removeClass("present");
        $("#event-"+timeBlock).removeClass("past"); 
    }
});

// Get events from localStorage
function getEvents() { 

var getEvent9 = localStorage.getItem('event9');
event9.text(getEvent9);

var getEvent10 = localStorage.getItem('event10');
event10.text(getEvent10);

var getEvent11 = localStorage.getItem('event11');
event11.text(getEvent11);

var getEvent12 = localStorage.getItem('event12');
event12.text(getEvent12);

var getEvent13 = localStorage.getItem('event13');
event13.text(getEvent13);

var getEvent14 = localStorage.getItem('event14');
event14.text(getEvent14);

var getEvent15 = localStorage.getItem('event15');
event15.text(getEvent15);

var getEvent16 = localStorage.getItem('event16');
event16.text(getEvent16);

var getEvent17 = localStorage.getItem('event17');
event17.text(getEvent17);

};
getEvents();


// Save event to localStorage
$(".saveBtn").each(function(){
    $(this).on("click", function(){
    var calendarEvent = parseInt($(this).attr("id").split("-")[1]);    
    var storeEvent = $("#event-"+calendarEvent).val();

    localStorage.setItem('event'+calendarEvent, storeEvent);
    // Get saved events
    getEvents();
    });
});