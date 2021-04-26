test("1 euro deberia ser 1,2 dolares", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la funcion de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // si 1 euro equivale a 1,2 dolares, entonces 3,5 euros deberian ser = (3.5 * 1.2) dolares
    const expected = 3.5 * 1.2; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})

test("1 dolar deberia ser 106,58... yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')

    // utilizo la funcion de la forma como se espera que funcione
    const yens = fromDollarToYen(3.5)

    // si 1 euro equivale a 1,2 dolares y 1 euro equivale a 127,9 yenes,
    // entonces 3,5 dolares deberian ser = (3.5 / 1.2 * 127.9) yenes
    const expected = 3.5 / 1.2 * 127.9; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(yens);
})

test("1 yen deberia ser 0,0063... libras", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')

    // utilizo la funcion de la forma como se espera que funcione
    const pounds = fromYenToPound(3.5)

    // si 1 euro equivale a 127,9 yenes y 1 euro 0,8 libras,
    // entonces 3,5 yenes deberian ser = (3.5 / 127.9 * 0.8) libras
    const expected = 3.5 / 127.9 * 0.8; 
    
    // hago mi comparacion (la prueba)
    expect(expected).toBe(pounds);
})

