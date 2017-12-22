var http = require('http');
var url = require('url')
var fs = require('fs');

http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	console.log("pathname:"+pathname);
	if(pathname=='/')
		fs.readFile('./SignIn.html',function(err,data){
			if(err)
				console.log('Read file error!!!');
			else{
				res.writeHead(200,{'Content-Type':'text/html'});
				res.write(data);
				res.end();
			}
		});
	else if(pathname=='/picture_1.jpg'){
		fs.readFile('./picture_1.jpg',function(err,data){
			if(err)
				console.log('read picture wrong!!!');
			else{
				res.writeHead(200,{'Content-Type':'image/jpeg'});
				res.write(data,'binary');
				res.end();
			}
		})
	}
	else if(req.method=='POST'){
		console.log('post have acceve!');
		res.writeHead(200,{'Content-Type':'text/text'});
		res.write(JSON.stringify(req));
		res.end();
	}
	else{
		console.log('404 Not Found !!!!');
		res.writeHead(404,{'Content-Type':'text/text'});
		res.write('404 Not Found Page!');
		res.end();
	}
}).listen(8080);
console.log('server running at http://127.0.0.1:8080');