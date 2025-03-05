const growthStudents = [164, 157, 160, 143, 170];

const title = document.createElement("h1");
title.textContent = "Рост учеников";
document.body.append(title);

const addButton = document.createElement("button");
addButton.textContent = "Добавить рост";
addButton.classList.add("first");
document.body.append(addButton);

addButton.onclick = function () {
    list.innerHTML = "";
    const add = prompt("Введите рост ученика");
    const addGrowth = Number(add);

    if (!addGrowth || typeof addGrowth != "number") {
        alert("Рост не введён!");
        showList(growthStudents);
    }
    else {
        growthStudents.push(addGrowth);
        showList(growthStudents);
    }
}

const filtButton = document.createElement("button");
filtButton.textContent = "Фильтровать";
filtButton.classList.add("second")
document.body.append(filtButton);

filtButton.onclick = function () {
    list.innerHTML = "";
    const minGrowth = prompt("Ведите минимальный рост");

    const result = [];
    for (const item of growthStudents) {
        if (!minGrowth) {
            return showList(growthStudents);
        }
        else if (item >= minGrowth) {
            result.push(item)
        }
    }
    showList(result);
}

function showList(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = document.createElement("li");
        item.textContent = `${i + 1}) ${arr[i]}`
        list.append(item);
    }
}

const list = document.createElement("ul");
document.body.append(list);
showList(growthStudents);