
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyColor = document.querySelector("body");
const changeClrBtn = document.querySelector(".change-color");
const span = document.querySelector(".color");
changeClrBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  bodyColor.style.backgroundColor = currentColor;
  span.textContent = currentColor;
});