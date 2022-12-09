function randInt(min, max){
    min = parseFloat(min);
    max = parseFloat(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randColor(){
    let val = "#" + Math.floor(Math.random() * 16777215).toString(16);
    while (val.length < 7) {
        val += "0"
    }
    return val;
}

function randBool(){
    return Math.random() < 0.5;
}
