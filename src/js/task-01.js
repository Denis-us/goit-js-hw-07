const allCategories = document.querySelector('#categories');
console.log(`В списке ${allCategories.children.length} категории`)


const firstCategoryName = document.querySelector('#categories li.item');
console.log(`Категория: ${firstCategoryName.firstElementChild.textContent}`);

const elementsOfFirstCategory = firstCategoryName.lastElementChild;

const arrayElementsOfFirstCategory = elementsOfFirstCategory.querySelectorAll('#categories li.item ul li');
console.log(`Количество элементов: ${arrayElementsOfFirstCategory.length}`);



// const categoryName = document.querySelector('ul#categories');

// const categoryName = document.querySelector('.item');
// console.log(categoryName);
// secondCategoryName = categoryName[1].firstElementChild.textContent;
// console.log(secondCategoryName);


