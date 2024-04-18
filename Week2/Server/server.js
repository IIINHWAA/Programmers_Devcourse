let http = require('http');
let url = require('url');
const { route } = require('./router');


function start(route, handle){
    function onRequest(request, response){
        let pathname = url.parse(request.url).pathname;
        route(pathname, handle, response);
    
    }
    
    http.createServer(onRequest).listen(8880);
}

exports.start = start; //밖에서 start함수를 사용할 수 있도록 export
