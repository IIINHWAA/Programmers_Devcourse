function main(response){
    console.log('main');

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Main page');
    response.end();
}

function login(response){
    console.log('login');
    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page');
    response.end();
}

function inhwa(response){
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
handle['/']=main;
handle['/login']=login;
handle['/inhwa']=inhwa;
handle["/favicon.ico"] = favicon;

exports.handle = handle;
