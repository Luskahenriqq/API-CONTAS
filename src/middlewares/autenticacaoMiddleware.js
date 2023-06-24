'use strict'

const { json } = require("express");
const { validarToken } = require("../utils/TokenUtil");

module.exports = {
    verificarToken: (request, response, next) => {
        const token = request.headers.token;

        if(!token) return response.status(401).json({
            message: "O token não foi informado!",
        });
        try {
            validarToken(token);
            return next();
        } catch (error) {
            console.error(error);
            return response.status(401).json({ message: error })
        }
    },
};