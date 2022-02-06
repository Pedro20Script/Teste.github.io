const frutas = document.querySelectorAll('h2');
const topicos = new Array();
frutas.forEach(fruta => {
	topicos.push(fruta.textContent);
	const ancora = document.createElement('a');
	ancora.setAttribute('name', fruta.textContent);
	fruta.append(ancora);
	const volta = document.createElement('a');
	volta.setAttribute('href', '#');
	volta.textContent = 'Topo!';
	fruta.parentElement.insertBefore(volta, fruta.nextElementSibling);
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
	const alimento = document.createElement('li');
	lista.append(alimento);
	const link = document.createElement('a')
	link.setAttribute(`href`, `#${topico}`);
	link.textContent = topico;
	alimento.append(link); 
	
});