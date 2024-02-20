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

    yarn add react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-helmet-async react-icons

    npm i react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-icons

### 초기구성 - src/index.js
- HelmetProvider
- BrowserRouter

## 화면 설계

### 로그인 페이지

### 회원가입 페이지

###