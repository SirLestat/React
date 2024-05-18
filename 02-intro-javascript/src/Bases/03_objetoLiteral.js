const persona = {
    nombre: 'Alejandro',
    apellido: 'Santiago',
    edad: 29,
    direccion: {
        ciudad: 'Alvaro Obregon',
        codigoPostal: '08000',
        calle: '64654',
    }
};



const persona2 = {...persona};

console.log(persona);
console.log(persona2);