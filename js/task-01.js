const categoriesArray = document.querySelectorAll('.item');
console.log(`В списке ${categoriesArray.length} категории.`);

categoriesArray.forEach(el => {
    console.log(`Категория: ${el.firstElementChild.textContent}`);
    console.log(`Количество элементов: ${el.lastElementChild.children.length}`);  
});

