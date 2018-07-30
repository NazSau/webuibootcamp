const aqui = document.getElementById('aqui'); 

const components = [{
element: 'h1',
//style= " ",
content: 'Hola, soy un titulo'
},
{
 element: 'div',
 style: 'color: blue; border: 1px solid black', // Los estilos de tipo => propiedad: valor; propiedad: valor; propiedad: valor 
 content: 'Hola, soy una caja',
},
{
	element: 'p',
	content: 'Estoy aqui',
	style: 'background: red'
},
{
	element: 'h3',
	content: 'Cosito',
	style: 'font-weight: bolder'
}];

document.getElementById("Generar").addEventListener('click' , Genera = () =>{
	console.log("me ejecuto");
	const element = document.getElementById("element").value;
	console.log(element);
	const comment = document.getElementById("comment").value;
	console.log(comment);
	const style = document.getElementById("style").value;
	console.log(style);
	
	const child = constructor1(element, comment, style);
	aqui.appendChild(child);
});

const constructor1 = (element, content, style) => {
	const obj = document.createElement(element);
	if (content) {
		obj.innerHTML = content;
	}
	if(style !== ""){
		obj.setAttribute("style", style);
	}
	return obj;
}

/*const constructortest = (element, content, style) => {//solo hecho por upitear, me parece asqueroso el codigo
	const UnwantedChild = `<${element} style=${style}> ${content} </${element}>`
	return document.getElementById('aqui').innerHTML = UnwantedChild;
}*/

components.forEach(obj => {
//	console.log(aqui, obj);
	
	const child = constructor1(obj.element, obj.content, obj.style);
	aqui.appendChild(child); 
});
/*components.forEach(obj => {
	console.log(aqui, obj);
	constructortest(obj.element, obj.content, obj.style);
	
	const child = constructor1(obj.element, obj.content, obj.style);
	aqui.appendChild(child); 
});*/