var firstNum
var secondNum
var operation
var number
var fullNumber = ''
const display = document.getElementById('displayCalc')
var answer;
var signal;
var sizeString = fullNumber.length;

// display functions
function displayWrite(escrever) {   
    display.innerHTML = escrever;
}

function displayClear() {
    display.innerHTML = "";
    reset(0);
}

// math functions
function breakApart(number) {
    fullNumber = fullNumber + number
    displayWrite(fullNumber)
}

function result() {
    answer = parseInt(answer);
    displayWrite(answer);
}
// Calculate
function calculate() {
    secondNum = parseFloat(fullNumber);

    if(signal == 'som'){answer = firstNum + secondNum;;}
    else if(signal == 'sub'){answer = firstNum - secondNum;}
    else if(signal == 'mult'){answer = firstNum * secondNum;}
    else if(signal == 'div'){answer = firstNum / secondNum;}
    result();
}

function reset(clear) {
    if(clear == 1){
    fullNumber = "";
    displayClear();
    }else {fullNumber = "";}
}

function operation(x) {
    firstNum = parseFloat(fullNumber);
    
    signal = x;
    reset(1);
}
function del() {
    /*var lastPositionString = sizeString - 1;
    fullNumber = '8'
    fullNumber.replace("8","3");
    alert(fullNumber)
    displayWrite(fullNumber);
    fullNumber[sizeString] = 0;*/
    alert('erro in function');
    reset(1);
}
