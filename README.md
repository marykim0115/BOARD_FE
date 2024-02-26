### 설정 파일 만들기

- .prettierrc

  {
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "all"
  }

- jsconfig.json

  {
  "compilerOptions": {
  "target": "ES6"
  }
  }

### 의존성 추가

- react-router-dom : 라우터
- sass, styled-components, classnames : 스타일
- @loadable/component : 지연로딩
- immer : 불변성 관리
- axios : ajax
- i18next, react-i18next : 메세지, 다국어 처리
- react-helmet-async : head 태그 내부 구성 변경할때 사용
- react-icons : 리액트에서 제공하는 아이콘 모음
- react-cookies :

  yarn add react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-helmet-async react-icons

  npm i react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-icons

### 라이브러리

- axios : http를 이용해서 서버와 통신하기 위해 사용하는 패키지

### 초기구성 - src/index.js

- HelmetProvider
- BrowserRouter

## 화면 설계

### 메인 페이지
![main page](https://github.com/marykim0115/BOARD_FE/assets/130652983/7d433804-b5b4-463f-9a79-1951f10a352c)

### 메인 페이지 상세 설명
![explanation](https://github.com/marykim0115/BOARD_FE/assets/130652983/d520683c-a7d7-46af-a6c2-07f011274e42)
