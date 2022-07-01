let display = document.querySelector('[data-display]');
let number = document.querySelectorAll('[data-number]');
let operator = document.querySelectorAll('[data-operator]');
let displayedNum = 0;
let firstNum = '0';
let secondNum = '0';
let op = '';


//clicked number is displayed
let selectedNum = function () {
    number.forEach(el => {
        el.addEventListener('click', (e) => {
            display.innerHTML += parseFloat(el.innerHTML);
            displayedNum = e.target.innerText;
            if (op === '') {
                firstNum += parseInt(displayedNum);
            } else {
                secondNum += parseInt(displayedNum);
            }
            console.log('first', parseInt(firstNum), 'second', parseInt(secondNum));
        });
    });
}
selectedNum();


//clicked operator is displayed
let selectedOperator = function () {
    operator.forEach(el => {
        el.addEventListener('click', (e) => {
            display.innerHTML += el.innerHTML;
            displayedNum += el.innerText;
            op = e.target.innerText;
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
            display.innerHTML = parseInt(firstNum) + parseInt(secondNum);
            console.log(parseInt(firstNum) + parseInt(secondNum));
            break;
        case "-":
            display.innerHTML = parseInt(firstNum) - parseInt(secondNum);
            console.log(parseInt(firstNum) - parseInt(secondNum));
            break;
        case "*":
            display.innerHTML = parseInt(firstNum) * parseInt(secondNum);
            console.log(parseInt(firstNum) * parseInt(secondNum));
            break;
        case "/":
            display.innerHTML = parseInt(firstNum) / parseInt(secondNum);
            console.log(parseInt(firstNum) / parseInt(secondNum));
            break;
    }
}
calculations();

//display is cleared
let displayClear = function () {
    display.innerHTML = 0;
    displayedNum = 0;
    firstNum = 0;
    secondNum = 0;
    op = '';
    console.clear();
    console.log('first', parseInt(firstNum), 'second', parseInt(secondNum));
}