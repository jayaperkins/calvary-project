var gulp = require('gulp');


gulp.task('default', function() {

    var cleanCSS = require('gulp-clean-css');

    gulp.task('minify-css', function() {
        return gulp.src('styles/*.css')
            .pipe(cleanCSS({compatibility: 'ie8'}))
    });

});