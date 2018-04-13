var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require("./requestHandlers.js");

var handle = {}
handle["/"] = requestHandlers.init;
handle["/tasks"] = requestHandlers.tasks;
handle["/upload"] = requestHandlers.upload;

server.init(router.route, handle);
