
var url = require('url');
var path = require('path');

var imgExt = new Array('.png','.jpg','.jpeg','.bmp','.gif');
var cssExt = new Array('.css');
var jsExt = new Array('.js');

Array.prototype.contain = function(obj){
	for(var i=0; i<this.length; i++){
		if(this[i] === obj)
			return true;
	}
	return false;
} 


function route(request,respond,requestHandles){
	var pathname = url.parse(request.url).pathname;
	if(typeof (requestHandles.handle[pathname]) === 'function'){            			//处理特定页面
		requestHandles.handle[pathname](request,respond);
	}
	else if(imgExt.contain(path.extname(pathname))){
		requestHandles.getImg(pathnname,respond);
	}
	else if(cssExt.contain(path.extname(pathname))){
		requestHandles.getCss(pathname,respond);
	}
	else if(jsExt.contain(path.extname(pathname))){
		requestHandles.getJs(pathname,respond);
	}
	else{
		respond.writeHead(200,{'Content-Type':'text/plain'});
		respond.write('未找到相应的页面；目标是： '+pathname);
		respond.end();
	}
}


exports.route = route;