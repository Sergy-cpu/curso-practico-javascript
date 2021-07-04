

/* console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Lados de cuadrado miden: "+ ladoCuadrado+"cm");
 */
function perimetroCuadrado(ladoCuadrado) {

    return ladoCuadrado * 4;
}

/* console.log("Perimetro del cuadrado miden: "+ perimetroCuadrado+"cm"); */


function areaCuadrado(lado) {
    return lado*lado;
}
/* console.log("area del cuadrado miden: "+ areaCuadrado+"cm"); */


console.groupEnd();

// Código del triangulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden:"
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    +"cm, "
    +baseTriangulo
    +"cm "
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: "+ alturaTriangulo+ "cm");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es de: "+ perimetroTriangulo + "cm");

console.groupEnd();

// Aqui interactuamos con html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputArea");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}