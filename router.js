function route(pathname, handle) {

  console.log('Routing to '+ pathname);

  //call to handler
  return eval("handle['"+pathname+"']()");
}

exports.route = route;
