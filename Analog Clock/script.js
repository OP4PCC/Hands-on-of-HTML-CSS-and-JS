setInterval(setClock, 1000);

const hourHand = document.querySelector(".hour-hand");
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");

function setClock() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondRatio);
    setRotation(minHand, minRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock(); 