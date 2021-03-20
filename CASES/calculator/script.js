let prevNumb = '';
let calcOperator = ''
let currentNumb = '0';

const inputNumb = (no) => {
    if(currentNumb === '0') {
        currentNumb = no
    } else {
        currentNumb += no
    }
}


const calcScreen = document.querySelector('.calc-screen');

const updateScreen = (no) => {
    calcScreen.value = no;
}

const operators = document.querySelectorAll('.operator');
operators.forEach((ope) => {
    ope.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    })
})

const inputOperator = (ope) => {
    prevNumb = currentNumb;
    calcOperator = ope;
    currentNumb = '';
}

const numbers = document.querySelectorAll('.number');

numbers.forEach((numb) => {
    numb.addEventListener("click", (e) => {
        inputNumb(e.target.value)
        updateScreen(currentNumb);

    })
})



const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumb)
})



const calculate = () => {
    let result = ''
    switch(calcOperator) {
        case "+":
            result = parseInt(prevNumb) + parseInt(currentNumb);
            break;
        case "-":
            result = parseInt(prevNumb) - parseInt(currentNumb);
            break;
        case "*":
            result = parseInt(prevNumb) * parseInt(currentNumb);
            break;
        case "/":
            result = parseInt(prevNumb) / parseInt(currentNumb);
            break;
        default :
            return
    }
    currentNumb = result
    calcOperator = ''
}


const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumb)
})

const clearAll = () => {
    prevNumb = ''
    calcOperator = ''
    currentNumb ='0'
}


const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e)=> {
    inputDecimal(e.target.value)
    updateScreen(currentNumb)
})

inputDecimal = (dot) => {
    if (currentNumb.includes('.')) {
        return
    }
    currentNumb += dot
}
