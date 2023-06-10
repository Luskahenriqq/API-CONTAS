'use strict'

const express = require("express");
const router = express.Router();
let contas = require("../contasdb");
const contaService = require('../services/ContaService')

router.get("", async (request, response) => {
    const contas = await contaService.listarTodasContas();
    response.json(contas);
});

router.get("/:id", async (request, response) => {
    try {
        const contaPesquisada = await contaService.buscarPeloId(request.params.id)
        
        if (contaPesquisada.mensagem){
            throw contaPesquisada.mensagem;
        }

        return response.json(contaPesquisada);
    } catch (error) {
        return response.status(404).json({
            message: 'Aconteceu um erro: ' + error,
            sucess: false,
            status:404,
        });
    }
});

// POST
// body params
router.post("", async (request, response) => {
    const resposta = await contaService.incluirConta(request.body) 
    return response.json(resposta)
    // return response.json( await contaService.incluirConta(request.body))
})

router.put("/:id", (request, response) => {
    const contaId = Number(request.params.id);

    const indexContaEncontrada = contas.findIndex(
        (conta) => conta.id === contaId
    );

    if (indexContaEncontrada === -1) {
        return response.status(404).json({ mensagem: "Conta não encontrada." })
    }

    let novaConta = request.body;

    contas[indexContaEncontrada] = { ...novaConta };

    response.json({ mensage: "Conta alterada com sucesso" });
});

module.exports = router;