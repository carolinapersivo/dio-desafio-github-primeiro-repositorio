// console.log('Hello World!');

function returnEvenValues(array) {
    let evenNums = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else{
            console.log(`${array[i]} não é par`)
        }
    }
    console.log('Os números pares são: ', evenNums);
}
let array = [8, 2, 0, 179, 37, 28, 293, 20, 27, 22, 1, 4, 8];


returnEvenValues(array);