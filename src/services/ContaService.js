'use strict'

let contas = require("../contasdb");
const contaModel = require("../models/ContaModel")

module.exports = {
    listarTodasContas: async () => {
        try {
            const contasCadastradas = await contaModel.find();
            return contasCadastradas;
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,

            };
        }

    },
    buscarPeloId: async (id) => {
        try {
            const contaEncontrada = await contaModel.find({ _id: id });
            return contaEncontrada;
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    },
    incluirConta: async (conta) => {
        try {
            const novaConta = await contaModel.create(conta);
            return novaConta;
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            };
        }
    },
    editarConta: async (id, novasInformacoes) => {
        try {
            // const contaEncontrada = await contaModel.findById(id);

            const contaAtualizada = await contaModel.findByIdAndUpdate(
                id,
                { ...novasInformacoes, },
                { new: true }
            );


            if (!contaAtualizada)
                throw {
                    mensagem: 'Não foi possivel localizar a conta.',
                    success: false,
                    status: 404,
                };
                
            return contaAtualizada
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    }
};
