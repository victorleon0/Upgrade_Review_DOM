//1.1 Basandote en el array siguiente, crea una lista ul > li 
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const myUl = document.createElement("ul");
document.body.appendChild(myUl);

const myLi = document.createElement("li")
for (const country in countries) {
    const country = countries[country]
    country.appendChild(myLi);
}

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeElement = document.querySelector(".fn-remove-me")
removeElement.remove()

//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
//en el div de html con el atributo data-function="printHere".
//const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

//1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
//h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
//elemento de la lista.

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
//elementos de las listas que elimine ese mismo elemento del html.