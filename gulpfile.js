const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const lazypipe = require('lazypipe');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const gulpif = require('gulp-if');
const yargs = require('yargs');
const rollup = require('gulp-rollup-file');
const resolve = require('rollup-plugin-node-resolve');
const commonJs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');

const package = require('./package.json');

const OPTIONS = {
  rollup: {
    plugins: [
      resolve({
        main: true,
        jsnext: true,
        browser: true,
      }),
      commonJs(),
      babel()
    ],
    format: 'umd',
    moduleName: package.name,
    moduleId: package.name
  },
};

const argv = yargs.boolean(['debug']).argv;

const errorNotifier = () => plumber({errorHandler: notify.onError('Error in Gulp buildstep')});

const processJs = lazypipe()
  .pipe(() => gulpif(argv.debug, sourcemaps.init()))
  .pipe(rollup, OPTIONS.rollup)
  .pipe(() => gulpif(argv.debug, sourcemaps.write()))

gulp.task('js', () => {
  gulp.src(package.files[0])

    // .pipe(errorNotifier())
    .pipe(processJs())
    .pipe(gulp.dest('dist/'))
    
    .pipe(gulpif(!argv.debug, uglify()))
    .pipe(rename(path => path.extname = '.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulpif(!argv.debug, eslint.failAfterError()));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.js', ['js']);
});

gulp.task('js-watch', ['js'], (done) => {
  browserSync.reload();
  done();
});

gulp.task('serve', ['js'], () => {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'demo/index.html'
    }
  });
  
  gulp.watch('src/**/*.js', ['js-watch']);
  gulp.watch('demo/**/*').on('change', browserSync.reload);
});
