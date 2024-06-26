let server = require('./server');
let router = require('./router');
let requestHandle = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandle.handle); 
// router의 route와 requestHandle의 handle을 server.start함수의 매개변수로 넘겨줌