var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// process JS files and return the stream.
gulp.task('js', function () {
  return gulp.src('src/*.js')
    // .pipe(browserify())
    .pipe(uglify())
    .pipe(rename('dots.min.js'))
    .pipe(gulp.dest('dist/'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
  browserSync.reload();
  done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js'], function () {

  // Serve files from the root of this project
  browserSync.init({
      server: {
          baseDir: './',
          index: 'demo/index.html'
      }
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch('src/*.js', ['js-watch']);
  gulp.watch('demo/**/*').on('change', browserSync.reload);
});