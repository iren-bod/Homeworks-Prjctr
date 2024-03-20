'use strict';

// DOM variable
const button = document.getElementById('toggleButton');

// Create a div element to display the message
const message = document.createElement('div');
message.className = 'message';
document.body.append(message);

// Check if there is any data in localStorage and set the appropriate initial state
let isTurnedOn = Boolean(localStorage.getItem('isTurnedOn'));
let lastMessage = localStorage.getItem('lastMessage') || '';

// Functions
// Function to update the state of the button and the message
function updateState() {
    if (isTurnedOn) {
        button.textContent = 'Turn on';
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else {
        button.textContent = 'Turn off';
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme')
    }
    message.textContent = lastMessage;
}

// Function to handle the button click event
const handleClick = () => {
    isTurnedOn = !isTurnedOn;
    if (isTurnedOn) {
        localStorage.setItem('isTurnedOn', isTurnedOn);
    } else {
        localStorage.removeItem('isTurnedOn');
    }
    lastMessage = isTurnedOn ? `Last turn off: ${formatDate(new Date())}` : `Last turn on: ${formatDate(new Date())}`;
    localStorage.setItem('lastMessage', lastMessage);
    updateState();
};

// Function for formatting the date
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

// Event listener
button.addEventListener("click", handleClick);

// Update button and message state
updateState();