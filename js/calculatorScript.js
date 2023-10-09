let firstNum;
let operator;
let secondNum;
let btnNumbers = document.querySelectorAll('.btns');

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

let getResult = function(string) {
    return (new Function( 'return (' + string + ')' )());
}


