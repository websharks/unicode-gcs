// jshint esversion: 6

let s = require('shelljs');
s.esc = require('shell-escape');

let gulp = require('gulp');
let pkg = require('./package.json');
let browserify = require('browserify');
let uglify = require('uglify-js');

let srcDir = __dirname + '/src';
let distDir = __dirname + '/dist';
let srcFile = srcDir + '/index.js';
let distFile = distDir + '/index.js';
let distMinFile = distDir + '/index.min.js';
let bin = __dirname + '/node_modules/.bin';

gulp.task('mkdirs', (done) => {
  s.mkdir('-p', distDir), done();
});
gulp.task('browserify', (done) => {
  s.exec(s.esc([bin + '/browserify', srcFile, '--standalone', pkg.namespace, '--outfile', distFile])), done();
});
gulp.task('uglify', (done) => {
  s.exec(s.esc([bin + '/uglifyjs', distFile, '--output', distMinFile])), done();
});
gulp.task('default', gulp.series('mkdirs', 'browserify', 'uglify'));
