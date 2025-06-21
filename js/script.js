
// Toastify Notification

// const { cloneElement } = require("react");

function showToast(message, type = "info") {
    let backgroundColor;

    switch (type) {
        case "success":
            backgroundColor = "#198754"; // Bootstrap green

            break;
        case "error":
            backgroundColor = "#dc3545"; // Bootstrap red

            break;
        case "warning":
            backgroundColor = "#ffc107"; // Bootstrap yellow

            break;
        default:
            backgroundColor = "#0d6efd"; // Bootstrap blue

    }

    Toastify({
        text: ` ${message}`,
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true, // enables manual close on click
        stopOnFocus: true,
        backgroundColor,
    }).showToast();
}



let year = new Date().getFullYear();

console.log('year', year)




// clear output result
document.getElementById("clear-output").onclick = function () {
    document.getElementById("outputResult").innerHTML = "";
}

// Clear Input Field
document.getElementById("button-addon2").onclick = function () {
    document.getElementById("Input-field").value = "";
    showToast("Input field cleared.", "info");
}

// right now date

let rightNowDate = new Date();
document.getElementById("Original-Text-Box").innerHTML = rightNowDate

let day = rightNowDate.getDay();
// console.log('day', day)

setInterval(() => {
    // console.log(new Date())
}, 1000);



// function to get name of today
function getTodayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today = new Date();
    let dayName = days[today.getDay()];
    document.getElementById("outputResult").innerHTML = `Today is: ${dayName}`;
}



// calculate days passed since i was born
function calculateDaysSinceBirth() {
    // Get the input value
    let inputValue = document.getElementById("Input-field").value;

    // Check if the input is a valid date
    if (isNaN(Date.parse(inputValue)) || inputValue === "") {
        showToast("Please enter a valid date.", "error");
        return;
    }

    // Convert to Date object
    let birthDate = new Date(inputValue);
    let today = new Date();

    // Calculate the difference in milliseconds
    let diffTime = today - birthDate;

    // Convert milliseconds to days
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById("outputResult").innerHTML = `Days since birth: ${diffDays}`;
    showToast("Days calculated successfully!", "success");
}




// when is your next birthday
function calculateNextBirthday() {
    // Get the input value
    let inputValue = document.getElementById("Input-field").value;

    // Check if the input is a valid date
    if (isNaN(Date.parse(inputValue)) || inputValue === "") {
        showToast("Please enter a valid date.", "error");
        return;
    }

    // Convert to Date object
    let birthDate = new Date(inputValue);
    let today = new Date();

    // Set the next birthday year
    let nextBirthdayYear = today.getFullYear();
    if (today > new Date(nextBirthdayYear, birthDate.getMonth(), birthDate.getDate())) {
        nextBirthdayYear++;
    }

    // Calculate the next birthday date
    let nextBirthday = new Date(nextBirthdayYear, birthDate.getMonth(), birthDate.getDate());

    // Calculate the difference in milliseconds
    let diffTime = nextBirthday - today;

    // Convert milliseconds to days
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Display the result
    document.getElementById("outputResult").innerHTML = `Next birthday in: ${diffDays} days`;
    showToast("Next birthday calculated successfully!", "success");
}


// Greet user accroding to day time if morning greet morning if evening greet evening but first get username from prompt
function greetUser() {
    let userName = prompt("Please enter your name:");
    if (!userName) {
        showToast("No name entered. Greeting will not be displayed.", "warning");
        return;
    }

    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = `Good morning, ${userName}!`;
    } else if (currentHour < 18) {
        greeting = `Good afternoon, ${userName}!`;
    } else {
        greeting = `Good evening, ${userName}!`;
    }

    document.getElementById("outputResult").innerHTML = greeting;
}





// Tell user current time
function tellCurrentTime() {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById("outputResult").innerHTML = `Current time is: ${currentTime}`;
    showToast("Current time displayed successfully!", "info");
}




let x = 10;
do {
    console.log('x', x)
    x++;

} while (x <= 20);




function refreshCheck() {
    alert("Page is refreshed");
}


function Button() {
    alert("Button clicked");
}









