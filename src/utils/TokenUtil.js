'use strict'

const jwt = require("jsonwebtoken");

module.exports = {
    gerarToken: (dadosUsuario) => {
        try {
            return jwt.sign(dadosUsuario, 'secret')
        } catch (error) {
            console.error(error);
            throw {
                message: `Error ao gerar token: ${error}`,
                status: 500,
                success: false,
            };
        }
    },
    validarToken: (token) => {
        try {
            return jwt.verify(token, 'secret');
        } catch (error) {
            console.error(error);
            throw {
                message: `Error ao validar token: ${error}`,
                status: 500,
                success: false,
            };
        }
    }, 
};