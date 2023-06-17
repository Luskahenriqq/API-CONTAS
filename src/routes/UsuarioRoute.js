'use strict'

const express = require("express");
const router = express.Router();
const usuarioService = require('../services/UsuarioService')

router.get("", async (request, response) => {
    return response.json(await usuarioService.listar());
});

router.get("/:id", async (request, response) => {
    return response.json (await usuarioService.buscarPeloId(request.params.id));
});

router.post("", async (request, response) => {
    return response.json(await usuarioService.incluir(request.body));
});

router.put("/:id", async (request, response) => {
    return response.json(await usuarioService.editar(
        request.params.id,
        request.body
    ));
});

module.exports = router;