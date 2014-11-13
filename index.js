var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

var handle = {
	"/" : requestHandler.start,
	"/start" : requestHandler.start,
	"/upload" : requestHandler.upload,
	"/show" : requestHandler.show
};

server.start(router.route, handle);