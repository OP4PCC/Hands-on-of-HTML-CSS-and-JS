// var Time = document.getElementById("clock")  

// function Display() {

// }

// Display.prototype.add = 

function setDate(){
    var samay = new Date();
// console.log(samay)x
var hour = samay.getHours();
var min = samay.getMinutes();
var second = samay.getSeconds();
// console.log(hour);
// console.log(min);
// console.log(second);
var clock = document.getElementById("clock");

var time = `${hour}:${min}:${second}`;
// console.log(time);

clock.innerHTML = time;
}

setInterval(setDate, 1000);

setDate();

