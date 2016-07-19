var gulp = require('gulp');
var print = require('gulp-print');
var babel = require('gulp-babel');

gulp.task('js', function() {
	  return gulp.src('app/**/*.js')  
							.pipe(print())        
							.pipe(babel({ presets: ['es2015']  })) 
							.pipe(gulp.dest('build'));  
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.*', ['js']);
});
