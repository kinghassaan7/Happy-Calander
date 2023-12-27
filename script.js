const lang = navigator.language;

let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {weekday: 'long'})

let monthName = date.toLocaleDateString(lang, {month: 'long'})
let year = date.getFullYear()

function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('time').innerHTML = time;
  }
  setInterval(updateTime, 1000);

document.getElementById('monthName').innerHTML = monthName;
document.getElementById('dayName').innerHTML = dayName;
document.getElementById('dayNumber').innerHTML = dayNumber;
document.getElementById('year').innerHTML = year;
document.getElementById('time').innerHTML = time;
