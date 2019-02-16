var util = require('./dbutil');

function queryPerson (cb) {
   var connection = util.createConnection();
   connection.connect();

   var select = 'select * from person';
   connection.query(select, function (error, result) {
      if(error == null) {
         cb(result);
      } else {
         console.log(error)
      }
   })
   connection.end();
}

module.exports = {
   queryPerson
}