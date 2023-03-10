const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = parseInt(inputEl.value);
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  
  animateTimer(seconds);
  showTime(seconds);

  inputEl.value = '';
});

//time show
function showTime(seconds) {
  if (seconds === ' ') {
    timerEl.innerHTML = `00:00:00`;
  }
  timeCounter = seconds + 1;
  function countTime() {
    if (timeCounter <= 1) {
      timeCounter = 1;
    }

    timeCounter --;

    hours = Math.floor(timeCounter / 3600);
    if (hours < 10) {
        hours = `0${hours}`;
    };

    minutes = Math.floor(timeCounter / 60 % 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    };

    seconds = Math.floor(timeCounter % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    timerEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  }

  const interval = setInterval( function() {
    countTime();
    if (timeCounter === 0) {
      timerEl.innerHTML = `00:00:00`;
      clearInterval(interval);
    }
  }, 1000);
}