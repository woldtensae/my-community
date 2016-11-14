var http = require('http');
var server = http.createServer(function(request, response){	
	if(request.url==='/'){
	response.setHeader('Content-Type', 'text/html');
	response.end('<strong>sned from the server with respect for your request</strong>');	
 }
	
});
server.listen(8080, function(){
	console.log('I am listning');
	var familyMembers = {
		member1: 'Aman',
		member2: 'Tom',
		member3: 'Henok',
		member4: 'Ephrame'
	};
	console.log(familyMembers.member1);
	console.log((19 == '19'));
	console.log(19 ==='19');	
});
//we can acctually run our server in the internet like contiunually with existing out for people to use it
//1.login to ur server first
//2.use clear to clear the screen
//3.change directory to cd /var/www/example/
//4.cat server.js (don't know why)
//but you will see the exact same code
//5.run node nodejs.practicejs
//then instead of going to localhost:8080 to to myserver.com:8080
// to run the server in the background because node nodejs.practice.js will exist out once you exist out from the server so use (nohup node server.js $) will run it in the background
//use killall node will kill all the process in the server but you want the server running forever so
//npm install forever -g
//forever start server.js will run it forever
//for service to stop your server use (forever stop nodejs.practice.js)
//Or you can also use (forever stop) will actuall stops all process