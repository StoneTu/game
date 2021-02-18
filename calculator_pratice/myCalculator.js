const OP_ADD = "add"; 
const OP_SUB = "sub"; 
const OP_TIMES = "multi"; 
const OP_DIVIDE = "divide"; 

var savedNumber = NaN, tmpNumber = NaN;
var savedOperator;
var previousBtn;
var displayDivEle = document.getElementsByClassName("displayDiv");
var displayText = displayDivEle[0].children[0];
console.log(displayText.innerText);
document.getElementById("btn1").onclick = function () { clickBtnNum(1) };
document.getElementById("btn2").onclick = function () { clickBtnNum(2) };
document.getElementById("btn3").onclick = function () { clickBtnNum(3) };
document.getElementById("btn4").onclick = function () { clickBtnNum(4) };
document.getElementById("btn5").onclick = function () { clickBtnNum(5) };
document.getElementById("btn6").onclick = function () { clickBtnNum(6) };
document.getElementById("btn7").onclick = function () { clickBtnNum(7) };
document.getElementById("btn8").onclick = function () { clickBtnNum(8) };
document.getElementById("btn9").onclick = function () { clickBtnNum(9) };
document.getElementById("btn0").onclick = function () { clickBtnNum(0) };
document.getElementById("btnPoint").onclick = function () { clickBtnNum(".") };

document.getElementById("btnAdd").onclick = function () { clickBtnOper(OP_ADD) };
document.getElementById("btnSub").onclick = function () { clickBtnOper(OP_SUB) };
document.getElementById("btnTimes").onclick = function () { clickBtnOper(OP_TIMES) };
document.getElementById("btnDivide").onclick = function () { clickBtnOper(OP_DIVIDE) };

document.getElementById("btnAC").onclick = function () { clickBtnAC() };
document.getElementById("btnPlusMinus").onclick = function () { clickBtnPlusMinus() };
document.getElementById("btnEqual").onclick = function () { clickBtnEqual() };
document.getElementById("btnPercent").onclick = function () { clickBtnPercent() };


function clickBtnNum(inputNum) {
    console.log(`click ${inputNum}!`);
    if (displayText.innerText == "0" || previousBtn == "oper") {
        displayText.innerText = inputNum;
    }
    else {
        console.log(typeof inputNum); 
        displayText.innerText += inputNum; }
    previousBtn = "num";
}

function clickBtnOper(operChar) {
    console.log(`click ${operChar}` );
    if (previousBtn == "oper") { 
        savedOperator = operChar;
        return; 
    }

    if (isNaN(savedNumber) || previousBtn == "func") {
        savedNumber = parseFloat(displayText.innerText);
        savedOperator = operChar;
    }
    else {
        tmpNumber = parseFloat(displayText.innerText);
        getResult();
    }
    previousBtn = "oper"
    // displayText.innerText+="+";
    
}
function clickBtnAC() {
    previousBtn = "func"
    console.log("click AC!");
    displayText.innerText = "0";
    savedNumber = NaN;
    tmpNumber = NaN;
    savedOperator = NaN;
}
function clickBtnPlusMinus() {
    previousBtn = "func"
    console.log("click PlusMinus!");
    displayText.innerText *= -1;
}
function clickBtnPercent() {
    console.log("click percent!");
    displayText.innerText = parseFloat(parseFloat(displayText.innerText))/100;
    // savedNumber = parseFloat(displayText.innerText);
    previousBtn == "num";
}
function clickBtnEqual() {
    if (previousBtn == "num") {
        tmpNumber = parseFloat(displayText.innerText);
    }
    previousBtn = "func"
    console.log("click Equal!");
    // inputString = displayText.innerText;
    // calculteString(inputString);
    getResult();
}
function getResult() {
    switch (savedOperator) {
        case OP_ADD:
            displayText.innerText = (savedNumber + tmpNumber);
            break;
        case OP_SUB:
            displayText.innerText = (savedNumber - tmpNumber);
            break;
        case OP_TIMES:
            displayText.innerText = (savedNumber * tmpNumber);
            break;
        case OP_DIVIDE:
            displayText.innerText = (savedNumber / tmpNumber);
            break;
    }
    savedNumber = parseFloat(displayText.innerText);
}