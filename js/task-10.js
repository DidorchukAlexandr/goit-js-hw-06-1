
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const input = document.querySelector('[type="number"]');
const boxes = document.querySelector("#boxes");

const createBoxes = () => {
  const amount = Number(input.value);
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
   const nevSize = size + i * 10;
    const nevDiv = document.createElement("div");
    nevDiv.style.width = `${nevSize}px`;
    nevDiv.style.height = `${nevSize}px`;
    nevDiv.style.backgroundColor = getRandomHexColor();
    boxes.append(nevDiv);
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);