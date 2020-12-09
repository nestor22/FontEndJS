var nombre = 'sacha'


function imprimirNombreEnMayuscuals(persona){
		nombre = persona.nombre.toUpperCase()
		console.log(nombre)
}
function imprimirNombreEnMayuscuals2({ nombre }){
		nombre = nombre.toUpperCase()
		console.log(nombre)
}
//destructuracion de objetos 
var nestor {
	nombre: 'Nestor',
	edad: 28
}
function imprimirNombreDestructurado(persona){
		var { nombre, edad } = persona
		console.log(`mi nombre es ${nombre} y tengo ${edad}`)
}
console.log(imprimirNombreDestructurado(nestor))
var sacha = {
	nombre:'shacha',
		apeelido: 'lifzic',
		edad: 28
}

console.log(sacha.nombre)

