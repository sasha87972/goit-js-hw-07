const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];




const ingredientsList = ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  return ingredient;
});

document.querySelector('ul').append(...ingredientsList);





