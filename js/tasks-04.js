let counterValue = 0;
const decBntRef = document.querySelector('[data-action="decrement"]');
const incBntRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decBntRef.addEventListener('click', () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
});

incBntRef.addEventListener('click', () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
});
