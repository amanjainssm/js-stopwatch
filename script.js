let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

const pad = (value) => (value < 10 ? `0${value}` : value);

const displayTimer = () => document.getElementById("timer").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;   

const stopwWatch = () => {
    if (isRunning){
        seconds++;
        if(seconds / 60 === 1){
            seconds = 0;
            minutes++;
            if(minutes / 60 === 1){
                minutes = 0;
                hours++;
            }        
        }
        displayTimer();
    }
}

function startStop(){
    const startStopButton = document.getElementById("startStopButton");
    isRunning = !isRunning;
    if(isRunning){
        interval = setInterval(stopwWatch, 1000);
        startStopButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        clearInterval(interval);
        startStopButton.innerHTML = '<i class="fa-solid fa-play"></i>'
    }
}

function reset(){
    const resetButton = document.getElementById("resetButton");
    clearInterval(interval);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTimer();
    startStopButton.innerHTML = '<i class="fa-solid fa-play"></i>'
    resetButton.innerHTML = '<i class="fa-solid fa-arrow-rotate-right"></i>'
}

displayTimer();
