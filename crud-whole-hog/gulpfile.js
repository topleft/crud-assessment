var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'server/app.js', // update path!!
    livereload: true
  });
});

gulp.task('jshint', function() {
	console.log("hello");
  return gulp.src(['server/**/*.js', 'client/public/js/*.js']) // update path!
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('client/public/js/*.js', ['jshint']); // update path!
});

gulp.task('default', ['jshint', 'watch', 'connect']);