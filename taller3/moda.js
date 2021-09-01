const lista1 = [
    2,
    2,
    2,
    2,
    2,
    4,
    5,
    5,
    5, 
    5, 
    5, 
    5, 
    5,
    5,
    9
];

const lista1Count = {


};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else{
            lista1Count[elemento] = 1;
        }
        
    }

);