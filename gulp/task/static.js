import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';

gulp.task('static', function () {
    return gulp.src(config.static.src)
        .pipe(changed(config.static.dest)) // Ignore unchanged files
        // Optimize
        .pipe(gulp.dest(config.static.dest))
});


