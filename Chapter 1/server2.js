var http = require('http');
var fs = require('fs');

function serveStaticFile(res, path, contentType, responseCode){
	if(!responseCode) responseCode=200;
	fs.readFile(__dirname + path, function(err, data){
		if(err){
			res.writeHead(500, {'content-type': 'text/plain'});
			// console.log(err.message);
			res.end("500 - Internal Error");
		}else{
			console.log("made it");
			res.writeHead(responseCode, {'content-type': contentType});
			res.end(data);
		}
	});
}

http.createServer(function(req,res){
	//normalize url by removing querystring
	var path = req.url.replace(/\/?(?:\?.*)?$/,'');
	// console.log(path);

	
	switch(path){
		case '':
				serveStaticFile(res, '/public/home.html', 'text/html');
				break;

		case '/about':
				serveStaticFile(res, '/public/about.html', 'text/html');
				break;

		case '/img/logo.jpeg':
				serveStaticFile(res, '/public/img/logo.jpeg', 'image/jpeg');
				break;

		default :
				serveStaticFile(res, '/public/notfound.html', 'text/html', 404);
				break;
	}
}).listen(8080, function(req,res){
	console.log("Server Running \nPress Ctrl + C to terminate...")
});