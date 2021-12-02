/* Configuração da rota */

module.exports= app => {

    const names = require ("../controllers/names.controller.js");
    var router = require("express").Router();

    // Grava o nome encriptado
    router.post("/",names.create);

    // Recupera o nome desencriptado pelo Id
    router.get("/:id", names.findOne);

    // Caminho da rota 
    app.use('/encripts', router);
};