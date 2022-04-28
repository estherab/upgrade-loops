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

