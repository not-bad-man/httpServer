var http = require('http');
var url = require('url');
var fs = require('fs');
var log = require('./log');
var filterSet = require('./filterLoader');
var globalConfig = require('./config');
var loader = require('./loader')



http.createServer(function (request, response) {
   var pathName = url.parse(request.url).pathname;
   var params = url.parse(request.url, true).query;
   var isStatic = isStaticRequest(pathName);
   log(pathName)

   for (var i = 0; i < filterSet.length; i++) {
      var flag = filterSet[i](request, response);
      if (!flag) {
         return;
      }
   }

   if (isStatic) {
      try {
         var data = fs.readFileSync(globalConfig['page_path'] + pathName);
         response.writeHead(200);
         response.write(data);
         response.end();
      } catch (err) {
         response.writeHead(404);
         response.write('<html><body>404</body></html>');
         response.end();
      }
   } else {
      if(loader.get(pathName)) {
         loader.get(pathName)(request, response)
      } else {
         response.writeHead(404);
         response.write('<html><body>404</body></html>');
         response.end();
      }
   }
}).listen(globalConfig['port']);

log('服务已启动');

function isStaticRequest (pathname) {
   for (var i = 0; i < globalConfig.static_file_type.length; i++) {
      if(pathname.endsWith(globalConfig.static_file_type[i])){
         return true;
      }
   }
   return false;
}