

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector("#ingredients");

const items = ingredients.map((item) => {
  const itemsEl = document.createElement("li");
  itemsEl.classList.add("item");
  itemsEl.textContent = item;
  return itemsEl;
});
console.log(items);
ingredientsListEl.append(...items);