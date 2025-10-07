const body= document.querySelector('body');
const button=document.querySelector('button');
const colors=["red", "gold", "yellow", "green", "pink","black"]


body.style.backgroundColor="black";

button.addEventListener("click", function(){
 const colorIndex = Math.floor(Math.random()*colors.length);
 body.style.backgroundColor=colors[colorIndex];
})


