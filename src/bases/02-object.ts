
const persona = {
cognomen: 'Stark',
aetas: 45,
ubiHabitat: {
ubs: 'New York',
zip: 3456,
lat: 145678,
lng: 456789,
}

}
//persona.aetas = 55; como acceder a las variables

//const persona2 = persona;

const persona2 = {...persona};

persona2.cognomen = 'Parker';

console.log (persona)
console.log (persona2)
