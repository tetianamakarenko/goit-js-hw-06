const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const UlElem = document.createElement('Ul')
for (const ingredient of ingredients) {
const list = document.createElement("li");
list.className = "item";
console.log(list);
list.textContent = ingredient;
UlElem.appendChild(list);
}

document.body.prepend(UlElem);