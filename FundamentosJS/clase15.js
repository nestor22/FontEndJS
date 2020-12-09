//clase de for 


var persona ={
	nombre:'nestor',
	apellid:'gonzalez',
	edad:28,
	peso:27

}


console.log(`al inicio del anio ${persona.nombre} pesa ${persona.peso}`)
const INCREMENTO_PESO =200 
const aumentarDePeso = persona=>persona.peso +=INCREMENTO_PESO
const disminuyePeso = persona=>persona.peso -=INCREMENTO_PESO

for (var i=1; i<=365;i++)
{
	var random = Math.random()

	if (random < 0.25){
		aumentarDePeso(persona)	
	}else if (random < 0.5){
		disminuyePeso(persona) 
	}
}

console.log(`al final del anio ${persona.nombre} pesa ${persona.peso.toFixed(2)}`)
