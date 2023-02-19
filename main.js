let city;
city = 'Київ';
city = 'Львів';
let address = city;
console.log(address);
const num = parseInt(prompt('write number') || '0');
num % 2 === 0 ? console.log('парне') : console.log('непарне');
function max(...arg) {
    let max = arg[0];
    for (let rArg of arg) {
        if (rArg > max)
            max = rArg;
    }
    ;
    console.log("Max Number =", max);
}
max(1, 2, 3, 4, 5, 6, 7, 8, 9);
function getSqrt(number) {
    if (Number.isFinite(number) == false && number != null) {
        console.log("Повинно бути числове значення.");
    }
    else if (number == null) {
        console.log("Будь ласка, введіть число!");
    }
    else if (number < 0) {
        console.log("Введіть додатнє число");
    }
    else {
        console.log(`Квадратний корінь з ${number} = ${Math.sqrt(number)} `);
    }
}
getSqrt(16);
let n = 0;
const area = document.querySelector(".area");
const writer = document.querySelector(".text");
let btnAdd = document.querySelector(".add");
let btnReset = document.querySelector(".reset");
let redWord = document.querySelector(".redword");
let cenzorBtn = document.querySelector(".cenzor");
let koma = ",";
btnAdd.addEventListener("click", function () {
    if (writer.value == "") {
        writer.classList.add("redBorder");
        writer.placeholder = "Please write a word!";
    }
    else {
        writer.placeholder = "word here...";
        writer.classList.remove("redBorder");
        if (n === 1) {
            redWord.insertAdjacentHTML("beforeend", `<span> ${writer.value}</span>`);
            n--;
        }
        else {
            redWord.insertAdjacentHTML("beforeend", `<span>${koma}${writer.value}</span>`);
        }
        writer.value = "";
    }
});
btnReset.addEventListener("click", function () {
    n++;
    redWord.innerHTML = "";
    writer.value = "";
    area.value = "";
});
cenzorBtn.addEventListener("click", function () {
    if (area.value == "") {
        area.classList.add("redBorder");
        area.placeholder = "Please write a word!";
    }
    else {
        area.classList.remove("redBorder");
        area.placeholder = "text here...";
        let badArr = redWord?.textContent?.split(",");
        for (const word of badArr) {
            let reg = new RegExp(`\\b${word}\\b`, "gi");
            area.value = area.value.replace(reg, "*".repeat(word.length));
        }
    }
});
