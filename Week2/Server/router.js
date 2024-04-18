//라우터의 역할 : Request의 URL에 따라 루트를 정해줌
function route(pathname, handle, response){
    console.log('pathname : ' + pathname); //pathname 출력
    
    if (typeof handle[pathname] === 'function'){ 
        handle[pathname](response); //URL에 따라 루트를 정해주기 위한 핸들러
    }
    else{ //오류 처리
        response.writeHead(404, {'Content-Type' : 'text/html'});
        //Head
        //1. 통신 상태 
        //(ex. 200 : 정상 / 404 : 서버는 정상이지만 클라이언트 오류 / 500 : 서버 이상)
        //2. 응답의 형태를 알려줌 (ex. HTML)
        response.write('Not Found');
        response.end();
    }
}
exports.route=route;