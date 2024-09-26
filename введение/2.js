

let firstNumber = prompt("Введите первое число:");
let secondNumber = prompt("Введите второе число:");


firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

if (firstNumber > secondNumber) {
    console.log("Наибольшее число: " + firstNumber);
} else if (secondNumber > firstNumber) {
    console.log("Наибольшее число: " + secondNumber);
} else {
    console.log("Оба числа равны.");
}

