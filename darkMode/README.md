# Dark Mode

<br>

### 구현 포인트

- 그리드

  - HTML & CSS

    - 상단에 그리드를 적용하여 왼쪽/ 중앙/ 오른쪽 이렇게 삼등분해서 영역을 구분했다

      - 왼쪽에는 빈 div 태그를 적용했다

      - ```css
        .top-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
        ```

  

- 토글 버튼

  - HTML & CSS

    - 화면의 상단 우측에 토글 버튼 스타일로 light mode와 dark mode를 변경할 수 있는 버튼을 생성했다.
    - grid의 영역 안에서의 width나 height는 document의 전체 기준이 아니라 grid가 차지하는 영역 안에서의 기준으로 값이 적용되었다

    - 둥근 형태를 만들기 위해 border-radius를 적용했다.
      - border-radius는 height의 절반 길이로 설정했다.

  - JS

    - local storage에 테마 정보를 저장해두고 버튼을 누를때 마다 'dark'와 'light'로 바뀌게 했다
    - local storage에 저장된 테마에 따라서 'dark'면 document.body.classList에 'dark'를 추가하고, 'light'면 'dark'를 제거했다



참고

패스트캠퍼스 - 시크릿 코드 : 프론트엔드 UI 컴포넌트편 강의

https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

https://en.wikipedia.org/wiki/Pale_Blue_Dot