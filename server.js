// 서버 구축
// 서버 객체 생성
const http = require("http"); // default module 가져오기

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // response 작성
  res.write("hello node.js"); // response message
  res.end(); // response 완료
});

// 서버가 응답할 수 있는 상태로 만들기
server.listen(3000, () => {
  console.log("Server is listening on port 3000"); // 동작 완료 메시지 출력
});
