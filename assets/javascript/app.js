// set number counter to 60. 
var number = 60;

// variable that will hold our interval ID when we execute the run function
var intervalId;

// When page loads hide unnecessary sections
$("document").ready(function() {
    $("#quizSection").hide();
    $("#results").hide();
})

// When the "start quiz" button is clicked, show quiz and start the timer
$("#buttonStart").click(function() {
    start();
    $("#startScreen").hide()
    $("#quizSection").show();
})

// When "submit" is clicked, show the results page
$("#submit").click(function() {
    $("#quizSection").hide();
    $("#results").show();
    correct();
    pointsPlus();
    $("#timeLeft").text("Time Remaining: " + number + " Seconds");
    $("#score").text("Your Score: " + score );
    uncheckRadios();
})

// When "Reset" is clicked, go back to the start page and reset timer and score
$("#Reset").click(function() {
    $("#startScreen").show()
    $("#results").hide();
    number = 60;
    $("#timer").text("Time Remaining: " + number);
    score = 0;
    $("#score").text(score);
})

// "start" function sets an interval that runs the decrement function once a second.
function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

// decrement function decreases number by one (second).
function decrement() {
    number--;

    if (number === 0) {
        stop()
    }

    // Show the number in the #timer tag.
    $("#timer").html("<p> Time Remaining: " + number + "</p>")
}

function stop() {
    clearInterval(intervalId)
}

// Grabbing the radios by their name and creating a variable that holds the node lists 
var developers = document.getElementsByName("developer")
var library = document.getElementsByName("library")
var year = document.getElementsByName("year")
var language = document.getElementsByName("Language")

// function to loop through radios and sets the checked value to false
function uncheckRadios() {
    for(var i = 0; i < developers.length; i++) {
        developers[i].checked = false
    }
    for(var i = 0; i < library.length; i++) {
        library[i].checked = false
    }
    for(var i = 0; i < year.length; i++) {
        year[i].checked = false
    }
    for(var i = 0; i < language.length; i++) {
        language[i].checked = false
    }
}

// variables for holding the value of the checked radio
var devCorrect;
var libCorrect;
var yearCorrect;
var langCorrect;
var score = 0;

// function to loop through each set of radios
function correct() {
    for(var i = 0; i < developers.length; i++) {
        // if the radio is checked,
        if(developers[i].checked) {
            // the variable will be set to the string of the checked radios value
            devCorrect = developers[i].value
        }
    }
        for(var i = 0; i < library.length; i++) {
        if(library[i].checked) {
            libCorrect = library[i].value
        }
    }
    for(var i = 0; i < year.length; i++) {
        if(year[i].checked) {
            yearCorrect = year[i].value
        }
    }
    for(var i = 0; i < language.length; i++) {
        if(language[i].checked) {
            langCorrect = language[i].value
        }
    }
}

// Increases your score +1 if the checked radios value is "correct"
function pointsPlus() {
    if (devCorrect === "correct") {
        score++;
    };
    if (libCorrect === "correct") {
        score++;
    };
    if (yearCorrect === "correct") {
        score++;
    };
    if (langCorrect === "correct") {
        score++;
    };
}




