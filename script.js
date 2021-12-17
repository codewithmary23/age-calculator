// Elements
let btnCalculate = document.getElementById('calculate');
let btnClear = document.getElementById('clear');
let ageResult = document.getElementById('result');

let date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getUTCFullYear();

let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// Functions

// Event listeners
btnCalculate.addEventListener('click', () => {
    let inputDay = document.getElementById('day').value;
    let inputMonth = document.getElementById('month').value;
    let inputYear = document.getElementById('year').value;

    if (inputDay > currentDay) {
        currentDay = currentDay + month[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }

    if (inputMonth > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    let resultDay = currentDay - inputDay;
    let resultMonth = currentMonth - inputMonth;
    let resultYear = currentYear - inputYear;

    ageResult.textContent = `Your age is ${resultYear}, ${resultMonth} months, ${resultDay} days.`
});

btnClear.addEventListener('click', () => {
    window.location.reload();
});