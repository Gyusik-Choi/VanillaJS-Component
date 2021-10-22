// es lint, prettier 사용

const blackOut = document.querySelector(".black-out");
const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");

btn.addEventListener("click", () => {
  blackOut.classList.add("is-blacked-out");
  modal.classList.add("is-visible");
});

blackOut.addEventListener("click", () => {
  blackOut.classList.remove("is-blacked-out");
  modal.classList.remove("is-visible");
});
