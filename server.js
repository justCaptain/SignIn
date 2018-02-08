
var http = require('http');

function start(route,requestHandles){
	http.createServer(function(request,respond){
		console.log('收到请求');
		route(request,respond,requestHandles);

		// console.log('hello world');
		// fs.readFile('./login.html',function(err,data){
		// 	if(err)
		// 		console.log('读取文件错误');
		// 	else{
		// 		respond.writeHead(200,{'Content-Type':'text/html'});
		// 		respond.write(data);
		// 		respond.end();
		// 	}
		// })
		
	}).listen(8888);

	console.log('服务器已启动');	
}

exports.start = start;