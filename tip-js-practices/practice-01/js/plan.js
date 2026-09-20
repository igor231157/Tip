"use strict";

const totalTasks = 14;
const completedTasks = 4;
const dailyLimit = 4;
let flag = true;

if (Number.isFinite(totalTasks) && Number.isFinite(completedTasks)) {
    if (Number.isInteger(totalTasks) && Number.isInteger(completedTasks)) {
        if ((totalTasks >= 0) && (completedTasks >= 0)) {
            if ((totalTasks <= 1000) && (completedTasks <= 1000)) {
                if (completedTasks > totalTasks) {
                    flag = false
                    console.log("Ошибка: некорректное число выполненных задач");
                }
            } else {
                flag = false
                console.log("Ошибка: превышена верхняя граница задач.");
            }
        } else {
            flag = false
            console.log("Ошибка: отрицательное количество задач.");
        }
    } else {
        flag = false
        console.log("Ошибка: дробное количество задач.");
    }
} else {
    flag = false
    if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
        console.log("Ошибка: недопустимое числовое значение задач.");
    } else {
        console.log("Ошибка: вместо числа (задач) передана строка.");
    }
}

if (flag) {
    if (Number.isFinite(dailyLimit)) {
        if (Number.isInteger(dailyLimit)) {
            if (dailyLimit > 0) {
                if (dailyLimit > 1000) {
                    flag = false;
                    console.log("Ошибка: превышена верхняя граница нормы.");
                }
            } else {
                flag = false;
                console.log("Ошибка: отрицательная или нулевая дневная норма.");
            }
        } else {
            flag = false;
            console.log("Ошибка: дробной дневной нормы быть не должно.");
        }
    } else {
        flag = false;
        if (Number.isNaN(dailyLimit)) {
            console.log("Ошибка: недопустимое числовое значение дневной нормы.");
        } else {
            console.log("Ошибка: дневная норма задана строкой.")
        }
    }
}

if (flag) {
    let day = 0;
    let left = totalTasks - completedTasks;
    let todo = 0;
    console.log("Осталось задач:", left);
    while (left > 0) {
        todo = dailyLimit;
        day = day + 1;
        if (dailyLimit > left) {
            todo = left;
        }
        left = left - todo;
        console.log(`День ${day}: выполнено ${todo}, осталось ${left}`)
    }
    console.log("Потребуется дней:", day);
}