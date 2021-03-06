const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
	console.log(`hola soy ${persona.name}`);
}

function obtenerPersonaje(id){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, opts, onPeopleResponse)
}

// llamada y sera asincronima
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)
// no sera el orden porque retornarran segun la peticion http

