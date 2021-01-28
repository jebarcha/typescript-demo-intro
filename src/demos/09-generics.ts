function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy( 100 );
let soyArray = queTipoSoy([1,2,3,4,5,6]);

let soyExplicito = queTipoSoy<number>(100);



console.log(`Soy String: ${soyString}`);
console.log(`Soy Numero: ${soyNumero}`);
console.log(`Soy Array de Numeros: ${soyArray}`);
