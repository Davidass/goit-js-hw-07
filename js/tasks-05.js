const inputRef = document.querySelector('#name-input');
const nameOutRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  nameOutRef.textContent =
    event.target.value === '' ? 'незнакомец' : event.target.value;
});
// console.log(nameOutRef.textContent);
