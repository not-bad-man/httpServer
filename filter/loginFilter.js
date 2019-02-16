var url = require('url');

function loginFilter(request, response) {
   var pathName = url.parse(request.url).pathname;
   if()
   if(pathName == 'main.html' || pathName == '/main') {
      console.log('go head')
      return true;
   }
   response.writeHead(302, {"location": "/main.html"});
   response.end();
   return false;
}


function isStaticRequest (pathname) {
   for (var i = 0; i < globalConfig.static_file_type.length; i++) {
      if(pathname.endsWith('.html')) {
         continue;
      }
      if(pathname.endsWith(globalConfig.static_file_type[i])){
         return true;
      }
   }
   return false;
}
 
module.exports = loginFilter;