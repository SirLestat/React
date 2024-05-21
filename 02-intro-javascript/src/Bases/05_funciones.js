const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'))

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2('Vegeta'));


const getUser = () => ({
    uid: 'ABC123',
    username: 'Lestat'
});

const user1 = getUser()
console.log(user1);



//Tarea
//1. Transformar a una función de flecha ✔
//2. Tiene que retornar un objeto implícito ✔
//3. Pruebas ✔

const getUsuarioActivo = (nombre) =>
    ({
        uid: 'ABC567',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Alejandro');
console.log(usuarioActivo);