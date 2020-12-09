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
var ids = [1,2,3,4,5,6,7]


var promesas = ids.map((id)=>obtenerPersonaje(id)) 
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

//con el ejemplo anterior se rescriben los parametr