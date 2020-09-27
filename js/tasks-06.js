/* Taks 6
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.
*/

const testInputRef = document.querySelector('#validation-input');
// console.dir(testInputRef);

testInputRef.addEventListener('focus', onInputFocus);
testInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const validLengthRef = Number(testInputRef.getAttribute('data-length'));
  const valueInputRef = event.target.value;
  return valueInputRef.length === validLengthRef
    ? testInputRef.classList.add('valid')
    : testInputRef.classList.add('invalid');
}
function onInputFocus() {
  testInputRef.classList.remove('valid', 'invalid');
}
