addEventListener("DOMContentLoaded", ()=>{

/// 42 personas toman parte de un baile. Durante la fiesta una dama bailó con 7 
/// caballeros, una segunda dama con 8, una tercera con 9, y así sucesivamente
/// hasta que la última bailó con todos los hombres. Cuantas damas había en el baile?

let damas = 0
let hombres = 0
let personas = 0

while (personas <= 42){
    
    damas = damas + 1
    hombres = damas + 6
    personas = damas + hombres
    
    /// imprimimos el porcetaje segun su genero
}
console.log("Personas: ",personas)

console.log("Hombres: ",hombres)

console.log("Damas: ",damas)

})