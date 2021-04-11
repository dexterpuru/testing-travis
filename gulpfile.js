let gulp = require("gulp");

gulp.task(
  "serve",
  gulp.series(() => {
    cb();
  })
);

gulp.task(
  "test",
  gulp.series(() => {
    cb()
  })
);
