const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
	console.log(`hola soy ${persona.name}`);
}

function obtenerPersonaje(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, opts, callback).fail(function(){
		console.log(`sucedio un error. no se pudo obtener elpersonaje`)
	}
}

// llamada y sera asincronima en orden de los elementos 
obtenerPersonaje(1, function(personaje){
	console.log(`hola, yo sou ${personaje.name}`)
	obtenerPersonaje(2, function(personaje){
		console.log(`hola, yo sou ${personaje.name}`)
		obtenerPersonaje(3, function(personaje){
		console.log(`hola, yo sou ${personaje.name}`)
			obtenerPersonaje(4, personaje)
		console.log(`hola, yo sou ${personaje.name}`)
		})
	})
})
// al llamar la funcion de esta forma se llaman los elementos asincronamente
