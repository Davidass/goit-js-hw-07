const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientslistRef = document.querySelector('#ingredients');
console.log(ingredientslistRef);
const createIngredient = ingredient => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = ingredient;
  return listItemRef;
};
const ingredientItemRef = ingredients.map(ingredient =>
  createIngredient(ingredient),
);
// console.log(ingredientItemRef);
ingredientslistRef.append(...ingredientItemRef);
