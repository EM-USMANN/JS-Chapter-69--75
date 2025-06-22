
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


// make a function to show a model
function showImageModal(imagePath) {
    document.getElementById('dynamicModalImage').src = imagePath;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}


let user = {
    name: "John Doe",
    email: "abc",
    password: "123456",
    confirmPassword: "123456",
    age: 25,
}


console.log('user age', user["age"])

















