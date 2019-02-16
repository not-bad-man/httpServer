var fs = require('fs');
var globalConfig = require('./config');

var filterSet = [];

var files = fs.readdirSync(globalConfig["filter_path"]);
for (var i = 0; i < files.length; i++) {
   var tempfile = require("./" + globalConfig["filter_path"] + "/" + files[i]);
   filterSet.push(tempfile);
}

module.exports = filterSet;