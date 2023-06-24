"use strict";

const express = require("express");
const cors = require("cors");
const usuarioRoute = require("./routes/UsuarioRoute");
const contaRoute = require('./routes/ContaRoute');
const loginRoute = require("./routes/LoginRoute");

const api = express();
const db = require("./db").connect();
const middlewareLog = require("./middlewares/log") 
const { verificarToken } = require("./middlewares/autenticacaoMiddleware");

db.then(() => {console.log("Banco de dados conectado com sucesso...")
}).catch((error) => {
    console.error(error);
});

api.use(
    cors({
    origin: "*"
})
);

api.use(express.json());

//GET - POST - PUT - DELETE 
api.get("/info", (request, response) => {
    response.json({
        nome: "API Contas",
        status: "OK",
    });
});

// ROTAS DA APILCAÇÃO -inicio

// rotas de conta
api.use("/conta", verificarToken , middlewareLog.log, contaRoute);

// rotas de usuarios
api.use("/usuario", usuarioRoute)

api.use("/login", loginRoute)
// ROTAS DA APLICÃO - fim

module.exports = api;