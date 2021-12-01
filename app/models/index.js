const dbConfig = require ("../config/db.config.js");

const sequelize = require ("sequelize");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
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
db.Sequelize= Sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize,Sequelize);

module.exports = db;