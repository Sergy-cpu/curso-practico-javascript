
function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
       
    );
    const promedioLista = sumaLista1 / lista1.length;
    
    return promedioLista;
}
    

const lista1 = [
100,
200,
500,
400000000,
];

function esPar(numero) {
    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

const mitadLista1 = parseInt(lista1.length / 2);

let mediana;


if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemnto1y2 = calcularMediaAritmetica([elemento1,
    elemento2,
    ]);

    mediana = promedioElemnto1y2;

    // necesitamos dos elemntos
    // -> el promedio 
    // -> mediana
} else {
    // psición mitadLista1dentro de lista1 
    mediana = lista1[mitadLista1];

    // -> mediana

}