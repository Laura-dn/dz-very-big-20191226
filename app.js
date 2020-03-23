//Проверка на число одного значения
function isNumber1Dig(x) {
    if(isNaN(x) || (x === "") || (x === " ")) {
        return true;
    } else {
        return false;
    }
}
//Проверка на число двух значений
function isNumber2Dig(x, y) {
    if(isNaN(x) || (x === "") || (x === " ") || isNaN(y) || (y === "") || (y === " ")) {
        return true;
    } else {
        return false;
    }
}

/*
1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.
*/
function twoNumbers() {
    let result = document.querySelector(".result2Numbers"),
        DOMInputs = document.querySelectorAll(".chislo"),
        num1 = DOMInputs[0].value,
        num2 = DOMInputs[1].value,
        myCase = isNumber2Dig(num1, num2);
       
    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    if(num1 > num2) {
        return result.innerHTML = `Ответ: 1. Число ${num1} больше, чем число ${num2}.`;
    } else if (num1 < num2) {
        return result.innerHTML = `Ответ: -1. Число ${num1} меньше, чем число ${num2}.`;
    } else if(num1 == num2) {
        return result.innerHTML = `Ответ: 0. Числa ${num1} и ${num2} равны.`;
    } else {
        return result.innerHTML = `Ошибка! Введите число!`;
    }
}

//2. Написать функцию, которая вычисляет факториал переданного ей числа
function isFactorial() {
    let result = document.querySelector(".resultFactorial"),
        DOMInput = document.querySelector("#fact"),
        numb =  DOMInput.value,
        factNumb = 1,
        myCase = isNumber1Dig(numb);
    
    //Если пользователь ввел нечисло, выдаем ошибку
    if(myCase || numb < 0) {
        return result.innerHTML = "ОШИБКА! Введите число больше 0!";
    }

    if(factNumb == 0) {
        return result.innerHTML = `Факториал числа ${numb}! равен 1`;
    } else {
        for(let i = 1; i <= numb; i++) {
            factNumb *= i;
        }
    }
    
    return result.innerHTML =`Факториал числа ${numb}! равен ${factNumb}`;
}     

//3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function isOneNumb() {
    let result = document.querySelector(".resultOneNumber"),
        DOMInputs = document.querySelectorAll(".doNumb"),
        oneNumb = "";

    for(let i = 0; i < DOMInputs.length; i++) {
        myCase = isNumber1Dig(DOMInputs[i].value);

        if(myCase) {
            return result.innerHTML = "ОШИБКА! Введите число!";
        }  

        oneNumb += DOMInputs[i].value;  
    }

    result.innerHTML = oneNumb;
}

//4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function isSquare() {
    let DOMInputs = document.querySelectorAll(".rectSide"),
        side1 = 0,
        side2 = 0,
        result = document.querySelector(".resultSquare");

    if(!isNumber1Dig(DOMInputs[0].value) || DOMInputs[0].value > 0) {
        side1 = DOMInputs[0].value;
    }

    if(!isNumber1Dig(DOMInputs[1].value) || DOMInputs[1].value > 0) {
        side2 = DOMInputs[1].value;
    }

    if(!side1 && !side2) {
        return result.innerHTML = "ОШИБКА! Введите число!";
    }

    if(side1 > 0 && side2 > 0) {
        return result.innerHTML = side1 * side2; 
    } else {
        if(side1 > 0) {
            return result.innerHTML = Math.pow(side1, 2);
        } else {
            return result.innerHTML = Math.pow(side2, 2);
        }
    }
}

//5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
function isPerfectNumber() {
    let DOMInput = document.querySelector(".perfectNumb").value,
        arrPerf = [6, 28, 496, 8128, 33550336, 8589869056],
        textResult = [
            " совершенное. Имеет следующие собственные делители: 1, 2, 3.",
            " совершенное. Имеет следующие собственные делители: 1, 2, 4, 7, 14.",
            " совершенное. Имеет следующие собственные делители: 1, 2, 4, 8, 16, 31, 62, 124, 248.",
            " совершенное. Имеет следующие собственные делители: 1, 2, 4, 8, 16, 32, 64, 127, 254, 508, 1016, 2032, 4064.",
            " совершенное. Имеет следующие собственные делители: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8191, 16382, 32764, 65528, 131056, 262112, 524224, 1048448, 2096896, 4193792, 8387584, 16775168.",
            " совершенное. Имеет следующие собственные делители: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131071, 262142, 524284, 1048568, 2097136, 4194272, 8388544, 16777088, 33554176, 67108352, 134216704, 268433408, 536866816, 1073733632, 2147467264, 4294934528.",
        ],
        result = document.querySelector(".resultPerfNumb");

    for(let i = 0; i < arrPerf.length; i++) {
        if(DOMInput == arrPerf[i]) {
            return result.innerHTML = "Число " + DOMInput + textResult[i];
        }
    }

    result.innerHTML = "Число " + DOMInput + " не является совершенным.";
}

