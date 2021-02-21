function getRandomIndex(min, max) {
    while (idx.length < 5) {
        let num = Math.ceil(Math.random() * (max - min) + min)
        if (idx.indexOf(num) === -1) {
            idx.push(num)
        }
    }
}

function init() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=100')
    // 순서대로 동작 안되고 있다. .then 3개를 1, 2, 3이라고 한다면 실행 순서는 3, 1, 2다. 어떻게 해야 순서대로 실행되게 할 수 있을까?
        .then(response => response.json())
        .then(function(data) {
            for (let i = 0; i < data.length; i++) {
                let thumbnail = data[i].thumbnailUrl
                // console.log(thumbnail)
                photos[i] = thumbnail
            }
        })
        .then(getRandomIndex(0, 100))
}

const image = document.querySelector(".carousel-image")
let photos = new Array(100).fill(0)
let idx = []
let selectedPhotos = []

init()