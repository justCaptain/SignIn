var http = require('http');
var fs = require('fs');

http.createServer(function(request,respond){
	console.log('hello world');
	fs.readFile('./login.html',function(err,data){
		if(err)
			console.log('读取文件错误');
		else{
			respond.writeHead(200,{'Content-Type':'text/html'});
			respond.write(data);
			respond.end();
		}
	})
	
}).listen(8888);

console.log('服务器已启动');