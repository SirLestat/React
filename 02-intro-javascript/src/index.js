//Forma 1 de importar modulos:
//import { heroes } from './data/heroes'

import { heroes } from "./data/heroes";

//forma 2 de importar modulos:
//import { heroes } from "./data/heroes";

//forma 3 de importar modulos:
// aparecen automaticamente los export de otros documentos

const getHeroeById = (id) => {
    return heroes.find();

}

console.log(getHeroeById(2) );
