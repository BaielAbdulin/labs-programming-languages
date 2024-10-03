// Задача 1: Получение значений с помощью подсказок
function getInputValues(promptCount = 3, promptMessages = ["Введите значение 1", "Введите значение 2", "Введите значение 3"]) {
    const inputValues = [];

    for (let i = 0; i < promptCount; i++) {
        const userInput = prompt(promptMessages[i]); // Показываем подсказку и получаем значение
        inputValues.push(userInput); // Добавляем значение в массив
    }

    console.log("Введенные значения: " + inputValues.join(", "));
    return inputValues;
}

// Задача 2: Сумма чисел с проверкой
function getNumericSum(promptCount = 3, promptMessages = ["Введите число 1", "Введите число 2", "Введите число 3"]) {
    const inputValues = getInputValues(promptCount, promptMessages);
    let sum = 0;

    inputValues.forEach(value => {
        const number = parseFloat(value);
        if (isNaN(number)) {
            console.log(`Ошибка: '${value}' не является числом.`);
        } else {
            sum += number;
        }
    });

    console.log("Сумма чисел: " + sum);
}

// Задача 3: Факториал с рекурсией и циклом
// Рекурсивная функция для факториала
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

// Итеративная функция для факториала
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function calculateFactorial() {
    const inputValues = getInputValues(1, ["Введите число для вычисления факториала"]);
    const number = parseInt(inputValues[0]);

    if (isNaN(number) || number < 0) {
        console.log("Ошибка: Введенное значение не является допустимым числом.");
        return;
    }

    console.log("Факториал (рекурсия): " + factorialRecursive(number));
    console.log("Факториал (цикл): " + factorialIterative(number));
}

// fetch(
//     'https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json))