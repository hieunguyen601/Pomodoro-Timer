let count = 1500; 
let intervalId;
let isRunning = false;

const timerDisplay = document.querySelector('.timer');
const startButton = document.querySelector('.js-start-button');
const pauseButton = document.querySelector('.js-pause-button'); // 
const resetButton = document.querySelector('.js-reset-button');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

timerDisplay.innerHTML = formatTime(count);

function startTimer() {
    if (isRunning) {
        return;
    }
    isRunning = true;

    intervalId = setInterval(() => {
        count--;
        timerDisplay.innerHTML = formatTime(count);

        if (count <= 0) {
            clearInterval(intervalId);
            isRunning = false;
            alert("Time's up!");
            count = 1500;
            timerDisplay.innerHTML = formatTime(count);
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(intervalId);
    isRunning = false;
}

function resetTimer() {
    clearInterval(intervalId);
    isRunning = false;
    count = 1500;
    timerDisplay.innerHTML = formatTime(count);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


