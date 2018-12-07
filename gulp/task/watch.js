import config from '../config';
import gulp from 'gulp';
import debug from 'debug';

var log = debug(`TS-Watch:log`);
debug.enable(`TS-Watch:log`);

function onChange(e) {
    log('File ' + e.path + ' has been changed. Updating..');
}

gulp.task('watch', [], function () {

    global.isWatching = true;

    gulp.watch(config.assets.src, ['assets']).on('change', onChange);
    gulp.watch(config.ts.src, ['transpile']).on('change', onChange);

});
