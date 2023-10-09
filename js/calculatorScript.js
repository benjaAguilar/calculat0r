let operation = [];
let currentNum = [];
let btnNumbers = document.querySelectorAll('.btns');

let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let substract = document.querySelector('#substract');
let add = document.querySelector('#add');
let equal = document.querySelector('#equal');

function getMultiply(a, b){return a * b}
function getDivide(a, b){return a / b}
function getSubstract(a, b){return a - b}
function getAdd(a, b){return a + b}

function addCurrentNum(){
    let num = parseInt(currentNum.join(''));
    operation.push(num);
    currentNum = [];
}

function showOnDisplay(element){
    let userNums = document.querySelector('.user-numbers');
    if( element === '/' ||
        element === '*' ||
        element === '-' ||
        element === '+' 
        ){

        if(currentNum[0] != undefined) addCurrentNum();
        operation.push(element)
    
    }

    userNums.textContent += element;
  
}

function getResult(arr){
        let i;
        let result;
        let firstNumI;
        let secondNumI;
    
        if(arr.includes('*')){
            i = arr.indexOf('*');
            firstNumI = i - 1;
            secondNumI = i + 1;
            result = getMultiply(arr[firstNumI], arr[secondNumI]);
    
        } else if(arr.includes('/')){
            i = arr.indexOf('/');
            firstNumI = i - 1;
            secondNumI = i + 1;
            result = getDivide(arr[firstNumI], arr[secondNumI]);
    
        } else if(arr.includes('-')){
            i = arr.indexOf('-');
            firstNumI = i - 1;
            secondNumI = i + 1;
            result = getSubstract(arr[firstNumI], arr[secondNumI]);
    
        } else {
            i = arr.indexOf('+');
            firstNumI = i - 1;
            secondNumI = i + 1;
            result = getAdd(arr[firstNumI], arr[secondNumI]);
            
        }
        arr.splice(firstNumI, 3, result);
        operation = arr;
} 

function showResult(){
    let result = document.querySelector('.user-numbers');
    result.textContent = operation;
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

    addCurrentNum();
    for(let i = 0; i < operation.length; i++){getResult(operation)};
    showResult();
    
});



