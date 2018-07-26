setInterval(ActualizarHora,1000);

function ActualizarHora() {
		const fecha = new Date();
		const eHoras = document.getElementById("Horas");
		const eMinutos = document.getElementById("Minutos");
		const eSegundos = document.getElementById("Segundos");

		if(fecha.getHours() < 10){

			eHoras.textContent ='0' + fecha.getHours();
		}else{
			eHoras.textContent = fecha.getHours();
		}
		if(fecha.getMinutes() < 10){

			eMinutos.textContent ='0' + fecha.getMinutes();
		}else{
			eMinutos.textContent = fecha.getMinutes();
		}

		if(fecha.getSeconds() < 10){

			eSegundos.textContent ='0' + fecha.getSeconds();
		}else{
			eSegundos.textContent = fecha.getSeconds();
		}
		//console.log(fecha.getSeconds());
}


//console.log(fecha2.getSeconds());