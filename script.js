let focusModeActive = false;

function toggleFocusMode() {
    focusModeActive = !focusModeActive;
    const focusModeButton = document.getElementById('focusModeButton');
    const appButtons = document.querySelectorAll('.apps-section.app');

    if (focusModeActive) {
        console.log("Focus mode activated.");
        focusModeButton.classList.add('active'); // Add 'active' class to change button color to green
        alert("Focus mode activated. Notifications disabled.");
        // Disable app buttons
        appButtons.forEach(button => {
            button.setAttribute('disabled', 'disabled');
            button.style.pointerEvents = 'none'; // Disable click events
        });
    } else {
        console.log("Focus mode deactivated.");
        focusModeButton.classList.remove('active'); // Remove 'active' class to revert button color to default
        alert("Focus mode deactivated. Notifications enabled.");
        // Enable app buttons
        appButtons.forEach(button => {
            button.removeAttribute('disabled');
            button.style.pointerEvents = 'auto'; // Re-enable click events
        });
    }
}

// Update time spent every minute
let timerInterval = setInterval(updateTimeSpent, 60000);

function redirectToHomePage() {
    window.location.href = 'index.html';
}

function redirectToAboutPage() {
    window.location.href = 'about.html';
}

function redirectToContactPage() {
    window.location.href = 'contactus.html';
}

function redirect() {
    const timeInput = prompt('Time limit for this application (in seconds):');
    const timeLimit = parseInt(timeInput, 10);

    if (isNaN(timeLimit) || timeLimit <= 0) {
        alert('Please enter a valid time in seconds.');
        return;
    }

    setTimeout(function() {
        alert("Reached Time Limit");
        window.location.href = 'limit-reached.html'; // Redirect to limit-reached.html
    }, timeLimit * 1000);
}

let startTime = Date.now();
let timeLimit;

function setTimeLimit() {
    const limitInput = document.getElementById('timeLimit').value;
    if (limitInput) {
        timeLimit = parseInt(limitInput) * 60 * 1000; // Convert minutes to milliseconds
        localStorage.setItem('timeLimit', timeLimit);
        localStorage.setItem('startTime', Date.now());
        document.getElementById('message').innerText = `Time limit set to ${limitInput} minutes.`;
        
        // Redirect to limit-reached.html after setting the time limit
        setTimeout(function() {
            window.location.href = 'limit-reached.html';
        }, timeLimit);
    }
}

function checkTimeLimit() {
    const savedLimit = localStorage.getItem('timeLimit');
    const savedStartTime = localStorage.getItem('startTime');
    if (savedLimit && savedStartTime) {
        timeLimit = parseInt(savedLimit);
        startTime = parseInt(savedStartTime);
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;

        if (elapsedTime >= timeLimit) {
            alert('You have reached your time limit for today.');
            // Redirect to a different page or disable site features
            window.location.href = 'limit-reached.html';
        }
    }
}

setInterval(checkTimeLimit, 1000); // Check every second

// Initialize from localStorage if available
if (localStorage.getItem('timeLimit')) {
    timeLimit = parseInt(localStorage.getItem('timeLimit'));
    startTime = parseInt(localStorage.getItem('startTime'));
    document.getElementById('message').innerText = `Time limit is set to ${timeLimit / (60 * 1000)} minutes.`;
}
