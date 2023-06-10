'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const contaSchema = new Schema(
    {
        descricao: {
            type: String,
            required: true,
        },

        valor: {
            type: Number,
            required: true,
        },

        estaPaga: {
            type: Boolean,
            required: true,
        },

        dataVencimento: {
            type: Date,
            required: true,
        },

        tipo: {
            type: String,
            required: true,
            enum: ["Despesa","Receita"],
        },
    },
    {
        // created_at - data da criação do registro
        // updated_at - data de alteração do registro
        timestamps: true,
    });

    module.exports = mongoose.model("ContaModel", contaSchema);