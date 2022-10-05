addEventListener("DOMContentLoaded", ()=>{

/// Una compañía de seguros tiene contratados a n vendedores. Cada uno hace tres
/// ventas a la semana. Su política de pagos es que un vendedor recibe un sueldo
/// base, y un 10% extra por comisiones de sus ventas. El gerente de su compañía 
/// desea saber cuanto dinero obtendrá en la semana cada vendedor por concepto 
/// de comisiones por las tres ventas realizadas, y cuanto tomando en cuenta su
/// sueldo base y sus comisiones.

let vendedor1 
let vendedor2 

let sueldoB = 1000000

let sueldo = 0

let comision = 0.10
let comision1 
let comision2 
let comisiones

/// numeros de ventas para poder obtener las comisiones mensuales

while (sueldo < 1000000){
    
    comisiones = Number(prompt("comisiones al mes: "))
    
    vendedor1 = Number(prompt("precio total mensual de las comisiones: " ))
    vendedor2 = Number(prompt("precio total mensual de las comisiones: " ))
    
    ///calculando el valor de la comision total por mes 
    comision1 = vendedor1 * comisiones * 0.10
    comision2 = vendedor2 * comisiones * 0.10
    
    break 
}
/// imprimir el sueldo mensual y la suma de las comisiones

console.log("sueldo base: ", sueldoB)
console.log("precio mensual de la comison: ", comision1 + sueldoB)
console.log("precio mensual de la comision: ", comision2 + sueldoB)

})