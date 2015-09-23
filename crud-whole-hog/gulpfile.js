var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
	console.log("hello");
  return gulp.src('server/**/*.js') // update path!
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['jshint']);