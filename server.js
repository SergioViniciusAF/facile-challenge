/*Arquivo que configura o server usando o Express */

const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {origin: "http://localhost:8081"};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended :true}));

const db = require("./app/models")
db.sequelize.sync();

db.sequelize.sync({force:true}).then(() =>{
    console.log("Sincronizando banco de dados...");
});

app.get("/", (req, res) => {
    res.json({ message: "Bem vindo(a)!" });
  });

require("./app/routes/names.routes")(app);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () =>{
    console.log(`Rodando na porta: ${PORT}.`);
});