let sos;
let setup = () => {};
let update = () => {};
let random = () => {};
let clipboard = () => {};

window.onload = function(){
    setViewportSize();

    sos = document.getElementById("sos");
    
    setup();
    requestAnimationFrame(updateLoop);
}

window.onresize = () => {
    setViewportSize();
}

window.onorientationchange = () => {
    setViewportSize();
}

function setViewportSize(){
    document.documentElement.style.setProperty('--screen-width', `${window.innerWidth}px`);
    document.documentElement.style.setProperty('--screen-height', `${window.innerHeight}px`);
}

function updateLoop(){
    //try{
        let updated = update();
        if(updated !== sos.innerHTML){
            sos.innerHTML = updated;
        }
    //}catch{

    //}

    requestAnimationFrame(updateLoop);
}
