const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ref = document.querySelector('#ingredients');
const itemsRef = ingredients.map((ingredient) => {
  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  return item;
});
ref.append(...itemsRef);

// const UlElem = document.createElement('Ul')
// for (const ingredient of ingredients) {
// const list = document.createElement("li");
// list.className = "item";
// console.log(list);
// list.textContent = ingredient;
// UlElem.appendChild(list);
// }

// document.body.prepend(UlElem);