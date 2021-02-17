var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname));

var server = app.listen(3000, () => {
	console.log('server is running on port', server.address().port);
});
