module.exports= app => {
    const names = require ("../controllers/names.controller.js");
    var router = require("express").Router();

    router.post("/",names.create);

    router.get("/:id", names.findOne);

    app.use('/api/names', router);
};