"use strict";

const totalTasks = 14;
const completedTasks = 4;

if (Number.isFinite(totalTasks) && Number.isFinite(completedTasks)) {
    if (Number.isInteger(totalTasks) && Number.isInteger(completedTasks)) {
        if ((totalTasks >= 0) && (completedTasks >= 0)) {
            if ((totalTasks <= 1000) && (completedTasks <= 1000)) {
                if (completedTasks <= totalTasks) {
                    if (totalTasks === 0) {
                        console.log("Задач пока нет");
                    } else {
                        const left = totalTasks - completedTasks;
                        const progress = ((completedTasks / totalTasks) * 100).toFixed(1);
                        let status = "";
                        if (left === 0) {
                            status = "Завершено";
                        } else {
                            if (left === totalTasks) {
                                status = "Не начато";
                            } else {
                                status = "В работе"
                            }
                        }
                        console.log(`Всего задач: ${totalTasks}\nВыполнено: ${completedTasks}\nОсталось: ${left}\nПрогресс: ${progress}%\nСтатус: ${status}`);
                    }
                } else {
                    console.log("Ошибка: выполнено больше, чем существует.");
                }
            } else {
                console.log("Ошибка: превышена верхняя граница.");
            }
        } else {
            console.log("Ошибка: отрицательное количество.");
        }
    } else {
        console.log("Ошибка: дробное количество.");
    }
} else {
    if (Number.isNaN(totalTasks) || Number.isNaN(completedTasks)) {
        console.log("Ошибка: недопустимое числовое значение.");
    } else {
        console.log("Ошибка: вместо числа передана строка.");
    }
}