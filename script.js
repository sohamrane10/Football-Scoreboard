let scoreA = 0, scoreB = 0;
let shotsA = 0, shotsB = 0;
let shotsOnTargetA = 0, shotsOnTargetB = 0;
let foulsA = 0, foulsB = 0;
let cornersA = 0, cornersB = 0;
let freeKicksA = 0, freeKicksB = 0;
let minutes = 0; // Track minutes
let gameStarted = false;
let gameInterval;

// DOM Elements
const scoreADisplay = document.getElementById('scoreA');
const scoreBDisplay = document.getElementById('scoreB');
const shotsADisplay = document.getElementById('shotsA');
const shotsBDisplay = document.getElementById('shotsB');
const shotsOnTargetADisplay = document.getElementById('shotsOnTargetA');
const shotsOnTargetBDisplay = document.getElementById('shotsOnTargetB');
const foulsADisplay = document.getElementById('foulsA');
const foulsBDisplay = document.getElementById('foulsB');
const cornersADisplay = document.getElementById('cornersA');
const cornersBDisplay = document.getElementById('cornersB');
const freeKicksADisplay = document.getElementById('freeKicksA');
const freeKicksBDisplay = document.getElementById('freeKicksB');
const minuteDisplay = document.getElementById('minutes'); // Minutes display

// Increment score functions
document.getElementById('incrementA').addEventListener('click', () => {
    scoreA += 1;
    scoreADisplay.textContent = scoreA;
});

document.getElementById('incrementB').addEventListener('click', () => {
    scoreB += 1;
    scoreBDisplay.textContent = scoreB;
});

// Statistics buttons
document.getElementById('incrementShotsA').addEventListener('click', () => {
    shotsA += 1;
    shotsADisplay.textContent = shotsA;
});

document.getElementById('incrementShotsB').addEventListener('click', () => {
    shotsB += 1;
    shotsBDisplay.textContent = shotsB;
});

document.getElementById('incrementShotsOnTargetA').addEventListener('click', () => {
    shotsOnTargetA += 1;
    shotsOnTargetADisplay.textContent = shotsOnTargetA;
});

document.getElementById('incrementShotsOnTargetB').addEventListener('click', () => {
    shotsOnTargetB += 1;
    shotsOnTargetBDisplay.textContent = shotsOnTargetB;
});

document.getElementById('incrementFoulsA').addEventListener('click', () => {
    foulsA += 1;
    foulsADisplay.textContent = foulsA;
});

document.getElementById('incrementFoulsB').addEventListener('click', () => {
    foulsB += 1;
    foulsBDisplay.textContent = foulsB;
});

document.getElementById('incrementCornersA').addEventListener('click', () => {
    cornersA += 1;
    cornersADisplay.textContent = cornersA;
});

document.getElementById('incrementCornersB').addEventListener('click', () => {
    cornersB += 1;
    cornersBDisplay.textContent = cornersB;
});

document.getElementById('incrementFreeKicksA').addEventListener('click', () => {
    freeKicksA += 1;
    freeKicksADisplay.textContent = freeKicksA;
});

document.getElementById('incrementFreeKicksB').addEventListener('click', () => {
    freeKicksB += 1;
    freeKicksBDisplay.textContent = freeKicksB;
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', () => {
    scoreA = scoreB = 0;
    shotsA = shotsB = 0;
    shotsOnTargetA = shotsOnTargetB = 0;
    foulsA = foulsB = 0;
    cornersA = cornersB = 0;
    freeKicksA = freeKicksB = 0;

    scoreADisplay.textContent = scoreA;
    scoreBDisplay.textContent = scoreB;
    shotsADisplay.textContent = shotsA;
    shotsBDisplay.textContent = shotsB;
    shotsOnTargetADisplay.textContent = shotsOnTargetA;
    shotsOnTargetBDisplay.textContent = shotsOnTargetB;
    foulsADisplay.textContent = foulsA;
    foulsBDisplay.textContent = foulsB;
    cornersADisplay.textContent = cornersA;
    cornersBDisplay.textContent = cornersB;
    freeKicksADisplay.textContent = freeKicksA;
    freeKicksBDisplay.textContent = freeKicksB;
    minuteDisplay.textContent = '0\''; // Reset minutes display
});

// Game control buttons
document.getElementById('startBtn').addEventListener('click', () => {
    if (!gameStarted) {
        gameStarted = true;
        minutes = 0; // Reset minutes
        minuteDisplay.textContent = `${minutes}'`; // Display starting minutes
        gameInterval = setInterval(() => {
            minutes += 1; // Increment minutes every minute
            minuteDisplay.textContent = `${minutes}'`;
        }, 60000); // Update every 60 seconds
    }
});

document.getElementById('endBtn').addEventListener('click', () => {
    if (gameStarted) {
        clearInterval(gameInterval); // Stop the interval
        minuteDisplay.textContent = '90\''; // Set final minutes
        gameStarted = false;
    }
});

let extraTimeClicks = 0;

// Handling Half Time (Display 45')
document.getElementById('halfTimeBtn').addEventListener('click', function() {
    document.getElementById('minutes').textContent = "45'";
    extraTimeClicks = 0; // Reset extra time clicks after half-time
});

// Handling Extra Time
document.getElementById('extraTimeBtn').addEventListener('click', function() {
    extraTimeClicks++;

    if (extraTimeClicks === 1) {
        document.getElementById('minutes').textContent = "45+5'";
    } else if (extraTimeClicks === 2) {
        document.getElementById('minutes').textContent = "90+5'";
    } else if (extraTimeClicks === 3) {
        document.getElementById('minutes').textContent = "120+5'";
    }
});

// Handling Penalties (Display 120')
document.getElementById('penaltiesBtn').addEventListener('click', function() {
    document.getElementById('minutes').textContent = "120'";
});


function updateStats(team, stat) {
  let elementId = '';
  if (stat === 'score') elementId = `score-${team}`;
  else if (stat === 'shots') elementId = `shots-${team}`;
  else if (stat === 'shots-target') elementId = `shots-target-${team}`;
  else if (stat === 'fouls') elementId = `fouls-${team}`;
  else if (stat === 'corners') elementId = `corners-${team}`;
  else if (stat === 'free-kicks') elementId = `free-kicks-${team}`;

  const currentValue = parseInt(document.getElementById(elementId).innerText);
  document.getElementById(elementId).innerText = currentValue + 1;
}

