const photozone = document.querySelector(".photozone")
const pageNumber = Math.ceil(Math.random() * 10)
const url = `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}`
let photos = []

const debounce = function(func, delay) {
    let timeoutId = null
    return function(event) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(null, event), delay)
        // 요청이 들어올때 마다 timeoutId 가 새로 생성되는데
        // 이 timeoutId 는 이후 요청에 의해 clearTimeout 으로 지워지고
        // 새로운 timeoutId 가 생성된다
        // 이게 반복되면서 마지막 요청만 clearTimeout 에 걸리지 않고 남아서 동작하게 된다
        //
        // 만약 scroll 을 delay 시간 이내에 멈추지 않고 계속 하면
        // 매번 다음 요청의 clearTimeout 으로 지워져서
        // func 는 동작하지 않는다
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