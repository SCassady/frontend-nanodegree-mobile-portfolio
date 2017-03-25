var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var csso = require('gulp-csso');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var replace = require('gulp-replace');

gulp.task('html', function() {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
  .pipe(csso())
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('moveImg', function() {
  return gulp.src('./src/img/*.{jpg,png}')
  .pipe(gulp.dest('./dist/img'));
});

gulp.task('jsmin', function() {
  return gulp.src('./src/js/*.js')
  .pipe(jsmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/js'));
});

gulp.task('htmlreplace', ['html'], function() {
  return gulp.src('./dist/*.html')
  .pipe(replace('perfmatters.js', 'perfmatters.min.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('htmlViews', function() {
  return gulp.src('./src/views/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist/views'));
});

gulp.task('cssViews', function() {
  return gulp.src('./src/views/css/*.css')
  .pipe(csso())
  .pipe(gulp.dest('./dist/views/css'));
});

gulp.task('moveImgViews', function() {
  return gulp.src('./src/views/images/*.{jpg,png}')
  .pipe(gulp.dest('./dist/views/images'));
});

gulp.task('jsminViews', function() {
  return gulp.src('./src/views/js/*.js')
  .pipe(jsmin())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/views/js'));
});

gulp.task('htmlreplaceViews', ['htmlViews'], function() {
  return gulp.src('./dist/views/pizza.html')
  .pipe(replace('main.js', 'main.min.js'))
  .pipe(gulp.dest('./dist/views'));
});

gulp.task('default', ['html', 'css', 'jsmin', 'moveImg', 'htmlreplace', 'htmlViews', 'cssViews', 'moveImgViews', 'jsminViews', 'htmlreplaceViews']);
