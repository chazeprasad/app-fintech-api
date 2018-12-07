import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';

gulp.task('assets', function () {
    return gulp.src(config.assets.src)
        .pipe(changed(config.assets.dest)) // Ignore unchanged files
        // Optimize
        .pipe(gulp.dest(config.assets.dest))
});


