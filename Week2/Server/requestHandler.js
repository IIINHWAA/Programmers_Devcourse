function main(response){ //response가 '/'인 경우의 처리 함수
    console.log('main');

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Main page');
    response.end();
}

function login(response){ //response가 'login'인 경우의 처리 함수
    console.log('login');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

function inhwa(response){ //response가 'inhwa'인 경우의 처리 함수
    console.log('inhwa');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Inhwa');
    response.end();
}

function favicon(response) { 
    console.log("favicon");
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
   }
   

let handle = {}; //key : value 로 이루어진 map
handle['/']=main; //pathname이 '/'안 경우 main 호출
handle['/login']=login; //pathname이 'login'안 경우 main 호출
handle['/inhwa']=inhwa; //pathname이 'inhwa'안 경우 main 호출
handle["/favicon.ico"] = favicon; 

exports.handle = handle;