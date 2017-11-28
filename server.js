var http = require("http");

http.createServer(function(request,respond){
	respond.writeHead(200,{"Content-Type":"text/plain"});
	respond.end("hello world!");
}).listen(8088);
console.log("server running at http:127.0.0.1:8088/")