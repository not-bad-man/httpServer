var Dao = require('../service/student');
var url = require('url')

var path = new Map();
function getData (request, response) {
   
   Dao.studentDao.queryStudent(function (result) {
      var nameList = [];
      // console.log(result)
      for(var value of result) {
         nameList.push(value.name);
      }
      // console.log(nameList)
      response.write(nameList.toString());
      response.end();
   });
}
path.set('/getData', getData);


function query (request, response) {
   console.log('position1')
   request.on('data', function (data) {
      var newData = JSON.parse( data.toString() );
      var username = newData.username;
      var password = newData.password;
      
      Dao.personDao.queryPerson(function (result) {
         var res = 'not exist';
         for (var item of result) {
            if(username == item.username && password == item.password) {
               res = 'exist';             
               break;
            }
         }             
         console.log('position')  
         response.writeHead(302, {"location": "./main.html"})
         response.end();         
         // response.write(res);
         // response.end();
         // console.log('res')
      })
   })

}
path.set('/query', query);

module.exports.path = path;