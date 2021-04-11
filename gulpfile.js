const { series } = require("gulp");

function serve(){
  require("./server.js");
}
function test(){
  require("./test.js");
}

exports.default = series(serve, test);
