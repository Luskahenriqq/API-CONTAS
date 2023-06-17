'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuarioSchema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        senha: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

    module.exports = mongoose.model("UsuarioModel", usuarioSchema);