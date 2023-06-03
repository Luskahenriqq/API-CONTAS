"use strict";

const express = require("express");
const cors = require("cors");
const api = express();

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

// rotas de Conta
const contaRoute = require('./routes/ContaRoute');
api.use('/conta', contaRoute);
// ROTAS DA APLICÃO - fim

module.exports = api;