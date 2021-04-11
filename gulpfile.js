let gulp = require("gulp");

gulp.series(
  () => {
    require("./server.js");
  },
  () => {
    require(".test.js");
  }
);
