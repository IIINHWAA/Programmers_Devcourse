//서버의 역할 : 서버는 Request를 받음
let http = require('http');
let url = require('url'); //url : 웹 페이지 주소 
const { route } = require('./router');

function start(route, handle){
    function onRequest(request, response){ 
		    //onRequest 함수를 통해서 pathname과 handler과 reponse를 route의 매개변수로
        let pathname = url.parse(request.url).pathname;
        let queryData = url.parse(request.url, true).query; 
        route(pathname, handle, response, queryData.name,queryData.p_num,queryData.menu);
    
    }
    
    http.createServer(onRequest).listen(8880); //서버 생성
}

exports.start = start; //밖에서 start함수를 사용할 수 있도록 export
