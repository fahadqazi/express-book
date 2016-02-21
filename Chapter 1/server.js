var http = require('http');

http.createServer(function(req,res){
	//normalizing url by removing querystring
	var path = req.url.replace(/\/?(?:\?.*)?$/,'');
	
	switch(path){
		case '':
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end("Homepage");
			break;
		case '/about':
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end("About");
			break;
		default:
			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end('Not Found');
			break;
	}
}).listen(8080,function(){
	console.log("Server is running");
});
