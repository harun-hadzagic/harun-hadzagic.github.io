const daysElement = document.getElementById(`days`);
const hoursElement = document.getElementById(`hours`);
const secondsElement = document.getElementById(`seconds`);
const minutesElement = document.getElementById(`mins`);

const newYear = `1 Jan 2023`

function countdown (){
    const newYearsDate = new Date (newYear);
    const currentDate = new Date();

    const milliseconds = newYearsDate-currentDate;
    const totalseconds = Math.floor(milliseconds / 1000);
    const seconds = Math.floor(milliseconds / 1000 %60);
    const minutes = Math.floor(totalseconds/60) %60;
    const hours = (Math.floor(totalseconds/3600) %24);
    const days = Math.floor((totalseconds / 3600)/24);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    secondsElement.innerHTML = seconds;
    minutesElement.innerHTML = minutes;
}


countdown();

setInterval(countdown, 1000);
