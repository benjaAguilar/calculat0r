let operation = [];
let currentNum = [];
let userNums = document.querySelector('.user-numbers');
let numBtn = document.querySelector('.btns');
let btnNumbers = document.querySelectorAll('.btns');
let clear = document.querySelector('#clear');
let backspace = document.querySelector('#backspace');

clear.addEventListener("click", () => {
    if(numBtn.disabled === true) toggleButtons();
    operation = [];
    currentNum = [];
    userNums.textContent = "";
});

let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let substract = document.querySelector('#substract');
let add = document.querySelector('#add');
let equal = document.querySelector('#equal');
let dot = document.querySelector('#dot');

function getMultiply(a, b){return a * b}
function getDivide(a, b){return a / b}
function getSubstract(a, b){return a - b}
function getAdd(a, b){return a + b}

function toggleButtons(){
    (numBtn.disabled === false) ?
    btnNumbers.forEach(button => button.disabled = true):
    btnNumbers.forEach(button => button.disabled = false);
}

function addCurrentNum(){
    let num = parseFloat(currentNum.join(''));
    operation.push(num);
    currentNum = [];
}

function showOnDisplay(element){
    if( element === '/' ||
        element === '*' ||
        element === '-' ||
        element === '+' 
        ){
    
        if(currentNum[0] != undefined) addCurrentNum();
        if(numBtn.disabled === true) toggleButtons();
        operation.push(element)
    }
    (currentNum.includes('.')) ? dot.disabled = true: dot.disabled = false;
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

function showResult(){userNums.textContent = operation;}

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

function deleteOnDisplay(){
    let del = userNums.textContent.split('');
    del.pop();
    userNums.textContent = del.join('');
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
    toggleButtons();
});
dot.addEventListener("click", () => {
    currentNum.push(".");
    showOnDisplay(".");
});
backspace.addEventListener("click", () => {
    if(operation[0] === undefined){
        currentNum.pop();

    }else if(currentNum[0] === undefined){
        operation.pop();

    }
    deleteOnDisplay();
});


