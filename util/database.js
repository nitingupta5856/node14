// const mysql =require('mysql2');
// const pool = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-completed',
//     password:'Aa@nitin5856'

// });
//  module.exports=pool.promise();

const Sequelize =require('sequelize');
const sequelize = new Sequelize ('node-completed', 'root', 'Aa@nitin5856', {
    dialect:'mysql',
    host:'localhost'
})
module.exports =sequelize;