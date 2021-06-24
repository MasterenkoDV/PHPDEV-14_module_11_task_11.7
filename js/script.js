let minValue = 0;
let maxValue = 0;
let result = '';
let question = 0;
let orderNumber = 1;
let upperValue = ' ';
let bottomValue = ' ';
let numberWords = '';

//Массив значений
let arr = [
    ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    ['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семьнадцать', 'восемьнадцать', 'девятнадцать'],
    ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'вомьдесят', 'девяносто'],
    ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот']
];

// Функция прислоения прописных значений числа
function word() {
    return result === 0 ? (numberWords = arr[0][0]) :
        (result > 0 ? (parseInt(result / 100) > 0 ?
                (hundreds = parseInt(result / 100),
                    tens = parseInt(result % 100 / 10),
                    units = parseInt(result % 100 % 10),
                    tens === 0 && units === 0 ? (numberWords = arr[3][hundreds - 1]) :
                    (tens === 1 ? (numberWords = arr[3][hundreds - 1] + ' ' + arr[1][units]) :
                        (tens > 1 && units === 0 ? (numberWords = arr[3][hundreds - 1] + ' ' + arr[2][tens - 2]) :
                            (tens === 0 && units !== 0 ? (numberWords = arr[3][hundreds - 1] + ' ' + arr[0][units]) :
                                (numberWords = arr[3][hundreds - 1] + ' ' + arr[2][tens - 2] + ' ' + arr[0][units]))))) :
                (parseInt(result / 10) > 0 ?
                    (tens = parseInt(result / 10),
                        units = parseInt(result % 10),
                        tens === 1 ? (numberWords = arr[1][units]) :
                        (tens > 1 && units === 0 ? (numberWords = arr[2][tens - 2]) :
                            (numberWords = arr[2][tens - 2] + ' ' + arr[0][units]))) :
                    (numberWords = arr[0][result]))) :

            (parseInt(Math.abs(result) / 100) > 0 ?
                (hundreds = parseInt(Math.abs(result) / 100),
                    tens = parseInt(Math.abs(result) % 100 / 10),
                    units = parseInt(Math.abs(result) % 100 % 10),
                    tens === 0 && units === 0 ? (numberWords = 'минус ' + arr[3][hundreds - 1]) :
                    (tens === 1 ? (numberWords = 'минус ' + arr[3][hundreds - 1] + ' ' + arr[1][units]) :
                        (tens > 1 && units === 0 ? (numberWords = 'минус ' + arr[3][hundreds - 1] + ' ' + arr[2][tens - 2]) :
                            (tens === 0 && units !== 0 ? (numberWords = 'минус ' + arr[3][hundreds - 1] + ' ' + arr[0][units]) :
                                (numberWords = 'минус ' + arr[3][hundreds - 1] + ' ' + arr[2][tens - 2] + ' ' + arr[0][units]))))) :
                (parseInt(Math.abs(result) / 10) > 0 ?
                    (tens = parseInt(Math.abs(result) / 10),
                        units = parseInt(Math.abs(result) % 10),
                        tens === 1 ? (numberWords = 'минус ' + arr[1][units]) :
                        (tens > 1 && units === 0 ? (numberWords = 'минус ' + arr[2][tens - 2]) :
                            (numberWords = 'минус ' + arr[2][tens - 2] + ' ' + arr[0][units]))) :
                    (numberWords = 'минус ' + arr[0][Math.abs(result)]))));
}

// Функця вывода сообщения игроку
function innerValue() {
    words = word(result);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    question = getRandomInt(4);
    words.length > 20 ?
        (question == 0 ? (document.getElementById('answer').innerHTML = 'Вы загадали ' + result + '. Верно?') :
            (question == 1 ? (document.getElementById('answer').innerHTML = 'Ваше число ' + result + '. Угадал?') :
                (question == 2 ? (document.getElementById('answer').innerHTML = 'Это точно число ' + result + '. Верно?') :
                    (document.getElementById('answer').innerHTML = 'Думаю это число ' + result + '. Верно?')))) :
        (question == 0 ? (document.getElementById('answer').innerHTML = 'Вы загадали ' + numberWords + '. Верно?') :
            (question == 1 ? (document.getElementById('answer').innerHTML = 'Ваше число ' + numberWords + '. Угадал?') :
                (question == 2 ? (document.getElementById('answer').innerHTML = 'Это точно число ' + numberWords + '. Верно?') :
                    (document.getElementById('answer').innerHTML = 'Думаю это число ' + numberWords + '. Верно?'))));

}

document.getElementById('start').addEventListener('click', function () {
    document.getElementById('greeting').style.display = 'none';
    document.getElementById('rulesGame').style.display = 'inline-block';
    document.getElementById('restart').style.display = 'inline-block';
})

document.getElementById('startYes').addEventListener('click', function () {
    document.getElementById('rulesGame').style.display = 'none';
    document.getElementById('initialValueOne').style.display = 'inline-block';
})

document.getElementById('startNo').addEventListener('click', function () {
    document.getElementById('rulesGame').style.display = 'none';
    document.getElementById('greeting').style.display = 'inline-block';
})

