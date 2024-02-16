### 설정 파일 만들기
- .prettierrc
- jsconfig.json

### 의존성 추가
- react-router-dom : 라우터
- sass, styled-components, classnames : 스타일
- @loadable/component : 지연로딩
- immer : 불변성 관리
- axios : ajax
- i18next, react-i18next : 메세지, 다국어 처리
- react-helmet-async : head 태그 내부 구성 변경할때 사용

    yarn add react-router-dom sass styled-components classnames @loadable/component immer axios i18next react-i18next react-helmet-async

### 초기구성 - src/index.js
-HelmetProvider
-BrowserRouter