//Arreglos en JS

//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);
// arreglo.push(1);

let arreglo2 = [...arreglo, 5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map((x) => x * 2);


console.log(arreglo);
console.log(arreglo3);

