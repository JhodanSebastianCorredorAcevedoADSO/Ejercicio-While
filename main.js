addEventListener("DOMContentLoaded", ()=>{

/// En una granja se requiere saber alguna información para determinar el precio de venta por cada kilo
/// de huevo. precio se determina a traves del promedio de calidad de las N gallinas que hay en la
/// granja. La calidad de cada gallina se obtiene según la formula:

/// calidad = (peso de la gallina * altura de la gallina)/Numero de huevos que pone;

let can = Number(prompt("Ingrese la cantidad de gallinas que hay en la granja: "))

let acum = 0

/// SENTENCIA WHILE

while(can > 0){
    // pedimos datos para llevar a cabo la operacion
    let peso=Number(prompt("peso de la gallina (Kg) "))

    let altura=Number(prompt("altura de la gallina (Cm) "))

    let numero=Number(prompt("numero de huevos que pone "))

    let calidad = (peso * altura )/numero    

    acum += numero

    can -= 1 
}
console.log(`calidad de la gallina: ${can}`)

})