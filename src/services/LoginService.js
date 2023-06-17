'use strict'

const bcrypt = require ("bcrypt");
const usuarioModel = require("../models/UsuarioModel")

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

            return usuarioEncontrado;
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,

            };
        }

    },
};
