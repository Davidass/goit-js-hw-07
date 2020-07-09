const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${categoriesRef.children.length} категории`);

itemsRef.forEach(item => {
  console.log(`
  - Категория: ${item.firstElementChild.textContent} 
  - Колочество элементов: ${item.lastElementChild.children.length}`);
});
