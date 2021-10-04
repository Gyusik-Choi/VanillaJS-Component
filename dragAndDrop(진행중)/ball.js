// https://ko.javascript.info/mouse-drag-and-drop
// https://github.com/javascript-tutorial/ko.javascript.info/tree/master/2-ui/3-event-details/4-mouse-drag-and-drop

const ball = document.querySelector("#ball")

ball.addEventListener('mousedown', (event) => {

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  document.body.append(ball);

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  // 초기 이동을 고려한 좌표 (pageX, pageY)에서
  // 공을 이동합니다.
  function onMouseMove(event) {
    const pageX = event.pageX
    const pageY = event.pageY

    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  // mousemove로 공을 움직입니다.
  document.addEventListener('mousemove', onMouseMove);

  // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
  ball.addEventListener('mouseup', function() {
    document.removeEventListener('mousemove', onMouseMove);
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
