addEventListener("DOMContentLoaded", ()=>{

/// El profesor de una materia desea conocer la cantidad de sus alumnos que no 
/// tienen derecho al examen de nivelación. Diseñe un pseudocódigo que lea las 
/// calificaciones obtenidas en las 5 unidades por cada uno de los 40 alumnos y 
/// escriba la cantidad de ellos que no tienen derecho al examen de nivelación.

let estudiantes = 0

let calipromedio = 0

let derepresentar = 0

while(estudiantes <40){
    
        /// pedimos datos para llevar a cabo la operacion
        cali1 = String(prompt("calificacion: "))
        cali2 = String(prompt("calificacion: "))
        cali3 = String(prompt("calificacion: "))
        cali4 = String(prompt("calificacion: "))
        cali5 = String(prompt("calificacion: "))
        
        tt = (cali1 + cali2 + cali3 + cali3 + cali4 + cali5)/5
    
        if (tt < 2.5){
            calipromedio += 1
        
        }else{
            
            derepresentar += 1
            
            estudiantes += 1
        }
        break

}

console.log("derecho al examen", derepresentar)
console.log("no derecho al examen", calipromedio)

})