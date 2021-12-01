const db = require("../models");
const Names = db.Names;
const Op = db.Sequelize.Op;

//criar e salvar novo nome
exports.create = (req, res)=> {
    if (!req.body.name){
        res.status (400).send({
            code: "E_VALIDATION_FAILURE",
            message: " O campo \"name\ é obrigatório"
        });
        return;
    }

    const name = {
        name : req.body.name
    };
    Names.create (name)
    .then(data => {
        res.send(data);
    })
    .catch (err => {
        res.status(500).send({
            message:
            err.message || "Erro ao cadastrar nome."
        });
    });

};

// buscar parametro 
exports.findOne = (req, res) =>{

const id = req.params.id;
 Names.findByPk(id)
 .then(data =>{
     if (data){
         res.send(data);
     }else {
         res.status(404).send({
             message: `Não foi possivel encontrar o nome com a id = ${id}.`
         });
     }
 })
 .catch(err =>{
     res.status(500).send({
         message: "Erro ao retornar o nome com a id =" + id
     });
 });

};