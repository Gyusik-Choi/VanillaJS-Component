let photos = []
let count = 0
const box = document.querySelector(".box")

function initAfter() {
    count--
    if (photos.length < 5) {
        for (let i = 0; i < photos.length; i++) {
            let smallBoxTitle = document.createElement("p")
            smallBoxTitle.innerText = photos[i].title
            let smallBox = document.createElement("img")
            smallBox.src = photos[i].thumbnailUrl
            box.append(smallBoxTitle)
            box.append(smallBox)
        }
    } else {
        for (let i = photos.length - 5; i < photos.length; i++) {
            let smallBoxTitle = document.createElement("p")
            smallBoxTitle.innerText = photos[i].title
            let smallBox = document.createElement("img")
            smallBox.src = photos[i].thumbnailUrl
            box.append(smallBoxTitle)
            box.append(smallBox)
        }
    }
}

function getPictures() {
    fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=5')
    .then(res => res.json())
    .then(data => photos = [...photos, ...data])
    .then(initAfter)
}

function checkSize() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (count === 0) {
            count++
            setTimeout(getPictures, 300)
        }
    }
}

function init() {
    checkSize()
    window.addEventListener("scroll", checkSize)
}

init()