let operation = [];
let currentNum = [];
let btnNumbers = document.querySelectorAll('.btns');

let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let substract = document.querySelector('#substract');
let add = document.querySelector('#add');
let equal = document.querySelector('#equal');

function showOnDisplay(element){
    let userNums = document.querySelector('.user-numbers');
    if( element === '/' ||
        element === '*' ||
        element === '-' ||
        element === '+' 
        ){
        let num = parseInt(currentNum.join(''));
        operation.push(num);
        operation.push(element)
        currentNum = [];

    }

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
        button.addEventListener("click", () => {
            showOnDisplay(i);
            currentNum.push(i);
        });
        indexBtn++;
    });
}

createKeyboard();
divide.addEventListener("click", () => {showOnDisplay("/")});
multiply.addEventListener("click", () => {showOnDisplay("*")});
substract.addEventListener("click", () => {showOnDisplay("-")});
add.addEventListener("click", () => {showOnDisplay("+")});
equal.addEventListener("click", () => {
    showResult();
    let num = parseInt(currentNum.join(''));
    operation.push(num);
});



