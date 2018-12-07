import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', ['clean'], function (cb) {

    global.isProd = false;

    runSequence('transpile', 'assets', cb);

});
