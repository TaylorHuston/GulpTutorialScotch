// grab our packages
var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  sass = = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps');


// configure the jshint task
gulp.task('jshint', function () {
  return gulp.src('source/javascript/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('build-css', function () {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init()) // Process the original sources
    .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/assets/stylesheets'));
});

gulp.task('build-js', function () {
  return gulp.src('source/javascript/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat(bundle.js))
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.rite())
    .pipe(gulp.dest('public/assets/javascript'));
});

gulp.task('watch', function () {
  gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});


// define the default task and add the watch task to it
gulp.task('default', ['watch']);