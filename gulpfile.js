import gulp from 'gulp';
import shell from 'gulp-shell';

export const build = shell.task(['npm run build']);
export const test = shell.task(['npm test']);
export const e2e = shell.task(['npm run e2e']);

export default gulp.series(build, test, e2e);