document.getElementById('inputOne').addEventListener('click', function () {
    document.getElementById('alertValueOne').innerHTML = '';
    isNaN(valueOne.value) === true ? (valueOne.value = 0) :
        (parseInt(valueOne.value) < -999 ? (valueOne.value = -999) :
            (parseInt(valueOne.value) > 999 ? (valueOne.value = 999) :
                (valueOne.value = valueOne.value)),
            minValue = parseInt(valueOne.value),
            document.getElementById('initialValueOne').style.display = 'none',
            document.getElementById('initialValueTwo').style.display = 'inline-block');
})

document.getElementById('cancelOne').addEventListener('click', function () {
    document.getElementById('initialValueOne').style.display = 'none';
    document.getElementById('rulesGame').style.display = 'inline-block';
})

document.getElementById('inputTwo').addEventListener('click', function () {
    document.getElementById('alertValueTwo').innerHTML = '';
    isNaN(valueTwo.value) === true ? (valueTwo.value = 999) :
        (parseInt(valueTwo.value) < -999 ? (valueTwo.value = -999) :
            (parseInt(valueTwo.value) > 999 ? (valueTwo.value = 999) :
                (valueTwo.value = valueTwo.value)),
            maxValue = parseInt(valueTwo.value),
            document.getElementById('initialValueTwo').style.display = 'none',
            document.getElementById('makeNumber').style.display = 'inline-block',
            document.getElementById('makeNumberText').innerHTML = 'Теперь загадайте число от ' + minValue + ' до ' + maxValue);
})

document.getElementById('cancelTwo').addEventListener('click', function () {
    document.getElementById('initialValueTwo').style.display = 'none';
    document.getElementById('initialValueOne').style.display = 'inline-block';
})

document.getElementById('makeYes').addEventListener('click', function () {
    document.getElementById('makeNumber').style.display = 'none';
    document.getElementById('answerNumber').innerHTML = 'Вопрос № ' + orderNumber;
    result = Math.floor((minValue + maxValue) / 2);
    innerValue();
    document.getElementById('playGame').style.display = 'inline-block';
})

document.getElementById('makeNo').addEventListener('click', function () {
    document.getElementById('makeNumber').style.display = 'none';
    document.getElementById('endGame').style.display = 'inline-block';
})

document.getElementById('endYes').addEventListener('click', function () {
    document.getElementById('endGame').style.display = 'none';
    document.getElementById('greeting').style.display = 'inline-block';
    minValue = 0;
    maxValue = 0;
})

document.getElementById('endNo').addEventListener('click', function () {
    document.getElementById('endGame').style.display = 'none';
    document.getElementById('makeNumber').style.display = 'inline-block';
})

document.getElementById('restart').addEventListener('click', function () {
    document.getElementById('playGame').style.display = 'none';
    document.getElementById('rulesGame').style.display = 'none';
    document.getElementById('initialValueOne').style.display = 'none';
    document.getElementById('initialValueTwo').style.display = 'none';
    document.getElementById('makeNumber').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('victorySpeech').style.display = 'none';
    document.getElementById('greeting').style.display = 'inline-block';
    orderNumber = 1;
    upperValue = '';
    bottomValue = '';
    valueOne.value = 0;
    valueTwo.value = 999;
})

document.getElementById('victory').addEventListener('click', function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    question = getRandomInt(4);
    question == 0 ? (document.getElementById('victoryText').innerHTML = 'Ты достойный противник, но я всегда побеждаю!') :
        (question == 1 ? (document.getElementById('victoryText').innerHTML = 'Я знал, что вмести мы справимся!') :
            (question == 2 ? (document.getElementById('victoryText').innerHTML = 'Отлично!') :
                (document.getElementById('victoryText').innerHTML = 'Сыграем еще раз?')));
    document.getElementById('playGame').style.display = 'none';
    document.getElementById('victorySpeech').style.display = 'inline-block';
})

document.getElementById('less').addEventListener('click', function () {
    maxValue = result;
    if (minValue === maxValue || maxValue === upperValue) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        question = getRandomInt(2);
        question == 0 ? (document.getElementById('victoryText').innerHTML = 'А вы меня точно не обманули?') :
            (document.getElementById('victoryText').innerHTML = `Я сдаюсь...`);
        document.getElementById('playGame').style.display = 'none';
        document.getElementById('victorySpeech').style.display = 'inline-block';
    } else {
        result = Math.floor((minValue + maxValue) / 2);
        orderNumber++;
        document.getElementById('answerNumber').innerHTML = 'Вопрос № ' + orderNumber;
        innerValue();
        bottomValue = minValue;
    }
})

document.getElementById('more').addEventListener('click', function () {
    minValue = result;
    if (maxValue === minValue || minValue === bottomValue) {
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        question = getRandomInt(2);
        question == 0 ? (document.getElementById('victoryText').innerHTML = 'А вы меня точно не обманули?') :
            (document.getElementById('victoryText').innerHTML = `Я сдаюсь...`);
        document.getElementById('playGame').style.display = 'none';
        document.getElementById('victorySpeech').style.display = 'inline-block';
    } else {
        result = Math.ceil((minValue + maxValue) / 2);
        orderNumber++;
        document.getElementById('answerNumber').innerHTML = 'Вопрос № ' + orderNumber;
        innerValue();
        upperValue = maxValue;
    }
})