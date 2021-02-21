const startInterval = setInterval(function() {
    if (clicked) {
        moveRight()
    }
}, 2000)

function slideImage() {
    if (!clicked) {
        clicked = true
    } else {
        clearInterval(startInterval)
        clicked = !clicked
    }
}

function movePhoto(event) {
    const idx = event.target.value
    image.src = selectedPhotos[idx]
    count = idx
}

function moveRight() {
    if (count === 4) {
        count = 0
        image.src = selectedPhotos[count]
    } else {
        count++
        image.src = selectedPhotos[count]
    }
    console.log(count)
}

function moveLeft() {
    if (count === 0) {
        count = 4
        image.src = selectedPhotos[count]
    } else {
        count--
        image.src = selectedPhotos[count]
    }
    console.log(count)
}

function selectPhotos() {
    for (let i = 0; i < idx.length; i++) {
        selectedPhotos.push(photos[idx[i]])
    }
    image.src = selectedPhotos[count]
    console.log(selectedPhotos)
}


function getRandomIndex(min, max) {
    while (idx.length < 5) {
        let num = Math.ceil(Math.random() * (max - min) + min)
        if (idx.indexOf(num) === -1) {
            idx.push(num)
        }
    }
    selectPhotos()
}

function init() {
    previous.addEventListener("click", moveLeft)
    next.addEventListener("click", moveRight)
    first.addEventListener("click", movePhoto)
    second.addEventListener("click", movePhoto)
    third.addEventListener("click", movePhoto)
    fourth.addEventListener("click", movePhoto)
    fifth.addEventListener("click", movePhoto)
    check.addEventListener("click", slideImage)
    
    // fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
    fetch('https://picsum.photos/v2/list?page=2&limit=100')
        .then(response => response.json())
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let thumbnail = data[i].download_url
                // console.log(thumbnail)
                photos[i] = thumbnail
            }
            getRandomIndex(0, 100)
        })
}

const image = document.querySelector(".carousel-image")
const previous = document.querySelector(".previous")
const next = document.querySelector(".next")
const first = document.querySelector(".first")
const second = document.querySelector(".second")
const third = document.querySelector(".third")
const fourth = document.querySelector(".fourth")
const fifth = document.querySelector(".fifth")
const check = document.querySelector(".check")
let photos = new Array(100).fill(0)
let idx = []
let selectedPhotos = []
let count = 0
let clicked = false

init()