/* Taks 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/
const inputRef = document.querySelector('#name-input');
const nameOutRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  nameOutRef.textContent =
    event.target.value === '' ? 'незнакомец' : event.target.value;
});
// console.log(nameOutRef.textContent);
