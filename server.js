var http = require("http");
var url = require("url");

function init(route, handle){
  
  function onRequest(request, response) {
    
    var pathname =  url.parse(request.url).pathname;
    var content_response = '';

    if (pathname != '/favicon.ico') {
      console.log("Request for " + pathname + " received");
      content_response = route(pathname, handle);
    }
    
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write("Application Started");
    response.write("<br>");
    response.write(content_response);
    response.end();
    
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

exports.init = init;
