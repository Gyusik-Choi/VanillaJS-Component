const nav = document.querySelector("#nav")
const navItems = Array.from(nav.children)

const contents = document.querySelector("#contents")
const contentsItems = Array.from(contents.children)

const getOffsetTops = () => contentsItems.map((element) => {
    const ofs = element.offsetTop
    // https://mommoo.tistory.com/85
    // ofs 와 동일한 값 나온다(소수점 차이 제외)
    // offsetTop은 부모가 position: relative면 부모 요소안의 자식 요소의 상대 위치를 나타냄
    // 부모가 position: relative가 아니면 부모 보다 상위에 relative가 있는지 탐색한다
    // relative가 전부 아니면 절대위치를 리턴
    const absoluteTop = window.pageYOffset + element.getBoundingClientRect().top
    const clh = element.clientHeight
    return [ofs - clh / 2, ofs + clh / 2]
})

window.addEventListener("scroll", (event) => {
    // e.target.scrollingElement.scrollTop을
    // window.scrollY로도 대체 가능
    // https://webisfree.com/2019-03-08/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%98%84%EC%9E%AC%EC%9D%98-%EC%8A%A4%ED%81%AC%EB%A1%A4%EB%B0%94-%EC%9C%84%EC%B9%98-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95
    const scrollTops = event.target.scrollingElement.scrollTop
    const targetIndex = getOffsetTops().findIndex(([from, to]) => {
        // return 안쓰면 동작 안한다
        // return 안쓰고 싶으면 {} 대신에 ()로 바꿔줄 것
        // scrollTop >= from && scrollTop < to
        return scrollTops >= from && scrollTops < to
    })
    navItems.forEach((child, index) => {
        if (index !== targetIndex) {
            child.classList.remove("on")
        } else {
            child.classList.add("on")
        }
    })
})

nav.addEventListener("click", (event) => {
    const idx = navItems.indexOf(event.target)
    contentsItems[idx].scrollIntoView({
        block: "start",
        behavior: "smooth"
    })
})
