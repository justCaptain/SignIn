var server = require( './server.js');
var router = require('./router.js');
var requestHandles = require('./requestHandles.js');

server.start(router.route,requestHandles);
console.log('程序启动成功');