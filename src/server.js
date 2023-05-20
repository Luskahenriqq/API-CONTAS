"use strict";

let contas = require ("./contasdb")
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

api.get("/contas", (request, response) => {
    response.json(contas);
});

// :id = request params
api.get("/conta/:id", (request, response) => {
    let contaId = Number(request.params.id);
    let contaEncontrada = contas.find((conta) => conta.id === contaId);

    if(!contaEncontrada) {
        return response.status(404).json({mensagem: "Conta não encontrada." })
    }

    console.log(contaEncontrada);
    return response.json(contaEncontrada);
});

// POST
// body params
api.post("/conta", (request, response) => {
    let novaConta = request.body 
    const novoId = contas.length + 1;
    novaConta = {
        id: novoId,
        ...novaConta,
    };   
    contas.push (novaConta);
    return response.json({mensagem: "Conta cadastrada com sucesso"})
})

api.put("/conta/:id", (request, response) => {
    const contaId = Number(request.params.id);

    const indexContaEncontrada = contas.findIndex(
        (conta) => conta.id === contaId
    );

    if(indexContaEncontrada === -1) {
        return response.status(404).json({mensagem: "Conta não encontrada." })
    }

    let novaConta = request.body; 

    contas[indexContaEncontrada] = {...novaConta};

    response.json({ mensage: "Conta alterada com sucesso"});    
    });
module.exports = api;