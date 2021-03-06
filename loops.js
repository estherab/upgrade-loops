// Iteración 1
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

for (let item of products) {
    if (item.includes("Camiseta"))
        console.log(item);
}

// Iteración 2
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let key in alumns) { 
    if ((alumns[key].T1 && alumns[key].T2) || (alumns[key].T1 && alumns[key].T3) || (alumns[key].T2 && alumns[key].T3))
        alumns[key].isApproved = true;

    else 
        alumns[key].isApproved = false;
}

console.log(alumns);

// Iteración 3
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

console.log("Destinos");
for (let item of placesToTravel) { // Lo uso bastante junto a forEach
    console.log('Destino ->', item);
}

// Iteración 4
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

console.log("--- Datos alien ---");
for (let key in alien) { // Lo uso bastante junto a forEach
    console.log(alien[key]);
}

// Iteración 5
const placesToTravel2 = [{id: 5, name: 'Japan'}, 
                        {id: 11, name: 'Venecia'}, 
                        {id: 23, name: 'Murcia'}, 
                        {id: 40, name: 'Santander'}, 
                        {id: 44, name: 'Filipinas'}, 
                        {id: 59, name: 'Madagascar'}]

for (let i = 0; i < placesToTravel2.length; i++) {
    if (placesToTravel2[i].id === 11 || placesToTravel2[i].id === 40)
        placesToTravel2.splice(i, 1);
}

console.log(placesToTravel2);

// Iteración 6
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

for (let toy of toys) { 
    if (toy.name.includes("gato"))
        toys.splice(toys.indexOf(toy), 1);
}

console.log(toys);

// Iteración 7
const popularToys = [];
const toys2 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]

for (let toy of toys2) {
    if (toy.sellCount > 15)
        popularToys.push(toy);
}

console.log(popularToys);