/*
6. Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
*/
function isMinNumb() {
    let DOMInput1 = document.querySelector("#minNumb1").value,
        DOMInput2 = document.querySelector("#minNumb2").value,
        arrPerf = [6, 28, 496, 8128, 33550336, 8589869056],
        textResult = "В заданном диапазоне совершенные числа: ",
        result = document.querySelector(".resultMinfNumb"),
        myItem = 0;

    for(let i = 0; i < arrPerf.length; i++) {
        if(arrPerf[i] >= DOMInput1 && arrPerf[i] <= DOMInput2) {
            textResult += arrPerf[i] + ", ";
            myItem += 1;
        }
    }

    if(myItem > 0) {
        result.innerHTML = textResult.substring(0, (textResult.length - 2));
    } else {
        result.innerHTML = textResult + "нет.";
    }
}

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function isTime() {
    let DOMInputs = document.querySelectorAll(".myTime"),
        arrMyTime = [00, 00, 00],
        error = document.querySelector(".error"),
        result = document.querySelectorAll(".resultMyTime"),
        myCase = true;
       
    error.innerHTML = "";

    for(let i = 0; i < DOMInputs.length; i++) {
        if(i == 0) {
            myCase = isNumber1Dig(DOMInputs[i].value);
            
            if(!myCase && DOMInputs[i].value > 0 && DOMInputs[i].value <= 24) {
                let myHour = "" + DOMInputs[i].value;
                if(myHour.length == 2) {
                    arrMyTime[i] = myHour;
                } else {
                    arrMyTime[i] = "0" + myHour;
                }
            } else {
                arrMyTime[i] = "00";
            }

            if(!myCase && (DOMInputs[i].value < 0 || DOMInputs[i].value > 24)) {
                error.innerHTML = "Значение превышает допустимое количество часов в сутках.";
            }
        } else {
            myCase = isNumber1Dig(DOMInputs[i].value);
            
            if(!myCase && DOMInputs[i].value > 0 && DOMInputs[i].value < 60) {
                let myHour = "" + DOMInputs[i].value;
                if(myHour.length == 2) {
                    arrMyTime[i] = myHour;
                } else {
                    arrMyTime[i] = "0" + myHour;
                }
            } else {
                arrMyTime[i] = "00";
            }

            if(!myCase && (DOMInputs[i].value < 0 || DOMInputs[i].value > 59)) {
                error.innerHTML = "Значение превышает допустимое количество минут/секунд в сутках.";
            }
        }
    }

    for(let i = 0; i < result.length; i++) {
        result[i].innerHTML = arrMyTime[i];
    }
}

// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function isSecond() {
    let DOMInputs = document.querySelectorAll(".myTime2"),
        result = document.querySelector(".resultSecond"),
        myCase = true,
        seconds = 0;

    for(let i = 0; i < DOMInputs.length; i++) {
        if(i == 0) {
            myCase = isNumber1Dig(DOMInputs[i].value);

            if(myCase || DOMInputs[i].value < 0) {
                DOMInputs[i].value = "00";
            } else {
                seconds += DOMInputs[i].value * 3600;
            }
        }

        if(i == 1) {
            myCase = isNumber1Dig(DOMInputs[i].value);

            if(myCase || DOMInputs[i].value < 0 || DOMInputs[i].value > 59) {
                DOMInputs[i].value = "00";
            } else {
                seconds += DOMInputs[i].value * 60;
            }
        }

        if(i == 2) {
            myCase = isNumber1Dig(DOMInputs[i].value);

            if(myCase || DOMInputs[i].value < 0 || DOMInputs[i].value > 59) {
                DOMInputs[i].value = "00";
            } else {
                seconds += DOMInputs[i].value * 1;
            }
        }
    }

    result.innerHTML = seconds + " секунд.";
}

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function isDoTme() {
    let DOMInput = document.querySelector(".doTime").value,
        error = document.querySelector(".error3"),
        result = document.querySelectorAll(".resultDoTime"),
        myCase = isNumber1Dig(DOMInput),
        arrMadeTime = [00, 00, 00],
        myTime = 0;

    error.innerHTML = "";

    if(myCase || DOMInput < 0) {
        return error.innerHTML = "ОШИБКА! Введите число!";
    } 

    myTime = Math.floor(DOMInput / 3600);
    if(myTime > 0) {
        arrMadeTime[0] = myTime;
    }

    myTime = Math.floor((DOMInput % 3600) / 60);
    if(myTime > 0) {
        arrMadeTime[1] = myTime;
    }

    myTime = DOMInput % 60;
    if(myTime > 0) {
        arrMadeTime[2] = myTime;
    }

    for(let i = 0; i < result.length; i++) {
        let myItem = "" + arrMadeTime[i];
        if(myItem.length == 1) {
            result[i].innerHTML = "0" + myItem;
        } else {
            result[i].innerHTML = myItem;
        }
    }
}
/*
10. Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
*/
function isDifDate(){
    let DOMInputs = document.querySelectorAll(".differenceDate"),
        result = document.querySelectorAll(".resultDoneDate"),
        myCase = true,
        arrDifDate = [00, 00, 00],
        seconds1 = 0,
        seconds2 = 0,
        seconds = 0,
        myTime = 0;

    myCase = isNumber1Dig(DOMInputs[0].value);
    if(myCase || DOMInputs[0].length < 0) {
        DOMInputs[0].value = "00";
    } else {
        seconds1 += DOMInputs[0].value * 3600;
    }

    myCase = isNumber1Dig(DOMInputs[1].value);
    if(myCase || DOMInputs[1].length < 0 || DOMInputs[1].value > 59) {
        DOMInputs[1].value = "00";
    } else {
        seconds1 += DOMInputs[1].value * 60;
    }

    myCase = isNumber1Dig(DOMInputs[2].value);
    if(myCase || DOMInputs[2].value < 0 || DOMInputs[2].value > 59) {
        DOMInputs[2].value = "00";
    } else {
        seconds1 += DOMInputs[2].value * 1;
    }

    myCase = isNumber1Dig(DOMInputs[3].value);
    if(myCase || DOMInputs[3].length < 0) {
        DOMInputs[3].value = "00";
    } else {
        seconds2 += DOMInputs[3].value * 3600;
    }

    myCase = isNumber1Dig(DOMInputs[4].value);
    if(myCase || DOMInputs[4].length < 0 || DOMInputs[4].value > 59) {
        DOMInputs[4].value = "00";
    } else {
        seconds2 += DOMInputs[4].value * 60;
    }

    myCase = isNumber1Dig(DOMInputs[5].value);
    if(myCase || DOMInputs[5].value < 0 || DOMInputs[5].value > 59) {
        DOMInputs[5].value = "00";
    } else {
        seconds2 += DOMInputs[5].value * 1;
    }

    seconds = Math.abs(seconds1 - seconds2);

    myTime = Math.floor(seconds / 3600);
    if(myTime > 0) {
        arrDifDate[0] = myTime;
    }

    myTime = Math.floor((seconds % 3600) / 60);
    if(myTime > 0) {
        arrDifDate[1] = myTime;
    }

    myTime = seconds % 60;
    if(myTime > 0) {
        arrDifDate[2] = myTime;
    }

    for(let i = 0; i < result.length; i++) {
        let myItem = "" + arrDifDate[i];
        if(myItem.length == 1) {
            result[i].innerHTML = "0" + myItem;
        } else {
            result[i].innerHTML = myItem;
        }
    }
}

let btn2Numbers = document.querySelector("#btn2Numbers"),
    btnFactorial = document.querySelector("#btnFactorial"),
    btnOneNumber = document.querySelector("#btnOneNumber"),
    btnSquare =  document.querySelector("#btnSquare"),
    btnPerfectNumb =  document.querySelector("#btnPerfectNumb"),
    btnMinNumb =  document.querySelector("#btnMinNumb"),
    inputHour = document.querySelector("#hour"),
    inputMinute = document.querySelector("#minute"),
    inputSecond = document.querySelector("#second"),
    btnSecond = document.querySelector("#btnSecond"),
    btnDoTime = document.querySelector("#btnDoTime"),
    btnDifDate = document.querySelector("#btnDifDate");

btn2Numbers.addEventListener("click", twoNumbers);
btnFactorial.addEventListener("click", isFactorial);
btnOneNumber.addEventListener("click", isOneNumb);
btnSquare.addEventListener("click", isSquare);
btnPerfectNumb.addEventListener("click", isPerfectNumber);
btnMinNumb.addEventListener("click", isMinNumb);
inputHour.addEventListener("keyup", isTime);
inputMinute.addEventListener("keyup", isTime);
inputSecond.addEventListener("keyup", isTime);
btnSecond.addEventListener("click", isSecond);
btnDoTime.addEventListener("click", isDoTme);
btnDifDate.addEventListener("click", isDifDate);