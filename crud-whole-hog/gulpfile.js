var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');

// var paths = {
// 	client: [
// 	'client/public/**/*.js',
// 	'client/public/views/*.html',
// 	'client/public/css/*.css'
// 	],
// 	server: {
// 		index: 'app.js'
// 	}
// };

// nodemon config
// var nodemonConfig = {
// 	env: {
// 		"NODE_ENV" : "development"
// 	}
// };

// // use nodemon running from the server
// gulp.task('serve', function(){
// 	return nodemon (nodemonConfig);
// });

// // when the client file are being monitored, changes refresh browser
// gulp.task('livereload', function(){
// 	livereload.listen();
// 	var server = livereload;
// 	return gulp.watch(paths.client, function(e){
// 		livereload.changed(e.path);
// 	});
// });

gulp.task('nodemon', function(){
	livereload.listen();
	nodemon({
		script: 'server/bin/www',
		ext: 'js' 
	}).on('restart', function(){
		gulp.src('server/bin/www')
			.pipe(livereload())
			// .pipe(notify('Reloading, please wait...'));
	});
});


gulp.task('jshint', function() {
  return gulp.src(['server/**/*.js', 'client/public/js/*.js', 'client/public/angular/*.js']) // update path!
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', function() {
  gulp.watch(['client/public/js/*.js', 'client/public/angular/*.js'], ['jshint']); // update path!
});

gulp.task('default', ['jshint', 'nodemon', 'watch']);