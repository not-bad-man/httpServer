var fs = require('fs');
var globalConfig = require('./config');

var pathMap = new Map();
var controllerSet = [];

var files = fs.readdirSync(globalConfig["web_path"]);
for (var i = 0; i < files.length; i++) {
   var tempfile = require("./" + globalConfig["web_path"] + "/" + files[i]);
   if(tempfile.path) {
      for (var [key, value] of tempfile.path) {
         if (pathMap.get(key) == null) {
            pathMap.set(key, value)
         } else {
            throw new Error('url path异常，url:' + key)
         }
         controllerSet.push(tempfile);
      }
   }
}
// console.log(pathMap)
module.exports = pathMap;