import config from '../config';
import changed from 'gulp-changed';
import nodemon from 'gulp-nodemon';
import gulp from 'gulp';

gulp.task('nodemon', function (cb) {
    return nodemon({
        script: './index.js',
        ext: 'js json env',
        ignore: [
            "test/*",
            "docs/*",
            "gulp/*",
            ".git",
            "node_modules/*"
        ],

        watch: ["bin/*"],
        done: cb
    })
});


