const miPagina = {
	h1: (texto, color) => { 
		//const aqui = document.getElementById('aqui');
		const obj = document.createElement('h1');
		obj.style.backgroundColor = color;
		//obj.style.font-family = "Helvetica Neue";
		obj.innerHTML = texto;
		document.getElementById("aqui").appendChild(obj);
	}, 
	bloqueMalo: (Dentro) => { 
		return `<div> ${Dentro} </div>`
	},
	bloque: (Dentro) => {
		const obj = document.createElement('div');
		//obj.style.backgroundColor = color;
		obj.innerHTML = Dentro;
		document.getElementById("aqui").appendChild(obj);

	},
	p: (Texto) =>{
		const obj = document.createElement('p');
		//obj.style.backgroundColor = color;
		obj.innerHTML = Texto;
		document.getElementById("aqui").appendChild(obj);
	}
};
//document.getElementById('aqui').innerHTML = miPagina.bloqueMalo("Hola","red");

miPagina.h1(miPagina.bloqueMalo("Como estas?"), "red");
miPagina.bloque("Ahora anda");
miPagina.bloque("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid id modi amet expedita dignissimos, odio, atque veniam deleniti nisi facilis. Ipsa ratione repellendus, culpa asperiores, nisi pariatur eius deserunt. Odit.");
miPagina.p("Soy un parrafo");
