//Desestructuración
// Asignación Desestructurante

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;
console.log(nombre);
console.log(edad);

const retornaPersona = ({nombre, edad, rango = 'capitan'}) => {
    console.log(nombre,edad,rango);
}

retornaPersona(persona);


//Ejercicio:
//Dado el siguiente objeto, extrae las propiedades nombre y edad y asígnalas a variables:

const person = {
    nombre1: 'Ana',
    edad1: 25,
    ciudad: 'Madrid',
    profesion: 'Ingeniera'
  };
  
  // Tu código aquí
  
  const {nombre1: nombreUser, edad1: edadUser} = person;

  console.log(nombreUser);
  console.log(edadUser);

// Ejercicio 2: Usar Alias para las Propiedades
// Dado el siguiente objeto, extrae las propiedades marca y modelo, y asígnalas a variables miMarca y miModelo respectivamente:

const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,
    color: 'Rojo'
  };
  
  // Tu código aquí

  const {marca: miMarca, modelo: miModelo} = coche;
  console.log(miMarca);
  console.log(miModelo);

