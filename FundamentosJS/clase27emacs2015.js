class Persona{

	contructor(nombre, apellido, altura){
	this.nombre = nombre
	this.apellido = apellido 
	this.altura = altura
	}
	saludar(fn){
	 console.log(`hola me llamo ${nombre} ${apellido}`)
	 if(fn){
		fn(this.nombre, this.apellido, false)
	 }
	}
	soyAlto(){
			return this.altura > 1.8

	}
	

}

class Desarrollador extends Persona {
		contructor (nombre, apellido, altura){
			super(nombre, apellido, altura)
		}
		saludar(fn){
			console.log(`hola me llamo ${nombre} y soy desarrollador`)

	 if(fn){
		fn(this.nombre,this.apellido, false)
		}
}

function reponderSaludo(nombre, apellido, esDev){
	console.log(`Buen dia ${nombre} ${apellido}`)
	if (esDev)
		{
		console.logt(`nosavia que eras desrrrollador `)
		}
}

var nestor = new Persona('Nestor', 'Gonzalez', 1.70)
nestor.saludar(responderSaludo)

