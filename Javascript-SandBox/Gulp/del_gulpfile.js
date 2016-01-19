var gulp = require('gulp');
var del = require('del');

gulp.task('clean:mobile', function (){
	return del([
			'dist/report.csv', 
			'dist/mobile/**/*',
			'!dist/mobile/deplay.json'		 
		]);
});

gulp.task('default', ['clean:mobile']);

