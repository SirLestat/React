const personajes = ['goku', 'gohan', 'trunks'];

const [ , , personaje1] = personajes;

console.log(personaje1)

const retornaArreglo = () => {
    return ['ABC',123]
}

const [letras, numeros] = retornaArreglo();

console.log(letras,numeros);

//Tarea
//1. El primer valor del arr se llamará nombre
//2. se llamara setNombre

const hola = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = hola ('Alejandro');

console.log(nombre);
setNombre();