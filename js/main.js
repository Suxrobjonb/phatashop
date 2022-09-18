// const userFirstnameInputEl = document.querySelector("#user-firstname");
// const headingEl = document.querySelector("#heading");
// const getBtnEl = document.querySelector("#btn");

// getBtnEl.addEventListener('click', () => {
//     headingEl.innerHTML = userFirstnameInputEl.value
// })

const rectWidth = document.querySelector("#rectange-width");
const rectHeight = document.querySelector("#rectange-height");
const rectRadius = document.querySelector("#rectange-radius");
const rectOpacity = document.querySelector("#rectange-opacity");
const rectSaturate = document.querySelector("#rectange-filter-saturate");
const rectColor = document.querySelector("#rectange-color");
const boxEl = document.querySelector(".box");

rectWidth.addEventListener('input', () => {
  boxEl.style.width = rectWidth.value + "px";
})

rectHeight.addEventListener('input', () => {
  boxEl.style.height = rectHeight.value + "px";
})

rectRadius.addEventListener("change", () => {
  boxEl.style.borderRadius = rectRadius.value + "px"
})

rectOpacity.addEventListener("change", () => {
  boxEl.style.opacity = rectOpacity.value + "%"
})

rectSaturate.addEventListener("change", () => {
  boxEl.style.filter = `contrast(${rectSaturate.value * 3.6 + "%"})`
})

rectColor.addEventListener("change", () => {
  boxEl.style.backgroundColor = rectColor.value;
})