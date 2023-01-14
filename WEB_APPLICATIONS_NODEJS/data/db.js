const mysql = require("mysql2");
const config = require("../config");


const Sequelize= require("sequelize");


const logger = require("../logger");

const sequelize = new Sequelize(config.db.database,config.db.user,config.db.password,{
  dialect:"mysql",
  host:config.db.host,
  logging:(message) => {logger.logger.info(message)}
 });

 async function connect(){
 try{
   await sequelize.authenticate();
 }catch(err){console.log(err)}
 }
 connect();
 module.exports= sequelize;


//  let connection = mysql.createConnection(config.db);

//  connection.connect(function(err){
//      if(err){
//        return  console.log(err);
//     }
    
//      connection.query("SELECT * FROM obtsp_db.customers",function(err,result){
//      });
//      console.log("Mysql server bağlantısı yapıldı");
//  })

//  module.exports = connection.promise();