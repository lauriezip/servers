var http = require('http');

var PORT = 7000;
var PORTtwo = 7500;

function serverResponse( request, response ) {
	// Do something here....
	response.end('It works!!! Path hit:' + request.url);
}

var server = http.createServer(serverResponse);
var serverTwo = http.createServer(serverResponseTwo);

server.listen(PORT, function () {
	// Do something when we start up the server.
	console.log('Server has been started, listening on: http://localhost:' + PORT);

   
});
function serverResponseTwo( request, response ) {
	// Do something here....
	response.end('bad text!!! Path hit:' + request.url);
}

serverTwo.listen(PORTtwo, function () {
console.log('Server has been started, listening on: http://localhost:' + PORTtwo);

});