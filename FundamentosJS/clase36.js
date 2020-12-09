//promesas
//tiene 3 estados pendig -> al momento de crearla si se resuleve fulfilled -> si se reolvio rejected-> paso de fulfed

new Promise(function(resolve, reject){

}).then(valor=>{

}).catch(err => {

})



const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

const onPeopleResponse = function(persona){
	console.log(`hola soy ${persona.name}`);
}

function obtenerPersonaje(id, callback){
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
	        $.get(url, opts, function(data){
                resolve(data)

            }).fail(()=>reject(id))

    })
}

function onError(id){
    console.log(`sucedio un error al obtener el  personaje ${id}`)
}

obtenerPersonaje(1).then(function(personaje){
    console.log(`el personaje es ${personaje.name}`)
    return obtenerPersonaje(2)
}).then(personaje2=> {
    console.log(`el personaje es ${personaje.name}`)
    return obtenerPersonaje(3)
}).then(personaje3=> {
    console.log(`el personaje es ${personaje.name}`)
    return obtenerPersonaje(4)
}).then(personaje4=> {
    console.log(`el personaje es ${personaje.name}`)
    return obtenerPersonaje(5)
})
.catch(onError)


//con el ejemplo anterior se rescriben los parametr