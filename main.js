addEventListener("DOMContentLoaded", ()=>{

/// Diseñar un pseudocódigo que calcule el promedio ponderado para alumno del 
/// ITT. El cálculo se hace de la siguiente forma: Se multiplica cada calificación
/// por los créditos de cada materia El resultado anterior se suma con los
/// resultados de todas las materias, por separado se suman los créditos de cada
/// materia y finalmente se divide la suma de todas las materias por sus respectivos
/// créditos, entre la suma de todos los créditos. (materias: Fundamentos, BD y ética).

let calificacion = 0
let promedio = 0 
let materias = 0
let total = 0 

///pedimos datos

califi1 = Number(prompt("calificacion "))
califi2 = Number(prompt("calificacion "))
califi3 = Number(prompt("calificacion "))
    
materia1 = Number(prompt("credito de la materia "))
materia2 = Number(prompt("credito de la materia "))
materia3 = Number(prompt("credito de la materia "))
    
    
while(promedio == 0 ){
    
        materias = (materia1 + materia2 + materia3) / 3
        mult1 = califi1 * materia1
        mult2 = califi2 * materia2
        mult3 = califi3 * materia3
    
        suma = materias + mult1 + mult2 + mult3
        break
}

console.log("suma de materias ", materias)
console.log("total ", mult1)
console.log("total ", mult2)
console.log("total ", mult3)
console.log("sumas ", suma)



})