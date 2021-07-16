const photozone = document.querySelector(".photozone")
const pageNumber = Math.ceil(Math.random() * 10)
const url = `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}`
let photos = []

const debounce = function(func, delay) {
    let timeoutId = null
    return function(event) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(null, event), delay)
    }
}

const onScroll = function(event) {
    const { clientHeight, scrollTop ,scrollHeight } = event.target.scrollingElement
    console.log(scrollTop)
    if (clientHeight + scrollTop === scrollHeight) {
        getPhotoData()
    }
}

const showPhotos = function() {
    for (let i = 0; i < 5; i++) {
        const title = document.createElement("p")
        title.innerText = photos[i].title
        const img = document.createElement("img")
        img.src = photos[i].thumbnailUrl
        const div = document.createElement("div")
        div.append(title)
        div.append(img)
        photozone.append(div)
    }
    photos = []
}

const getPhotoData = async function() {
    const response = await fetch(url)
    const data = await response.json()
    for (let i = 0; i < 5; i++) {
        photos.push(data[i])
    }
    showPhotos()
}

const init = function() {
    getPhotoData()
}

document.addEventListener("scroll", debounce(onScroll, 300))
init()