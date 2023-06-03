'use strict'

let contas = require ("../contasdb");

module.exports = {
    listarTodasContas: () => {
        return contas;
    },
    buscarPeloId: async (id) => {
        let contaId = Number(id);
    
        try{
            const contaEncontrada = await contas.find((conta) => conta.id === contaId);

            if (!contaEncontrada) {
                throw ("Conta não encontrada")
            }

            return contaEncontrada;
        } catch (error) {
            return {mensagem: error }
        }
    },
};