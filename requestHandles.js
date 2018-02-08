
var fs = require('fs');
var qs = require('querystring');

var handle = [];
handle['/'] = index;
handle['/login'] = login;
handle['/login_check'] = login_check;

function index(request,respond){
	respond.writeHead(200,{'Content-Type':'text/plain'});
	respond.write('hello world');
	respond.end();
}

function login(request,respond){
	respond.setHeader('Content-Type','text/html');
	fs.createReadStream(__dirname +'/public'+'/login.html').pipe(respond);
}

function login_check(request,respond){
	var postData = '';
	request.on('data',function(chunk){
		postData += chunk;
	});
	request.on('end',function(){
		var res = qs.parse(postData);
		respond.writeHead(200,{'Content-Type':'text/plain'});
		respond.write(JSON.stringify(res));
		respond.end();
	})
}

function getImg(pathname,respond){
	respond.setHeader('Content-Type','image/jpeg');
	fs.createReadStream(__dirname+'/public'+pathname).pipe(respond);
}
function getCss(pathname,respond){
	respond.setHeader('Content-Type','text/css');
	fs.createReadStream(__dirname+'/public'+pathname).pipe(respond);
}

function getJs(pathname,respond){
	respond.setHeader('Content-Type','application/x-javascript')
	fs.createReadStream(__dirname+'/public'+pathname).pipe(respond);
}

exports.login_check = login_check;
exports.getJs = getJs;
exports.getCss = getCss;
exports.getImg = getImg;
exports.handle = handle;
exports.index = index;
exports.login = login;