const allCategories = document.querySelector('#categories');
console.log(`В списке ${allCategories.children.length} категории`)

const categoryName = document.querySelectorAll('.item');
const firstCategory = categoryName[0].querySelectorAll('li');
const secondCategory = categoryName[1].querySelectorAll('li');
const thirdCategory = categoryName[2].querySelectorAll('li');
console.log(`Категория: ${categoryName[0].firstElementChild.textContent}`);
console.log(`Количество элементов: ${firstCategory.length}`);
console.log(`Категория: ${categoryName[1].firstElementChild.textContent}`);
console.log(`Количество элементов: ${secondCategory.length}`);
console.log(`Категория: ${categoryName[2].firstElementChild.textContent}`);
console.log(`Количество элементов: ${thirdCategory.length}`);




