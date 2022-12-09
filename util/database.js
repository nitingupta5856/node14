const mysql =require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-completed',
    password:'Aa@nitin5856'

});
 module.exports=pool.promise();