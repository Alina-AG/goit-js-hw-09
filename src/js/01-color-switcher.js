const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intId = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function onStartBtnClick() {
    startBtn.removeEventListener('click', onStartBtnClick);
    startBtn.setAttribute('disabled', 'true');
    stopBtn.addEventListener('click', onStopBtnClick);
    stopBtn.removeAttribute('disabled');
    intId = setInterval(() => {
        const currentColor = getRandomHexColor();
        document.querySelector('body').style.backgroundColor = currentColor;
    }, 1000);
};

function onStopBtnClick() {
    clearInterval(intId);
    startBtn.addEventListener('click', onStartBtnClick);
    startBtn.removeAttribute('disabled');
    stopBtn.removeEventListener('click', onStopBtnClick);
    stopBtn.setAttribute('disabled', 'true');
}

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.setAttribute('disabled', 'true');


