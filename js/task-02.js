const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.map(item => {
  const ingredient = document.createElement('li');
  ingredient.textContent = item;
  document.querySelector('ul').appendChild(ingredient);
});







