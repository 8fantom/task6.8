const trafficLightEl = document.querySelector('#trafficLight');

trafficLightEl.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    //после 1клика скрипт останавливается тут (выполняя это trafficLightEl.removeEventListener('click', makeGreen);) и ждет второго?
    trafficLightEl.addEventListener('click', makeYellow);
}


function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    //после 2клика скрипт останавливается тут (выполняя это trafficLightEl.removeEventListener('click', makeYellow);) и ждет третьего?
    trafficLightEl.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
     //после 3клика скрипт останавливается тут (выполняя это trafficLightEl.removeEventListener('click', makeRed);) и ждет четвертого?
    trafficLightEl.addEventListener('click', makeGreen);
}


