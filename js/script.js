'use strict';

// DOM variable
const button = document.getElementById('toggleButton');

// Create a div element to display the message
const message = document.createElement('div');
message.className = 'message';
document.body.append(message);

// Check if there is any data in localStorage and set the appropriate initial state
let isTurnedOn = localStorage.getItem('isTurnedOn') === 'true';
let lastMessage = localStorage.getItem('lastMessage') || '';

// Functions
// Function to update the state of the button and the message
function updateState() {
    button.textContent = isTurnedOn ? 'Turn on' : 'Turn off';
    document.body.style.backgroundColor = isTurnedOn ? '#333' : '#f0f0f0';
    message.textContent = lastMessage;
}

// Function to handle the button click event
const handleClick = () => {
    isTurnedOn = !isTurnedOn;
    localStorage.setItem('isTurnedOn', isTurnedOn);
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