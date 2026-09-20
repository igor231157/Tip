/*
0-Monday;
1-Tuesday;
2-Wednesday;
3-Thursday;
4-Friday
5-Saturday
6-Sunday
*/

const totalTasks = 15;
let completedTasks = 2;
const dailyLimit = 3;

let flag = true;
let AllDays = 0;
let WorkDays = 0;

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
    console.log("---------------------------");
    console.log("Осталось задач: ", totalTasks - completedTasks);
    console.log("---------------------------");
    let CurrentDay = 0;
    let todo = 0;
    let day = "";
    while (completedTasks < totalTasks) {
        AllDays = AllDays + 1;
        if (CurrentDay === 0) {
            day = "Понедельник";
        }
        if (CurrentDay === 1) {
            day = "Вторник";
        }
        if (CurrentDay === 2) {
            day = "Среда";
        }
        if (CurrentDay === 3) {
            day = "Четверг";
        }
        if (CurrentDay === 4) {
            day = "Пятница";
        }
        if (CurrentDay === 5) {
            day = "Суббота";
        }
        if (CurrentDay === 6) {
            day = "Воскресенье";
        }
        if (CurrentDay < 5) {
            WorkDays = WorkDays + 1;
            if (dailyLimit <= totalTasks - completedTasks) {
                todo = dailyLimit;
            } else {
                todo = totalTasks - completedTasks;
            }
            completedTasks = completedTasks + todo;
            console.log(`День №${AllDays}: ${day}; выпонено ${todo}, осталось ${totalTasks - completedTasks}`);
        } else {
            console.log(`День №${AllDays}: ${day} - Выходной`);
        }
        if (CurrentDay === 6) {
            CurrentDay = 0;
        } else {
            CurrentDay = CurrentDay + 1;
        }
    }
    console.log("---------------------------");
    console.log(`Потребуется календарных дней: ${AllDays}`);
    console.log(`Потребуется рабочих дней: ${WorkDays}`);
    console.log("---------------------------");
}
