const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];


 


//   const elementList = ingredients.forEach(ingredient => console.log(ingredient));
//   console.log(elementList);

  const elementListAdd = document.createElement('li');



for (let ingredient of inredients) {
    elementListAdd.textContent = ingredient
    console.log(elementListAdd)
}

