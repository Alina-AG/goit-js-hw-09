import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

function onFormSubmit(evt) {
  evt.preventDefault();

  let delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    Notify.failure('Data must be positive');
    return;
  };  
  
  for (let i = 0; i < amount; i += 1) {
      const position = i + 1;
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
  };
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill  
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      };
    }, delay)
  });
}

form.addEventListener('submit', onFormSubmit);