import inputValues from "./utils/inputValues.js";
const progressCircle = document.getElementById('progress');

const numberInput = document.getElementById('value');

numberInput.addEventListener("input", (e) => {
    const value = inputValues(e.target.value);
    e.target.value = value;

    progressCircle.style.setProperty('--percent', `${value}%`);
})

const animateCheckbox = document.getElementById('animate');

animateCheckbox.addEventListener("click", (e) => {
    if (e.target.checked) {
        progressCircle.style.animation = '1.5s rotate linear infinite';
    } else {
        progressCircle.style.animation = null;
    }
})

const hideCheckbox = document.getElementById('hide');

hideCheckbox.addEventListener("click", (e) => {
    if (e.target.checked) {
        progressCircle.style.opacity = '0';
    } else {
        progressCircle.style.opacity = '1';
    }
})