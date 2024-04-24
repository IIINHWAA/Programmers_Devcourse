//서버의 역할 : 서버는 Request를 받음
let http = require('http');

function onRequest(request, response){ 
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(8880); //서버 생성
//http 모듈에 createServer 함수에서 일을 한 뒤 onRequest 콜백함수를 실행