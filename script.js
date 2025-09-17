const element = document.getElementsByTagName("li");
const screen = document.querySelectorAll('p')[0];
const clear = document.getElementsByClassName('clear')[0];

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === '=') {
        element[i].addEventListener("click", calculate(i));
    } else {
        element[i].addEventListener("click", addToCurrentValue(i));
    }
}

function addToCurrentValue(i) {
    return function () {
        let value = element[i].innerHTML;

        if (value === "×") {
            screen.textContent += '*';
        } else if (value === "÷") {
            screen.textContent += '/';
        } else {
            screen.textContent += value;
        }
    };
}

function calculate(i) {
    return function () {
        try {
            screen.textContent = eval(screen.textContent);
        } catch {
            screen.textContent = "Error";
        }
    };
}

clear.onclick = function () {
    screen.textContent = "";
};
