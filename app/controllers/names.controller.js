/* Gravar nome encriptado e recupera o nome desencriptado */

const db = require("../models");
const Names = db.Names;

// Parâmetros da criptografia 

const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);


// Cria e salva novo nome
exports.create = (req, res)=> {

    // Valida se o nome veio preenchido
    if (!req.body.name){
        res.status (400).send({
            code: "E_VALIDATION_FAILURE",
            message: " O campo \"name\" é obrigatório"
        });

        return;
    }

    // Encripta o nome
    const encripted_name = criptografar(req.body.name)

    const data = {
        encripted_name: encripted_name
    };


    Names.create (data)
    .then(data => {
        res.send({"id": data.id, "encripted_name":data.encripted_name});
    })
    .catch (err => {
        res.status(500).send({
            message:
            err.message || "Erro ao cadastrar nome."
        });
    });

};

// Busca o nome pelo id
exports.findOne = (req, res) =>{

const id = parseInt(req.params.id);

 Names.findByPk(id)
 .then(data =>{

     if (data){

        const decrypted_name  = descriptografar(data.encripted_name);
         res.send({"name": decrypted_name});
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


function criptografar(name) {

    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let stringEncriptada = cipher.update(name, "utf-8", "hex");
    stringEncriptada += cipher.final("hex");
    return stringEncriptada;

};


function descriptografar(name) {
   
    const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
    let stringDesencriptada = decipher.update(name, "hex", "utf-8");
    stringDesencriptada += decipher.final("utf8");    
    return stringDesencriptada;

}