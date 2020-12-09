var nombre = 'shacha'

function imprimirNombreEnMayusculas(){
	nombre = nombre.toUppercase()
	console.log(nombre)
}

imprimirNombreEnMayusculas()

//tiene la variable global nombre


//forma recomendada de no tener en el entorno 
//

function imprimirNombreEnMayusculas2(n){
		n=n.toUpperCase()
		console.log(n)
}

imprimirNombreEnMayusculas2(nombre)
//se elimina el efecto aside usando una variable interna y otra externa


