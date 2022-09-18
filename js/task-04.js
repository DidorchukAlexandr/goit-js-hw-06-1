
const counter = document.querySelector("#counter");
const decrementButton = document.querySelector(`#counter button[data-action="decrement"]`);
const incrementButton = document.querySelector(`#counter button[data-action="increment"]`);
const counterValue = document.querySelector("#value")

decrementButton.addEventListener("click", ofBtn);
incrementButton.addEventListener("click", onBtn);

let value = 0;

function ofBtn() {
    value -= 1;
    counterValue.textContent = Number(value);
};
function onBtn() {
    value += 1;
    counterValue.textContent = Number(value);
};