const gulp = require("gulp");

gulp.task("serve", async () => {
  require("./server.js.js");
});

gulp.task("test", async () => {
  require("./test.js");
});
