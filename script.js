//Функция сложения
function plus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value; //Достаём число из инпута
    num1 = parseInt(num1); //Проверяем, что ввели не строку, а число

    //тоже самое со вторым числом
    num2 = document.getElementById('n2').value; 
    num2 = parseInt(num2);

    //Складываем числа
    result = num1 + num2;

    //перезаписываем значение тега с ид
    document.getElementById('out').innerHTML = result;
}

function minus(){
    var num1, num2, result;
    num1 = document.getElementById('n1').value; 
    num1 = parseInt(num1); 

    num2 = document.getElementById('n2').value; 
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}