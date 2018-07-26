const Personas = [
	Persona = {
		nombreCompleto : 'juan Este',
		DNI: '39.256.356',
		Domicilio: 'Casa muy lejana 1'
	},
	Persona = {
		nombreCompleto: 'juan Oeste',
		DNI: '39.256.356',
		Domicilio: 'Piso muy alto 1'
	},
	Persona = {
		nombreCompleto: 'juan Norte',
		DNI: '39.256.356',
		Domicilio: 'Casa muy lejana 2'
	},
	Persona = {
		nombreCompleto: 'juan Sur',
		DNI: '39.256.356',
		Domicilio: 'Casa muy cercana 1'
	},
	Persona = {
		nombreCompleto: 'juan SurEste',
		DNI: '39.256.356',
		Domicilio: 'Piso muy alto 2'
	},
	Persona = {
		nombreCompleto: 'juan NorEste',
		DNI: '39.256.356',
		Domicilio: 'Casa muy cercana 2'
	},
	Persona = {
		nombreCompleto: 'juan SurOeste',
		DNI: '39.256.356',
		Domicilio: 'Casa de por ahi'
	}
];

//const ImprimirDatos = () =>{

const personas = Personas.map(function(persona){
  return `<li> <p>Nombre completo: ${persona.nombreCompleto} </p> <p>DNI: ${persona.DNI} </p><p> Domicilio: ${persona.Domicilio}</p> </li>`
})
document.getElementById("personas").innerHTML = personas;
/*	Personas.forEach(persona =>{
		const persona.nombreCompleto = document.createElement('li');
		nombreElement.innerHTML = persona.nombreCompleto;
		personas.appenChild(nombreElement);
	})
//}*/
