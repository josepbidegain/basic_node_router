function init() {
  console.log("Handler 'init' was call.");
  return 'Init section';
}

function tasks() {
  console.log("Handler 'tasks' was call.");
  return 'Tasks section';
}

function upload() {
  console.log("Handler 'upload' was call.");
  return 'Upload section';
}

exports.init = init;
exports.tasks = tasks;
exports.upload = upload;
