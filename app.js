// 1 euro es:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// funcion que convierte de dolares a yens
function fromDollarToYen (a){
    return a/oneEuroIs.USD*oneEuroIs.JPY;
}

// funcion que convierte de euros a dolares
function fromEuroToDollar (a){
    return a*oneEuroIs.USD;
}

// funcion que convierte de yenes a libras
function fromYenToPound (a){
    return a/oneEuroIs.JPY*oneEuroIs.GBP;
}

// exporta las funciones para usarlas en otros archivos 
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
