const jsClockTime = document.getElementById("jsClockTime")
const jsClockToday = document.getElementById("jsClockToday")
// const jsClockDay = document.getElementById("jsClockDay")

function adjustTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const rightNow = `${hours < 10 ? `0${hours}` : hours}` + " : " + `${minutes < 10 ? `0${minutes}` : minutes}` + " : " +  `${seconds < 10 ? `0${seconds}` : seconds}`
    jsClockTime.innerText = rightNow

    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    const today = `${year}` + " . " + `${month < 10 ? `0${month}` : month}` + " . " +  `${date < 10 ? `0${date}` : date}` + " "
    

    const dayIndex = time.getDay()
    const dayArr = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일')
    const day = dayArr[dayIndex]

    jsClockToday.innerText = today + day
}

function init() {
    setInterval(adjustTime, 1000)
}

init()

// 참고
// https://elena90.tistory.com/entry/Java-Script-%EC%98%A4%EB%8A%98%EB%82%A0%EC%A7%9C-%ED%8A%B9%EC%A0%95-%EB%82%A0%EC%A7%9C%EC%9D%98-%EC%9A%94%EC%9D%BC-%EA%B5%AC%ED%95%98%EA%B8%B0-%EC%98%88%EC%A0%9C-%EB%85%84%EB%8F%84-%EC%9B%94-%EC%9D%BC-%EC%9A%94%EC%9D%BC
