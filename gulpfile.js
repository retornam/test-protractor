var fs  = require('fs'),
    gulp  = require('gulp');


// load all the gulp tasks from tasks folder
var TASKDIR = './tasks/';

fs.readdirSync(TASKDIR).forEach(function (task){
  require(TASKDIR + task);
});

