//do while//
const cambioDePeso= 2
let peso=90
const pesoIdeal=60
let semanas=0
do {
    peso = peso - cambioDePeso
    semanas++
} while ( peso > pesoIdeal);
console.log(semanas)

//FOR///
var peso= 90
const pesoIdeal=60
const cambioDePeso=2
var semanas=0

for (peso; peso > pesoIdeal;peso= peso-cambioDePeso) {
    semanas++
} 
console.log(semanas);

//while// 
var peso= 90
const pesoIdeal=60
const cambioDePeso=2
var semanas=0
while (peso > pesoIdeal) {
    peso-=cambioDePeso
    semanas++    
} console.log(semanas)