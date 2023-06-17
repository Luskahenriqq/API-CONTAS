'use strict'

const bcrypt = require("bcrypt");
const usuarioModel = require("../models/UsuarioModel")

module.exports = {
    listar: async () => {
        try {
            return await usuarioModel.find();
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
           return await usuarioModel.find({ _id: id }); 
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    },
    incluir: async (dados) => {
        try {
            dados.senha = await bcrypt.hash(dados.senha, 10);
            return await usuarioModel.create(dados);
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            };
        }
    },
    editar: async (id, novasInformacoes) => {
        try {
            // const contaEncontrada = await usuarioModel.findById(id);

            const dadosAtualizados = await usuarioModel.findByIdAndUpdate(
                id,
                { ...novasInformacoes, },
                { new: true }
            );


            if (!dadosAtualizados)
                throw {
                    mensagem: 'Não foi possivel localizar a conta.',
                    success: false,
                    status: 404,
                };
                
            return dadosAtualizados
        } catch (error) {
            return {
                mensagem: error,
                success: false,
                status: 404,
            }
        }
    }
};
