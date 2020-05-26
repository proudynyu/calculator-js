const root = document.getElementsByClassName('root');
const numbers = document.querySelectorAll('.btn-number');

const operationElement = document.querySelectorAll('.btn-operation');
const clear = document.querySelector('.btn-clear');
const equalElement = document.querySelector('.btn-equal');

const previous = document.querySelector('.previousNum');
const current = document.querySelector('.currentNum');

const deleteElement = document.querySelector('.btn-del');
const operatorSpan = document.querySelector('.operator');

class Calculator {
    constructor(previousElement, currentElement) {
        this.previousElement = previousElement;
        this.currentElement = currentElement;
        this.operatorSpan = operatorSpan;
        this.clear();
    }

    clear() {
        this.currentElement.innerText = '';
        this.previousElement.innerText = '';
        this.operationValue = undefined;
    }

    addNumber(value) {
        if (value === ',' && this.currentElement.innerText.includes(',')) return;
        this.currentElement.innerText += value.toString();
    }

    operation(opValue) {
        if (this.previousElement.innerText === '') {
            this.previousElement.innerText += this.currentElement.innerText;
            this.currentElement.innerText = '';
            this.operationValue = opValue.innerText;
            return
        }
        else if (this.currentElement.innerText === ''){
            this.operationValue = opValue.innerText;
            return
        }
        switch(opValue.innerText) {
            case '+':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) + parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                this.operationValue = opValue.innerText;
                break;
            case '-':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) - parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
            case '*':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) * parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
            case '/':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) / parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
        }
    }

    equal() {
        if (this.previousElement.innerText === '' || this.currentElement.innerText === '') return;
        switch(this.operationValue) {
            case '+':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) + parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
            case '-':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) - parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
            case '*':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) * parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
            case '/':
                this.previousElement.innerText = parseFloat(this.previousElement.innerText) / parseFloat(this.currentElement.innerText);
                this.currentElement.innerText = '';
                break;
        }
    }

    delete() {
        if (this.currentElement.innerText === '') return;
        this.currentElement.innerText = '';
    }
}

const calculator = new Calculator(previous, current);

numbers.forEach(number => {
    number.addEventListener('click', () => {
        calculator.addNumber(number.innerText);
    })
})

clear.addEventListener('click', () => {
    calculator.clear();
})

operationElement.forEach(op => {
    op.addEventListener('click', () => {
        calculator.operation(op);
    })
})

equalElement.addEventListener('click', () => {
    calculator.equal();
})

deleteElement.addEventListener('click', () => {
    calculator.delete();
})