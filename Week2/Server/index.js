let server = require('./server');
let router = require('./router');
let requestHandle = require('./requestHandler');

server.start(router.route, requestHandle.handle);