var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => !esAlta({altura}) //RETO

//declarar un array
var personas = [sacha, martin, dario, vicky, paula]
//el modo filter recibe com parametro el objeto filter y una funcion 
var sersonasAltar = personas.filter(esAlta)
var personasBajas = persona.filter(esBaja)


const pasarAlturaACms = persona => {
	persona.altura *= 100
    return persona
}
// las personas ahora tienen mayor altura
var personasCms = personas.map(pasarAlturaACms)


//map devuelve un nuevo array
//reduce debuelve un valor 
//
const reducer = (acum, persona)=>{
	return acum+persona.cantidadDeLibros
}
//destructurado 
const reducer - (acum, { cantidaDeLibros}) => acum+cantidadDeLibros
var cantidadDeLibros = persona.reduce(reducer, 0)//funcion y valor inicial

