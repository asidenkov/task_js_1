const redLight = document.querySelector('#red');
const yellowLight = document.querySelector('#yellow');
const greenLight = document.querySelector('#green');

function makeRed(){
    redLight.style.background = ('red');
    yellowLight.style.background = ('black');
    greenLight.style.background = ('black');


}
function makeYellow(){
    redLight.style.background = ('black');
    yellowLight.style.background = ('yellow');
    greenLight.style.background = ('black');

}

function makeGreen(){
    redLight.style.background = ('black');
    yellowLight.style.background = ('black');
    greenLight.style.background = ('green');

}



redLight.addEventListener('click', makeRed);
yellowLight.addEventListener('click', makeYellow);
greenLight.addEventListener('click', makeGreen);