
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

$(document).ready(function () { //https://stackoverflow.com/questions/73565932/i-have-added-a-local-storage-function-but-it-doesnt-seem-to-work-on-my-scheduler
    $(".saveBtn").on("click", function () {
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        let saveBtn = document.querySelector(".saveBtn");
        
        localStorage.setItem(time, input);
    })
   
    function trackTime() {

        var currentTime = moment().hour();


        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);


            if (blockTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
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