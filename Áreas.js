// areas.js

// Função para calcular a área de um círculo
function areaCirculo(raio) {
    let area= Math.PI * Math.pow(raio, 2);
    return (console.log("A area do circulo é : " + area))

}

// Função para calcular a área de um triângulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Função para calcular a área de um retângulo
function areaRetangulo(base, altura) {
    return base * altura;
}

// Exportando as funções
module.exports = {
    areaCirculo,
    areaTriangulo,
    areaRetangulo
};
