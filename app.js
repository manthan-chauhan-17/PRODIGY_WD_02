let startTime, elapsedTime = 0, timerInterval;

const hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      miliseconds = document.querySelector('.mili-seconds'),
      span = document.querySelectorAll('span');
      startBtn = document.querySelector('.start-btn'),
      stopBtn = document.querySelector('.stop-btn'),
      resetBtn = document.querySelector('.reset-btn');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 1);
    span.forEach(element => {
        element.style.color = "black";
    });
}

function stopTimer() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;

    span.forEach(element => {
        element.style.color = "red";
    });
}

function resetTimer() {
    clearInterval(timerInterval);
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
    miliseconds.textContent = '000';

    elapsedTime = 0;
    span.forEach(element => {
        element.style.color = "black";
    });
}

function updateTimer() {
    elapsedTime = Date.now() - startTime;
    let time = new Date(elapsedTime);
    hours.textContent = time.getUTCHours().toString().padStart(2, '0');
    minutes.textContent = time.getUTCMinutes().toString().padStart(2, '0');
    seconds.textContent = time.getUTCSeconds().toString().padStart(2, '0');
    miliseconds.textContent = time.getUTCMilliseconds().toString().padStart(3,'0');
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);