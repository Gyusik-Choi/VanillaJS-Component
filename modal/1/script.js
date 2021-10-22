const modalBackground = document.querySelector(".modal-background")
const modalButton = document.querySelector(".modal-button")
const modalContent = document.querySelector(".modal-content")
const modalClose = document.querySelector(".modal-close")
// const hidden = document.querySelector(".hidden")
let clicked = false

const buttonClicked = function() {
    if (clicked === false) {
        clicked = true
        modalBackground.classList.remove("hidden")
        modalContent.classList.remove("hidden")
    } else {
        clicked = false
        modalBackground.classList.add("hidden")
        modalContent.classList.add("hidden")
    }
}

const init = function() {
    // 위의 const hidden 을 통해서 add를 추가하려고 했으나 동작 x
    // modalBackground.classList.add(hidden)
    modalBackground.classList.add("hidden")
    modalContent.classList.add("hidden")
    modalButton.addEventListener("click", buttonClicked)
    modalClose.addEventListener("click", buttonClicked)
}


init()