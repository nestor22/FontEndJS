const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
	console.log(`hola soy ${persona.name}`);
}

function obtenerPersonaje(id, callback){
	const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	$.get(url, opts, onPeopleResponse)
	if (callback){
		callback()
	}	
}

// llamada y sera asincronima en orden de los elementos 
obtenerPersonaje(1, function(){
	obtenerPersonaje(2, function(){
		obtenerPersonaje(3, function(){
			obtenerPersonaje(4)
		})
	})
})
// al llamar la funcion de esta forma se llaman los elementos asincronamente
