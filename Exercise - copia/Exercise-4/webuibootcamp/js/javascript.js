document.getElementById("Validar").addEventListener('click', validar = () => {

	if (document.getElementById('Titulo').value === ""){
		window.alert("Titulo es un campo obligatiro");
		console.log(document.getElementById('Titulo').value);

	}else{
		if (document.getElementById('Descripcion').value === ""){
			window.alert("Descripcion es un campo obligatiro");
			console.log(document.getElementById('Descripcion').value);

		}else{
			console.log(document.getElementById('Descripcion').value);
			if(document.getElementById('gridRadios1').checked === false){
    			window.alert('Debes estar de acuerdo con los terminos.');
   			}else {
   				if(!document.getElementById('archivo').value){
   					window.alert("Debe seleccionar un archivo.");
   					//debugger;
   				}else{
				console.log(document.getElementById('archivo').value);
			//debugger;
				}
			}
		}
	}
})