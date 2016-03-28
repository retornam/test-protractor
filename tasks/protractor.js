var argv =  require('yargs').argv,
    gulp = require('gulp'),
    protractor = require('gulp-protractor').protractor,
    webdriver_standalone = require('gulp-protractor').webdriver_standalone,
    webdriver_update = require('gulp-protractor').webdriver_update;


var baseUrl= argv.url;

if(typeof(baseUrl)=== 'undefined'){
  console.log("please enter a valid url");
  process.exit(1);
}




// The test suite to run [smoke,full]. The default is smoke.

var suite = argv.suite || 'smoke';


gulp.task('webdriver_update', webdriver_update);
gulp.task('e2e', ['webdriver_update'], function (cb) {
  gulp.src(['./e2e/**/*.spec.js'])
  .pipe(protractor({
    configFile: './config/protractor.conf.js',
    args: ['--baseUrl', baseUrl,
            '--suite', suite]
  }))
  .on('error', function (e) { console.log(e); process.exit(1);})
  .on('end', cb);
});
