const Carousel = function() {
    this.items = document.querySelectorAll(".carousel-item")
    this.length = this.items.length

    this.prev = this.length - 1
    this.current = 0
    this.next = this.current + 1

    this.isMoving = false
}

Carousel.prototype.initCarousel = function() {
    this.items[this.prev].classList.add("prev")
    this.items[this.current].classList.add("active")
    this.items[this.next].classList.add("next")

    this.setEventListener()
}

Carousel.prototype.setEventListener = function() {
    const prevBtn = document.querySelector(".carousel-button-prev")
    const nextBtn = document.querySelector(".carousel-button-next")

    prevBtn.addEventListener("click", () => {
        this.moveCarousel(-1)
    })

    nextBtn.addEventListener("click", () => {
        this.moveCarousel(1)
    })
}

Carousel.prototype.moveCarousel = function(direction) {
    this.items[this.prev].classList.remove("prev")
    this.items[this.current].classList.remove("active")
    this.items[this.next].classList.remove("next")

    this.prev = this.getIdx(this.prev, direction)
    this.current = this.getIdx(this.current, direction)
    this.next = this.getIdx(this.next, direction)

    this.items[this.prev].classList.add("prev")
    this.items[this.current].classList.add("active")
    this.items[this.next].classList.add("next")
}

Carousel.prototype.getIdx = function(curIdx, direction) {
    if (direction === -1) {
        curIdx = (this.length + curIdx - 1) % this.length
        return curIdx
    } else {
        curIdx = (curIdx + 1) % this.length
        return curIdx
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const carousel = new Carousel()
    carousel.initCarousel()
})