/*Mapeia a tabela name do banco de dados */

const { Sequelize } = require("sequelize/dist");

module.exports = (sequelize, Sequelize) => {
    const Names = sequelize.define("names", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        encripted_name: {
            type: Sequelize.STRING
        }

    });

    return Names;
};