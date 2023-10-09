let firstNum;
let operator;
let secondNum;
let btnNumbers = document.querySelectorAll('.btns');

let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let substract = document.querySelector('#substract');
let add = document.querySelector('#add');
let equal = document.querySelector('#equal');

function showOnDisplay(element){
    let userNums = document.querySelector('.user-numbers');
    userNums.textContent += element;
}

function createKeyboard(){
    let indexBtn = 1;

    btnNumbers.forEach(button => {
        let i = indexBtn;
        if(indexBtn === 10){
            indexBtn = 0;
            i = 0;

        } 
        button.addEventListener("click", () => {showOnDisplay(i);});
        indexBtn++;
    });
}

createKeyboard();
divide.addEventListener("click", () => {showOnDisplay("/")});
multiply.addEventListener("click", () => {showOnDisplay("*")});
substract.addEventListener("click", () => {showOnDisplay("-")});
add.addEventListener("click", () => {showOnDisplay("+")});
equal.addEventListener("click", () => {showOnDisplay("=")});

let getResult = function(string) {
    return (new Function( 'return (' + string + ')' )());
}


