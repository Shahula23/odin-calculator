let displayNum1 = "";
let displayNum2 = "";
let operator = "";

const clear = document.querySelector("#clear");
const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const subtract = document.querySelector("#subtract");
const add = document.querySelector("#add");
const equals = document.querySelector("#equals");
const display = document.querySelector("#display");
const number = document.querySelectorAll(".number");
const back = document.querySelector("#backspace");

initial ();

display.textContent = "0";
function initial() {
    number.forEach(button => button.addEventListener("click", () => {
        let buttonContent = button.innerText;
    
        if (display.textContent.length === 1 && display.textContent === "0") {
            display.textContent = "";
            display.textContent += buttonContent;
        
        } else if (display.textContent.length < 15) {
            display.textContent += buttonContent;
        }
    }));

    add.addEventListener("click", () => {
        add.style.backgroundColor = ("white");
        add.style.color = ("orange");
        displayNum1 =  display.textContent
        addEvent(displayNum1);
    })
    
    subtract.addEventListener("click", () => {
        subtract.style.backgroundColor = ("white");
        subtract.style.color = ("orange");
        displayNum1 =  display.textContent
        subtractEvent(displayNum1);
    }) 

    multiply.addEventListener("click", () => {
        multiply.style.backgroundColor = ("white");
        multiply.style.color = ("orange");
        displayNum1 =  display.textContent
        multiplyEvent(displayNum1);
    })

    divide.addEventListener("click", () => {
        divide.style.backgroundColor = ("white");
        divide.style.color = ("orange");
        displayNum1 =  display.textContent
        divideEvent(displayNum1);
    })

    clear.addEventListener("click", () => {
        location.reload();
    });

    back.addEventListener("click", () => {
        if (display.textContent.length === 1 && display.textContent === "0") {
            display.textContent = "0";
        } 
        else if (display.textContent === "Error") {
            display.textContent = "Error";
        }
        else {
            display.textContent = display.textContent.slice(0, display.textContent.length -1)
        }
    })
}

function addEvent() {
    add.classList.add("add");

    number.forEach(button => button.addEventListener("click", () => {
        buttonContent = button.innerText;

        if (add.classList.contains("add")) {
            display.textContent = "";
            display.textContent += buttonContent;
            add.classList.remove("add");
            add.style.backgroundColor = ("orange");
            add.style.color = ("white");
        }
        else if (display.textContent.length < 15) {
        display.textContent + buttonContent;
        }
    }));

    equals.addEventListener("click", () => {
        displayNum2 = display.textContent;
        operator = "+"
        operate(displayNum1, displayNum2);
    });
}

function subtractEvent() {
    subtract.classList.add("subtract");

    number.forEach(button => button.addEventListener("click", () => {
        buttonContent = button.innerText;

        if (subtract.classList.contains("subtract")) {
            display.textContent = "";
            display.textContent += buttonContent;
            subtract.classList.remove("subtract");
            subtract.style.backgroundColor = ("orange")
            subtract.style.color = ("white");
        }
        else if (display.textContent.length < 15) {
        display.textContent + buttonContent;
        }
    }))

    equals.addEventListener("click", () => {
        displayNum2 = display.textContent;
        operator = "-"
        operate(displayNum1, displayNum2);
    })
}

function multiplyEvent() {
    multiply.classList.add("multiply");

    number.forEach(button => button.addEventListener("click", () => {
        buttonContent = button.innerText;

        if (multiply.classList.contains("multiply")) {
            display.textContent = "";
            display.textContent += buttonContent;
            multiply.classList.remove("multiply");
            multiply.style.backgroundColor = ("orange")
            multiply.style.color = ("white");
        }
        else if (display.textContent.length < 15) {
        display.textContent + buttonContent;
        }
    }))

    equals.addEventListener("click", () => {
        displayNum2 = display.textContent;
        operator = "*"
        operate(displayNum1, displayNum2);
    })
}

function divideEvent() {
    divide.classList.add("divide");

    number.forEach(button => button.addEventListener("click", () => {
        buttonContent = button.innerText;

        if (divide.classList.contains("divide")) {
            display.textContent = "";
            display.textContent += buttonContent;
            divide.classList.remove("divide");
            divide.style.backgroundColor = ("orange")
            divide.style.color = ("white");
        }
        else if (display.textContent.length < 15) {
        display.textContent + buttonContent;
        }
    }))

    equals.addEventListener("click", () => {
        displayNum2 = display.textContent
        if (displayNum2 === "0") {
            display.textContent = "Error";
        }
        else {
            operator = "÷"
            operate(displayNum1, displayNum2);
        }
    })
}

function operate() {
    
    if (operator === "+") {
        display.textContent = parseInt(displayNum1) + parseInt(displayNum2);
    }
    else if (operator === "-") {
        display.textContent = parseInt(displayNum1) - parseInt(displayNum2);
    }
    else if (operator === "*") {
        display.textContent = parseInt(displayNum1) * parseInt(displayNum2);
    }
    else if (operator === "÷") {
        display.textContent = parseInt(displayNum1) / parseInt(displayNum2);
    }

}