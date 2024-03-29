var firstNum =null;
var secondNum =null;
var operation;
var number;
var fullNumber = '';
const display = document.getElementById('displayCalc');
var answer='';
var signal;

/*
variável operador aritmético, para exibir no display - talvez a propria variavel
signal possa fazer a mesma função da var operador;
*/
var operador='';


// display functions
function displayWrite(escrever) {
    display.innerHTML = escrever;
}
function displayClear() {
    display.innerHTML = "";
    answer='';
    reset(0);
}
function reset(clear) {
    fullNumber = "";
    if(clear == 1){displayClear();}
}
function operation(inputSignal) {
    
    signal = inputSignal;
    switch(signal){
        case 'som':
            operador=' + ';
            break;
        case 'sub':
            operador=' - ';
            break;
        case 'mult':
            operador=' * ';
            break;
        case 'div':
            operador=' / ';
            break;
        default:
            operador='NaN';
    }
    if(answer!=''){
        firstNum = answer;
    }else{
    saveFirstNumber();
    }
    displayWrite(firstNum+' '+operador);
}
function saveFirstNumber(){
    firstNum = parseFloat(fullNumber);   
    answer='';
    fullNumber = "";
}


// math functions
function breakApart(number) {
    fullNumber = fullNumber + number;
    displayWrite(fullNumber);    
}

function result() {
    answer = parseFloat(answer);
    if(firstNum==null||isNaN(secondNum)||isNaN(answer)){
        displayWrite('Operação invalida');
        secondNum == '';
        answer == '';
    }else{
        displayWrite(firstNum+operador+secondNum+' = '+answer);
    }    
}


// Calculate
function calculate() {
    secondNum = parseFloat(fullNumber);
        switch(signal){
            case 'som':
                operador = ' + ';
                answer = firstNum + secondNum;
                break;
            case 'sub':
                operador = ' - ';
                answer = firstNum - secondNum;            
                break;
            case 'mult':
                operador = ' * ';
                answer = firstNum * secondNum;            
                break;
            case 'div':
                operador = ' / ';
                answer = firstNum / secondNum;            
                break;
            default:
                answer = '';
        }
        result();
        fullNumber = '';
}


function del() {
    let numero_tela = display.innerHTML;
    if(numero_tela>10){
        numero_tela = numero_tela/10;
        numero_tela = parseInt(numero_tela);
    }else{
        numero_tela = numero_tela-numero_tela;
    }
    if(numero_tela==0){
        display.innerHTML = null;
    }else{
        display.innerHTML = numero_tela;
    }    
    fullNumber = numero_tela;
}
