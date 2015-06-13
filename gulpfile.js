var gulp = require('gulp');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');

gulp.task('jade', function() {
  gulp.src(['./src/*.jade', './src/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./dist'));
});

gulp.task('vulcanize', function() {
  return gulp.src('./dist/index.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      stripExcludes: false,
      inlineScripts: false
    }))
    .pipe(crisper())
    .pipe(gulp.dest('./dist'));
});

gulp.task('scss', function() {
  gulp.src(['./src/*.scss', './src/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
  gulp.src(['./src/*.js', './src/**/*.js'])
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['jade', 'scss', 'js'], function() {
  gulp.watch(['./src/*.jade', './src/**/*.jade'], ['jade']);
  gulp.watch(['./src/*.scss', './src/**/*.scss'], ['scss']);
  gulp.watch(['./src/*.js', './src/**/*.js'], ['js']);
});
