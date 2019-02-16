var fs = require('fs');
var globalConfig = require('./config');
var fileName = globalConfig.log_path + globalConfig.log_name;


// fs.writeFile(fileName, '', function () {})

function log (data) {
   // console.log(data);
   fs.writeFile(fileName, data + '\n', {flag:'a'} ,function () {})

}

module.exports = log;