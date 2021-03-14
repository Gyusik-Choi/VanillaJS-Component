const navElem = document.querySelector("#nav");
const navItems = Array.from(navElem.children);

const contentsElem = document.querySelector("#contents");
const contentItems = Array.from(contentsElem.children);

const offsetTops = contentItems.map((elem) => {
  const [ofs, clh] = [elem.offsetTop, elem.clientHeight];
  return [ofs - clh / 2, ofs + clh / 2];
});

// 스크롤 이벤트
window.addEventListener("scroll", (e) => {
  const { scrollTop } = e.target.scrollingElement;
  // do something
  const targetIndex = offsetTops.findIndex(([from, to]) => {
    // return 안쓰면 동작 안한다
    // return 안쓰고 싶으면 {} 대신에 ()로 바꿔줄 것
    // scrollTop >= from && scrollTop < to
    return scrollTop >= from && scrollTop < to
  })
  navItems.forEach((child, index) => {
    if (index !== targetIndex) {
      child.classList.remove('on')
    } else {
      child.classList.add('on')
    }
  })
  
});

// 클릭 이벤트
navElem.addEventListener("click", (e) => {
  const targetElem = e.target;
  if (targetElem.tagName === "BUTTON") {
    const targetIndex = navItems.indexOf(targetElem.parentElement);
    contentItems[targetIndex].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
});

