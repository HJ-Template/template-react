# 리액트 템플릿

## 패키지 설치하기

```sh
$ yarn install
```

## 프로젝트에 맞게 파일 내용 변경하기

### 환경설정 파일 생성

```sh
$ touch .env
```

### package.json 설정파일 수정

```json
{
  "name": "<프로젝트 이름>",
  // ...
  "homepage": "https://<아이디>.github.io/<프로젝트 이름>"
}
```

### src/App.tsx 루트폴더 수정

```tsx
// ...
const repository = "<프로젝트 이름>";

export default function App(): ReactElement {
  // ...
}
```

## 깃허브 배포하기

```sh
$ yarn deploy
```
