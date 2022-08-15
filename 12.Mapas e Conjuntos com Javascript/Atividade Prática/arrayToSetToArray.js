function getUniqueValues (array){
    const unique = new Set(array);

    return [...unique]; // Spread => pega os valores do set e transforma em array
}
let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(getUniqueValues(array));
