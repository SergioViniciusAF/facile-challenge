/* Configurações do banco de dados */

module.exports ={
   dbURL:'postgres://bmitbkfk:7nH8KbaN-PxMXwr99gWhm_W7Frn29EE9@castor.db.elephantsql.com/bmitbkfk',
    dialect: "postgres",
    pool : {
        max: 5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
    
};