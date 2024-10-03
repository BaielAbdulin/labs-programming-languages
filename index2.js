function checkAge() {
    const ageInput = document.getElementById("ageInput").value;
    const message = document.getElementById("message");
    const animeImage = document.getElementById("animeImage");

    // Очищаем предыдущие сообщения и скрываем изображение
    message.textContent = "";
    animeImage.style.display = "none";

    // Проверка, если поле пустое
    if (ageInput === "") {
        message.textContent = "Пожалуйста, напишите свой возраст";
    }
    // Проверка, если введённое значение не является числом или вне допустимого диапазона
    else if (isNaN(ageInput) || ageInput <= 0 || ageInput > 110) {
        message.textContent = "Пожалуйста, напишите допустимый возраст";
    }
    // Успешный случай
    else {
        animeImage.style.display = "block";
    }
}