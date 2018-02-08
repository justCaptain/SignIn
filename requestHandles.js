
var fs = require('fs');

var handle = [];
handle['/'] = index;
handle['/login'] = login;

function index(respond){
	respond.writeHead(200,{'Content-Type':'text/plain'});
	respond.write('hello world');
	respond.end();
}

function login(respond){
	respond.setHeader('Content-Type','text/html');
	fs.createReadStream(__dirname + '/login.html').pipe(respond);
}

exports.handle = handle;
exports.index = index;
exports.login = login;