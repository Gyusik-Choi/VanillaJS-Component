const buttonSwitch = document.querySelector('.button-switch')

document.addEventListener('DOMContentLoaded', function(event) {
    const theme = localStorage.getItem('theme')

    if (!theme) {
        localStorage.setItem('theme', 'light')
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    document.body.classList.toggle('dark', theme === 'dark')
})

buttonSwitch.addEventListener('click', function(event) {
    const theme = localStorage.getItem('theme')

    if (theme === 'light') {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }

    // 'dark'가 있으면 제거되고, 없으면 추가된다
    // // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
    document.body.classList.toggle('dark')
})