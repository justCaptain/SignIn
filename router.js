
var url = require('url');

function route(request,respond,requestHandles){
	var pathname = url.parse(request.url).pathname;
	if(typeof (requestHandles.handle[pathname]) === 'function'){            			//处理特定页面
		requestHandles.handle[pathname](respond);
	}else{
		respond.writeHead(200,{'Content-Type':'text/plain'});
		respond.write('hello world');
		respond.end();
	}
}


exports.route = route;