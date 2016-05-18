var gulp = require('gulp');
var less = require ('gulp-less')
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
var watchLess = require('gulp-watch-less');

// gulp.task('less', function () {
//   return gulp.src('./less/*.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./public/css'));
// });

gulp.task('less', function () {
  return gulp.src('./less/style.less')
    .pipe(less())
    // .pipe(postcss([
    //     autoprefixer({browsers: ['last 2 version']}),
    //     mqpacker
    // ]))
    //.pipe(rename('style.css'))
    .pipe(gulp.dest('./public/css'));
  gulp.watch('src/less/**/*.less', ['less']);
});

gulp.task('default', function () {
	return gulp.src('less/file.less')
		.pipe(watchLess('less/file.less'))
		.pipe(less())
		.pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('less/**/*.less', ['less']);
    });