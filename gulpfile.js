let gulp = require("gulp");

gulp.task(
  "serve",
  gulp.series(() => {
    require("./server.js");
  })
);

gulp.task(
  "test",
  gulp.series(() => {
    require("./test.js");
  })
);
