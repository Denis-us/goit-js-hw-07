const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


const ingredientsList = document.querySelector('#ingredients');

const ingredientElements = ingredients => {
  return ingredients.map (ingredient => {
    const itemsEl = document.createElement('li')
    itemsEl.textContent = ingredient;

    return itemsEl
  })
};

const elements = ingredientElements(ingredients)

ingredientsList.append(...elements)

console.log(ingredientsList)