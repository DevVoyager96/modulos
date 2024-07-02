

// Importando as funções do módulo areas.js
const { areaCirculo, areaTriangulo, areaRetangulo } = require('./Áreas');

// Utilizando as funções importadas

const raio = 5;
const baseTriangulo = 10;
const alturaTriangulo = 8;
const baseRetangulo = 12;
const alturaRetangulo = 6;

console.log(`Área do círculo com raio ${raio}: ${areaCirculo(raio)}`);
console.log(`Área do triângulo com base ${baseTriangulo} e altura ${alturaTriangulo}: ${areaTriangulo(baseTriangulo, alturaTriangulo)}`);
console.log(`Área do retângulo com base ${baseRetangulo} e altura ${alturaRetangulo}: ${areaRetangulo(baseRetangulo, alturaRetangulo)}`);
