"use strict";

const api = require("./server");

// FUNÇÂO NOMEADA
function teste1(n1, n2) {
    return n1 + n2;
}
const resultado1 = teste1(10, 10);
console.log("resultado 1: ", resultado1);

// FUNÇÃO ANÔNIMA (sem nome)
const teste2 = function (n1, n2) {
    return n1 + n2;
}
const resultado2 = teste2(10, 20);
console.log("resultado 2: ", resultado2);

// FUNÇÃO ARQUEADA (arrow): '=>'
// toda arrow function é anonima
// não usa a palavra 'function'
// usa o símbolo '=>'
const teste3 = (n1, n2) => {
    return n1 + n2;
};
const resultado3 = teste3(10, 30);
console.log("resultado3: ", resultado3);

// FUNÇÃO ARQUEADA (com parametros)
const teste4 = (n1, n2) => n1 + n2;

// FUNÇÃO ARQUEADA (sem parametros)
const teste5 = _ => console.log("passou aqui");
teste5();

api.listen(3000, () => {
    console.log(`Servidor rodadndo na porta 3000 em : http://localhost:3000`);
});
