import config from '../config';
import changed from 'gulp-changed';
import gulp from 'gulp';
import ts from 'gulp-typescript';

// pull in the project TypeScript config
const tsProject = ts.createProject(config.tsConfig);

gulp.task('transpile', () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(config.buildDir));
});


