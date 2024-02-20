const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand= document.querySelector(".second-hand");

function getDate(){
 const now = new Date();

 const seconds = now.getSeconds();
 const secondsDegrees = ((seconds / 60) * 360) + 90;
 secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

 const minutes = now.getMinutes();
 const minutesDegrees = ((minutes / 60) * 360) + 90;
 minHand.style.transform = `rotate(${minutesDegrees}deg)`; 

 const hour = now.getHours();
 const hourDegrees = ((hour / 12) * 360) + 90;
 hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(getDate, 1000);