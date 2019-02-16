var util = require('./dbutil.js');

function queryStudent (cb) {
   var querysql = 'select * from student';
   var connection = util.createConnection();

   connection.connect();
   connection.query(querysql, function (error, result) {
      if(error == null) {
         cb(result);
      } else {
         console.log(error)
      }
   })
   connection.end();
}

function queryExactlyStudent (cb, name) {
   var querysql = 'select * from student where name = ?';
   var connection = util.createConnection();

   connection.connect();
   connection.query(querysql, name, function (error, result) {
      if(error == null) {
         cb(result);         
      } else {
         console.log(error)
      }
   })
   connection.end();
}

function querySomeStudent (cb, name, age) {
   var connection = util.createConnection();
   var querysql = 'select * from student';
   var conditions = [name, age];
   connection.connect();
   connection.query(querysql, conditions, function (error, result) {
      if(error == null) {
         cb(result);         
      } else {
         console.log(error)
      }
   })
   connection.end();
}


module.exports = {
   queryStudent, 
   queryExactlyStudent,
   querySomeStudent
}