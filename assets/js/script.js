// Display current date
var CurrentDate = moment().format('MMMM Do, YYYY');
$("#currentDay").append(CurrentDate);

// Set time block format
var calendarHour = $(".calendar-hour").value;
var format = 'hh:mm A';
// moment(calendarHour.format.toString(), "LT");
var convertedTime = moment(calendarHour, format);


// Link time blocks to colors
var rowColor = $(".row");
var time = moment();

if(convertedTime.isBefore(time)){
    rowColor.style.backgroundColor = 'gray';
}
if(convertedTime.isSame(time) || convertedTime.isSame(time.add(59, 'minutes'))){
    rowColor.style.backgroundColor = 'red';

}
if(convertedTime.isAfter(time.add(59, 'minutes'))){
    rowColor.style.backgroundColor = 'green';
}