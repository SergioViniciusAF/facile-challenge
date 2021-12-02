const dbConfig = require ("../config/db.config.js");

const Sequelize = require ("sequelize");

const sequelize = new Sequelize('postgres://bmitbkfk:7nH8KbaN-PxMXwr99gWhm_W7Frn29EE9@castor.db.elephantsql.com/bmitbkfk',{
  
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }

});

const db ={};

db.Sequelize = Sequelize;
db.sequelize= sequelize;
db.Names = require("./names.model.js")(sequelize,Sequelize);

module.exports = db;