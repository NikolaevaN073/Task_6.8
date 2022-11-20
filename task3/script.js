let i = 2;
let color = ['green','yellow','red'];

const trafficLight = document.querySelectorAll('.trafficLight');

function changeColor () {
   trafficLight[i].style.background = 'black';
   
   i = i !== 2 ? ++i : 0;
   trafficLight[i].style.background = color[i];  
}

trafficLight.forEach((elem)=>{
    elem.addEventListener('click', changeColor)
})
