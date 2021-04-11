let gulp = require("gulp");

gulp.task("default", ["serve", "test"]);

gulp
  .task("serve", () => {
    require("./server.js");
  })
  .task("test", () => {
    require("./test.js");
  });
