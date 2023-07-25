import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notify.failure ("Please choose a date in the future")
        } else {
            startBtn.addEventListener('click', onStartBtnClick);
            startBtn.disabled = false;
        };
    },
};

const startBtn = document.querySelector('button[data-start]');
const timerArr = [...document.querySelector('.timer').children];
const input=document.querySelector('#datetime-picker')
const date = flatpickr('#datetime-picker', options);
// let intId = 0;

const addLeadingZero = value => String(value).padStart(2, '0');

function onStartBtnClick() {
    startBtn.disabled = true;
    input.disabled = true;
    const startDate = date.selectedDates[0].getTime();
    
    // if (intId) {
    //     clearInterval(intId);
    // }
    intId = setInterval(() => {
        const gap = startDate - new Date();
        const { days, hours, minutes, seconds } = convertMs(gap);
        if (gap<0) {
            clearInterval(intId);
            startBtn.disabled = false;
            input.disabled = false;            
            return;
        };
        // const days = String(Math.floor(gap / (1000*60*60*24))).padStart(2,"0");
        // const hours = String(Math.floor((gap / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        // const minutes = String(Math.floor((gap / (1000 * 60) )% 60)).padStart(2, "0");
        // const seconds = String(Math.floor((gap / 1000)%60)).padStart(2, "0");
        
        timerArr[0].textContent = (addLeadingZero(days) + " Days");
        timerArr[1].textContent = (addLeadingZero(hours) + " Hours");
        timerArr[2].textContent = (addLeadingZero(minutes) + " Minutes");
        timerArr[3].textContent = (addLeadingZero(seconds) + " Seconds");
    }, 1000);
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = Math.floor(ms / day);
  // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes  
    const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};
        
startBtn.disabled = true;
