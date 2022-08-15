function validarArray(array,tamanho){
    try {
        if (!array || !tamanho) throw new ReferenceError("Confira os parâmetros");
        if(typeof array !== "object" ) throw new TypeError("Primeiro parâmetro precisa ser do tipo Object");
        if(typeof tamanho !== "number") throw new TypeError("Segundo parÂmetro precisa ser do tipo Number");
        if(tamanho !== array.length) throw new RangeError("Tamanho do array não coincide com valor numérico determinado");

        console.log(array);

    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError");
        } else if (error instanceof TypeError){
            console.log("Esse erro é um TypeError");
        }else if(error instanceof RangeError){
            console.log("Esse erro é um RangeError");
        } else {
            console.log("Tipo de erro não esperado: " + error);
        }
        console.log("O nome do erro é: " + error.name);
        console.log("A mensagem do erro é: " + error.message);
        // console.log("O stack do erro é: " + error.stack);
    }
}
// validarArray();
validarArray(["testinho"],1);
