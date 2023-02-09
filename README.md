# JSON server와 React 통신

JSON server와 React 통신을 위해 두개의 서버를 열어야합니다.

서버를 열기 전 logintest 폴더로 이동 후 npm update를 진행해줍니다.
```
npm update
```

1. logintest 폴더로 이동 후 아래 커맨드를 입력해 React 서버를 열어줍니다. 
```
npm start
```

2. json-server 폴더로 이동 후 아래 커맨드를 입력해 JSON 서버를 열어줍니다.
```
json-server db.json --port 3001
```

리액트 파일 내부에서, 하드코딩으로 주소를 받아왔기 때문에
다른 포트를 사용하기를 원한다면 React Container 내부 axios 통신에 대한 주소를 변경해주어야 합니다.

ex)
```
try {
  await axios({
    url: `{{JSON 서버 주소}}/${id}`,
    method: "delete",
  }).then((res) => {
    console.log(res);
  });
} catch (e) {
  console.log(e);
}
```
