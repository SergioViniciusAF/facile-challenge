const express = require("express");

const bodyParser= require("body-parser");
const cors = require("cors");

const app = express();
var corsOptions = {origin: "http://localhost:8081"};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended :true}));
const db = require("./app/models")
db.sequelize.sync();

db.sequelize.sync({force:true}).then(() =>{
    console.log("sincronizando banco de dados");
});


app.get("/", (req, res) => {
    res.json({message: "Bem Vindo"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}.`);
});