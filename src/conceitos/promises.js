'use strict'

console.log('iniciando sistema...');

const dirigir = new Promise(
    (resolve, reject) => {
        const temGasolina = false;
        if (temGasolina) {
            resolve('O carro funcionou...')
        }
        reject('O carro não tem gasolina')
    }
);

// console.log(typeof dirigir);
// console.log(dirigir);

dirigir
.then((resultado) => {
    console.log(resultado);
})
.catch((error) => {
    console.log(error);
});

console.log('finalizando sistema...');