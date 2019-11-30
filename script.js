//Глобальные переменные
var num1, num2, result;

//Функция для проверки чисел
function checkNumbers(){
    num1 = document.getElementById('n1').value; //Вытаскиваем число 1 из input
    num1 = parseInt(num1); //Проверка, что ввели int число

    num2 = document.getElementById('n2').value; //Вытаскиваем число 2 из input
    num2 = parseInt(num2);
}

//Функция сложения
function plus(){
    //проверка чисел
    checkNumbers();
    //Действие (в данном случае сложение) 
    result = num1 + num2;
    //перезаписываем значение тега с ид
    document.getElementById('out').innerHTML = result;
}

function minus(){
    checkNumbers();
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}

function multiply(){
    checkNumbers();
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}

function division(){
    checkNumbers();
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}
