'use strict'

const bcrypt = require ("bcrypt");
const usuarioModel = require("../models/UsuarioModel");
const { gerarToken } = require("../utils/TokenUtil");

module.exports = {
    autenticar: async (usuario) => {
        try {
            const usuarioEncontrado = await usuarioModel.findOne({
                email: usuario.email,
            });

            if (!usuarioEncontrado) {
                return {
                    mensagem: "Credenciais invalidas!",
                    success: false,
                    status: 404,
                };
            }

            const senhaValida = await bcrypt.compare(
                usuario.senha,
                usuarioEncontrado.senha
                );

            if (!senhaValida) {
                return { 
                mensagem: "Credenciais invalidas!",
                success: false,
                status: 404,
             };
            }

            const token = gerarToken(JSON.stringify(usuarioEncontrado));

            return {
                message: "login realizado com sucesso.",
                token,
            } 
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,

            };
        }

    },
};
