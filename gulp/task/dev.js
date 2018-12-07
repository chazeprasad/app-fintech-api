import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function (cb) {

    global.isProd = false;

    runSequence('transpile',[ 'assets', 'static' ], 'watch', 'nodemon', cb);

});
