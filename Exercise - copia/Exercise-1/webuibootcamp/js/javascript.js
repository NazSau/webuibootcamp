/*let a, b, c;
const Hexa = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 'a' , 'b' , 'c' , 'd' , 'e' , 'f' ];*/
document.getElementById('cambiacolor').addEventListener('click',function cambiar_color(){
		let body = document.getElementById(el_que_cambia);
		let numRan ='#'+Math.random().toString(16).slice(-6);
		document.body.style.backgroundColor = numRan;
		console.log(numRan);
});