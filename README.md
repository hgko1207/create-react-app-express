# Node Back-end + React-app

### 1. create-react-app

```bash
npx create-react-app create-react-app-express
cd create-react-app-express
mkdir client
```

### 2. 구조 변경

- React 파일을 /client 디렉토리로 이동시킨다.
  - src
  - public
  - package.json

### 3. 서버 환경 설정

- 루트 경로에 package.json 파일을 생성하고 아래 내용을 복사한다.

```json
{
  "name": "example-create-react-app-express",
  "version": "1.0.0",
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4"
  },
  "devDependencies": {
    "concurrently": "^4.0.1"
  }
}
```

### 4. nodemon 전역 설치

```bash
npm i nodemon -g
yarn
```

### 5. 서버 파일 생성

- server.js 파일을 생성하고 아래 내용을 복사한다.

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
```

### 6. 서버 실행

- 서버를 실행 후 http://localhost:5000/api/hello 경로로 이동하여 결과를 확인한다.

```bash
node server.js
```

### 7. Client 설정

- client 경로에 있는 package.json 파일 맨 아래에 다음 줄을 추가한다.

```json
"proxy": "http://localhost:5000/"
```

### 8. Client 작성

- /client/src/App.js 안에 Express API를 호출하는 코드를 추가한다.

```js
import React, { Component } from "react";

class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.response}</div>
      </div>
    );
  }
}

export default App;
```

### 9. Client 실행

- 루트 경로에 가서 실행 명령을 입력한다.

```bash
yarn dev
```

## Heroku 배포

- server.js 안에 아래 내용을 추가한다.

```js
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
```

- package.json 안에 아래 내용을 추가한다.

```json
"start": "node server.js",
"heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
```

- [Heroku 사이트](https://dashboard.heroku.com/)를 접속하여 계정을 생성하고 로그인한다.
- create a new app 한 후 Deploy 탭을 선택한다.
- GitHub 계정을 연결 한 후 Manual deploy 한다.

# Reference

- [How To Make create-react-app work with a Node Back-end API](https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/)
- [How to deploy a React + Node app to Heroku in 3 minutes without the command line](https://www.freecodecamp.org/news/deploy-a-react-node-app-to/)
