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



let usersData = [];

function getRandomId() {
    return Math.random().toString(36).substring(2, 12);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add User function for onclick
function addUser() {
    // Get values from form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const dob = document.getElementById('dob').value.trim();

    // Simple validation
    if (!firstName || !lastName || !email || !dob) {
        showToast('Please fill all fields', 'error');
        return;
    }
    if (!isValidEmail(email)) {
        showToast('Invalid email format', 'error');
        return;
    }

    // Create user object
    const user = {
        id: getRandomId(),
        firstName,
        lastName,
        email,
        dob
    };
    usersData.push(user);
    showToast('User added successfully!', 'success');
    // Optionally clear form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('dob').value = '';
}

// Show Users Table function for onclick
function showUsersTable() {
    const output = document.getElementById('outputResult');
    if (!usersData.length) {
        showToast('No users to display', 'error');
        return;
    }
    let table = `<table class="table table-bordered table-striped bg-transparent">
        <thead class="table-light bg-transparent">
            <tr>
                <th>#</th>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
        <tbody>`;
    usersData.forEach((user, idx) => {
        table += `<tr>
            <td>${idx + 1}</td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.dob}</td>
        </tr>`;
    });
    table += '</tbody></table>';
    output.innerHTML = table;
}





function printUsersInConsole() {
    if (!usersData.length) {
        showToast('No users to display', 'error');
        return;
    }
    console.table(usersData);
    showToast('Users printed in console', 'success');
}













