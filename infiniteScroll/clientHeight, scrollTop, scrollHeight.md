# clientHeight, scrollTop, scrollHeight

- clientHeight
  - 요소(element)의 내부 높이
    - 쉽게 표현하자면 보이는 화면의 높이
      - css height + css padding - height of horizontal scrollbar(세로 스크롤바가 있을 경우)
    - padding 포함
    - margin 포함X
    - border 포함X

<br>

- scrollTop
  - 세로로 얼마나 스크롤 됐는지 픽셀값을 나타내거나 부여하는 속성
  - 요소의 화면에서 보이는 최상단 지점부터 해당 요소의 최상단까지의 거리를 나타냄
  - 세로 스크롤바가 생성되지 않으면 scrollTop 값은 0
    - 스크롤할 수 없다는 의미
    - 음수값은 없음
  - padding 포함
  - margin 포함X
  - border 포함X

<br>

- scrollHeight
  - 요소의 총 높이
  - padding 포함
  - margin 포함X
  - border 포함X

<br>

스크롤을 끝까지 했는지 판별하기 by MDN

```html
element.scrollHeight - element.scrollTop === element.clientHeight
```

<br>

참고

https://blogpack.tistory.com/706

https://developer.mozilla.org/ko/docs/Web/API/Element/clientHeight

https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop

https://developer.mozilla.org/ko/docs/Web/API/Element/scrollHeight