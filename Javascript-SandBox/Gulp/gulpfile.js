var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('stream', function(){
	return gulp.src('C/*.c')
											.pipe(watch('C/*.c'))
											.pipe(test());
});

gulp.task('default', ['stream']);
