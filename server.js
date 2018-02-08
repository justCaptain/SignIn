
var http = require('http');

function start(route,requestHandles){
	http.createServer(function(request,respond){
		console.log('收到请求');
		route(request,respond,requestHandles);
		
	}).listen(8888);

	console.log('服务器已启动');	
}

exports.start = start;