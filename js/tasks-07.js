const inputRef = document.querySelector('#font-size-control');
// console.dir(inputRef);

const textRef = document.querySelector('#text');

// console.log(textRef);

function handleInputChange(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener('input', handleInputChange);
