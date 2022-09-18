
const input = document.querySelector("#validation-input");

input.addEventListener("blur", changeColorBorder);

function changeColorBorder() {
    if (input.value.trim().length === Number(input.dataset.length)) {
        input.classList.add("valid");
        input.classList.remove("invalid")
    }
    else {
        input.classList.add("invalid");
        input.classList.remove("valid")
    }
}