let display = document.querySelector('[data-display]');
let number = document.querySelectorAll('[data-number]');
let operator = document.querySelectorAll('[data-operator]');
let num = 0;
let oldResult = 0;
let newResult = 0;
let op = '';

//clicked number is displayed
let selectedNum = function () {
    number.forEach(el => {
        el.addEventListener('click', () => {
            display.innerHTML += parseFloat(el.innerHTML);
            num += el.innerText;
            oldResult = parseFloat(num);
            console.log('old', oldResult, 'new', newResult);
        });
    });
}
selectedNum();


//clicked operator is displayed
let selectedOperator = function () {
    operator.forEach(el => {
        el.addEventListener('click', () => {
            display.innerHTML += el.innerHTML;
            num += el.innerText;
            op = el.innerText;
            newResult = oldResult;
            oldResult = 0;
            console.log('old', oldResult, 'new', newResult);
        })
    })
}
selectedOperator();


//point is displayed
let displayPoint = function () {
    display.innerHTML += '.';
}

//calculations
let calculations = function () {
    switch (op) {
        case '+':
            display.innerHTML = oldResult + newResult;
            break;
        case "-":
            display.innerHTML = oldResult - newResult;
            break;
        case "*":
            display.innerHTML = oldResult * newResult;
            break;
        case "/":
            display.innerHTML = oldResult / newResult;
            break;
    }
}
calculations();

//display is cleared
let displayClear = function () {
    display.innerHTML = 0;
    num = 0;
}

