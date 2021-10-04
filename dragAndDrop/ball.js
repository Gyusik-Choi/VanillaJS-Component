// https://ko.javascript.info/mouse-drag-and-drop
// https://github.com/javascript-tutorial/ko.javascript.info/tree/master/2-ui/3-event-details/4-mouse-drag-and-drop

const ball = document.querySelector("#ball")

ball.addEventListener('mousedown', (event) => {

  ball.style.position = 'absolute'
  // pageX, clientX는 ball에서의 클릭 위치가 기준이 아니라 event가 기준이다
  // 그러므로 ball을 클릭한 위치에 따라 값이 다르다
  // 예를 들어, ball 이미지에서 가운데 왼쪽 끝부분을 눌렀을때와 가운데 오른쪽 끝부분을 눌렀을때 pageX, clientX값이 다르다.

  // 그러나 ball의 getBoundingClientRect()에서 제공하는 값은
  // ball을 클릭하는 위치에 관계없이 고정되어 있다 (현재 위치하고 있는 위치의 값으로 고정)
  let shiftX = event.clientX - ball.getBoundingClientRect().left
  let shiftY = event.clientY - ball.getBoundingClientRect().top

  // 초기 이동을 고려한 좌표 (pageX, pageY)에서 공을 이동합니다.
  const onMouseMove = function(event) {
    const pageX = event.pageX
    const pageY = event.pageY

    ball.style.left = pageX - shiftX + 'px'
    ball.style.top = pageY - shiftY + 'px'
  }

  // mousemove로 공을 움직입니다.
  document.addEventListener('mousemove', onMouseMove)

  // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
  ball.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', onMouseMove)
  })

})

ball.addEventListener('dragstart', function(event) {
  event.preventDefault()
})


// ball.onmousedown = function(event) {

//   ball.style.position = 'absolute';
//   ball.style.zIndex = 1000;

//   let shiftX = event.clientX - ball.getBoundingClientRect().left;
//   let shiftY = event.clientY - ball.getBoundingClientRect().top;

//   // 초기 이동을 고려한 좌표 (pageX, pageY)에서
//   // 공을 이동합니다.
//   function onMouseMove(event) {
//     const pageX = event.pageX
//     const pageY = event.pageY

//     ball.style.left = pageX - shiftX + 'px';
//     ball.style.top = pageY - shiftY + 'px';
//   }

//   // mousemove로 공을 움직입니다.
//   document.addEventListener('mousemove', onMouseMove);

//   // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
//   ball.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     ball.onmouseup = null;
//   };

// };

// ball.ondragstart = function() {
//   return false;
// };
