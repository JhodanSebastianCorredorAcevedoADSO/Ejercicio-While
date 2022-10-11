addEventListener("DOMContentLoaded", ()=>{

/// Diseñe un algoritmo que determine el resultado de la elección del representante estudiantil de la
/// universidad X, para ello se presentaron tres candidatos A, B, y C.
/// Para ganar la elección se debe obtener como mínimo el 51%.
/// En caso que no haya un ganador se repite la elección en una segunda vuelta.
/// van a la segunda vuelta los dos candidatos que obtengan la más alta votación.
/// Se anula la elección en caso de producirse un empate doble por el segundo lugar o un empate triple.


vote1 = Number(prompt("votos por A:"))

vote2 = Number(prompt("votos por B:"))

vote3 = Number(prompt("votos por C:"))

tt = vote1 + vote2 + vote3

console.log("cantidad de votos por A: ", vote1)
console.log("cantidad de votos por B:", vote2)
console.log("cantidad de votos por C:", vote3)

console.log("cantidad de votantes: ", tt)

if (vote1 >= vote2 && vote1 > vote3){
    
    console.log("Gano A")

}else if(vote2 >= vote1 && vote2 > vote3){

    console.log("Gano B")

}else if(vote3 >= vote1 && vote3 > vote2){
    
    console.log("Gano C")

}

})