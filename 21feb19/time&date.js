var today = new Date(),
    hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds(),
    day = today.getDay(),
    date = today.getDate(),
    month = today.getMonth(),
    year = today.getYear();

var list = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + list[day]);




console.log("Date is : " + date + "/" + month + "/" + year);


if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

var suffix = "AM";
if (hours >= 12) {
    suffix = "PM";
    hours = hours - 12;
}
if (hours == 0) {
    hours = 12;
}
console.log(day)
console.log("Time is : " + hours + ":" + minutes + ":" + seconds + " " + suffix)