const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientsList = document.querySelector('ul#ingredients');

const ingredientElements = [];

for (let ingredient of ingredients) {
  const itemEl = document.createElement('li')
  itemEl.textContent = ingredient
  ingredientElements.push(itemEl)
}

ingredientsList.append(...ingredientElements)

console.log(ingredientsList)