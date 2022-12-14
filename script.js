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
function reset(clear) {
    fullNumber = "";
    if(clear == 1){displayClear();}
}
function operation(inputSignal) {
    signal = inputSignal;
    saveFirstNumber();
}
function saveFirstNumber(){
    firstNum = parseFloat(fullNumber);   
    reset(1);
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

function del() {
    alert('this cant use now, wait for new program version');
    reset(1);
}
