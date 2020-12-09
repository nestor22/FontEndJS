//prototipo persona
//
function Persona(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido
	this.altura = altura
}
Persona.prototype.saludar = () =>{
	console.log(`hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => {
	return this.altura>1.8
}
// las arroy function dan error porque no estan definidas
// la forma correcta es 
Persona.prototype.soyAlto = function(){
	return this.altura>1.8
}
var sacha = new Persona('nestor','gonzalez')

//sub prototipo 
//
function Desarrollador(nombre, apellido){
	this.nombre = nombre 
	this.apellido = apellido 
}

function heredaDe(prototipoHijo, prototipoPadre){
	var fn = funciton () {}
	fn.prototype = protipoPadre.prototype
	prototipoHijo.prototype = new fn
	protipoHijo.prototipe.constructor = protipoHijo
}

heredaDe(Desarrollador, persona)

Desarrollador.prototype.saludar = function(){
	console.log(`hola me llamo ${nombre} ${apellido}`)
}
