function substituirPares(array){
    if(!array){
        return "erro";
    }
    if(!array.length){
        return -1;
    }
    for(i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            array[i] = 0;
        }
    }
    return array;
}
arrayTeste = [];
//arrayTeste = [0, 1, 2, 4, 5, 7, 9, 24, 23, 13, 14];
substituirPares(arrayTeste);