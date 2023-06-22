
let currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate); // displays the current date to user

$(document).ready(function () { // https://stackoverflow.com/questions/73565932/i-have-added-a-local-storage-function-but-it-doesnt-seem-to-work-on-my-scheduler used as reference for parent/sibling attributes
    $(".saveBtn").on("click", function () { // click function allows user to click save button, and save input when page is refreshed
        let input = $(this).siblings(".description").val(); 
        let time = $(this).parent().attr("id");
        let saveBtn = document.querySelector(".saveBtn");
        console.log ("saved")
        localStorage.setItem(time, input); //connects to users time with tracktime function
    })
  
    function trackTime() {
        let currentTime = moment().hour(); // https://stackoverflow.com/questions/62079752/using-moment-js-to-determine-if-current-time-in-hour-is-between-certain-hours used as reference for moment.js, this function tracks the users current time
        console.log("hours is: ", currentTime) 

// https://api.jquery.com/removeclass/ 
// https://stackoverflow.com/questions/45801058/dynamically-recalculating-total-working-hours-of-a-generated-html-jquery-table used for parsing
// https://www.shecodes.io/athena/3624-creating-a-time-range-using-if-else-in-javascript for time range
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]); // blockime colors adjusted according to users time
            if (blockTime < currentTime) {
                console.log("parsed blocktime before current hour")
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                console.log("parsed blocktime for current hour")
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                console.log("parsed blocktime for future")
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    trackTime();
})