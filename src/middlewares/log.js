'use strict'

const { request } = require("../server");

module.exports = {
    log: (request, _response, next) => {
        console.log("Acessou a rota: " + request.originalUrl + "em: " + new Date());
        return next();
    },

};

