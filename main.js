addEventListener("DOMContentLoaded", ()=>{

/// Un avión que viaja 800 Km/hr. Dispara un proyectil auto impulsado, en 
/// el momento del disparo, el avión hace un giro de 90 grados y acelera a 
/// 20 mtrs/seg2. El proyectil sigue su curso, acelerando a 10 mtrs./seg2. 
/// Diseñe un pseudocódigo que escriba cada segundo, la distancia que separa 
/// al avión del proyectil, hasta que estén a 10,000 mtrs. o más.

let distancia = 0

let tiempo = 0

while(distancia < 10000){
    
    tiempo += 1
    
    a = (800 * tiempo) + (20 * tiempo ** 2)/2
    
    b = (800 * tiempo) + (10 * tiempo ** 2)/2
    
    distancia = Math.sqrt (a ** 2 + b ** 2)
    
}
    console.log("Segundo:", tiempo)
    console.log("Distancia", Math.ceil(distancia, 2))
})