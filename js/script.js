
console.log('Starting up');

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const clockText = document.querySelector('.clock-text');


setInterval(() => {
    
    const now = new Date();

    const time = {
        getSecondRotate() {
            const rotateVal = (this.second / 60) * 360;
            return Math.round(rotateVal);
        },
        getMinuteRotate() {
            const rotateVal = (this.minute / 60) * 360;
            return Math.round(rotateVal);
        },
        getHourRotate() {
            const rotateVal = (this.hour / 12) * 360;
            return Math.round(rotateVal);
        },
        second: now.getSeconds(),
        minute: now.getMinutes(),
        hour: now.getHours()
    }    
    secondHand.style.transform = `rotateZ(${time.getSecondRotate()}deg)`;
    minuteHand.style.transform = `rotateZ(${time.getMinuteRotate()}deg)`;
    hourHand.style.transform = `rotateZ(${time.getHourRotate()}deg)`;    
    clockText.innerHTML = `${time.hour}:${time.minute}:${String(time.second).padStart(2,'0')}`;
}, 1000);