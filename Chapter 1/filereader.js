var fs = require('fs');

fs.readFile('home.html', function(err,data){
	if(err){
		console.log("file not working");
	}else{
		console.log(data.toString());
	}
});


console.log("program line");

