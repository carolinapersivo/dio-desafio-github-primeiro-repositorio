var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

const plusButton = document.getElementById("plusButton");
plusButton.addEventListener("click", increment);

const minusButton = document.getElementById("minusButton");
minusButton.addEventListener("click", decrement);

function increment () {
    if(currentNumber < 10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }else {
        currentNumberWrapper.style.color = "black";
    }    
}

function decrement () {
    if(currentNumber > -10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }

    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }else {
        currentNumberWrapper.style.color = "black";
    }  
}
