let firstNum;
let operator;
let secondNum;

let getResult = function(string) {
    return (new Function( 'return (' + string + ')' )());
}

console.log(getResult("1+5"))