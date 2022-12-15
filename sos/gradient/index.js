let gradientTypeLinearInput;
let gradientTypeRadialInput;
let gradientAngleInput;
let stepGradientInput;
let colorCountInput;
let color0Input;
let color1Input;
let color2Input;
let color3Input;
let color4Input;
let colorPosition0Input;
let colorPosition1Input;
let colorPosition2Input;
let colorPosition3Input;
let colorPosition4Input;

setup = () => {
    gradientTypeLinearInput = document.getElementById("gradientTypeLinear");
    gradientTypeRadialInput = document.getElementById("gradientTypeRadial");
    gradientAngleInput = document.getElementById("gradientAngle");
    stepGradientInput = document.getElementById("stepGradient");
    colorCountInput = document.getElementById("colorCount");
    color0Input = document.getElementById("color0");
    color1Input = document.getElementById("color1");
    color2Input = document.getElementById("color2");
    color3Input = document.getElementById("color3");
    color4Input = document.getElementById("color4");
    colorPosition0Input = document.getElementById("colorPosition0");
    colorPosition1Input = document.getElementById("colorPosition1");
    colorPosition2Input = document.getElementById("colorPosition2");
    colorPosition3Input = document.getElementById("colorPosition3");
    colorPosition4Input = document.getElementById("colorPosition4");

    random();
}

update = () => {
    let gradientTypeLinear = gradientTypeLinearInput.checked;
    let gradientTypeRadial = gradientTypeRadialInput.checked;
    let gradientAngle = parseFloat(gradientAngleInput.value);
    let stepGradient = stepGradientInput.checked;
    let colorCount = parseFloat(colorCountInput.value);
    let colors = [
        [color0Input.value, parseFloat(colorPosition0Input.value)],
        [color1Input.value, parseFloat(colorPosition1Input.value)],
        [color2Input.value, parseFloat(colorPosition2Input.value)],
        [color3Input.value, parseFloat(colorPosition3Input.value)],
        [color4Input.value, parseFloat(colorPosition4Input.value)]
    ].slice(0, colorCount);

    colors.sort((a, b) => a[1] - b[1]);

    colorCountInput.setAttribute("value", colorCountInput.value);

    let steps = "";
    for(let i=0;i<colorCount;i++){
        steps += `, ${colors[i][0]} ${colors[i][1]}%`;
        if(stepGradient && i != colorCount-1){
            steps += `, ${colors[i+1][0]} ${colors[i][1]}%`;
        }
    }
    let gradient;
    if(gradientTypeLinear){
        gradient = `linear-gradient(${gradientAngle}deg${steps})`;
    }else if(gradientTypeRadial){
        gradient = `radial-gradient(${steps.slice(2)})`;
    }

    return `
        #output>*{
            background: ${gradient};
        }
    `;
}

random = () => {
    [gradientTypeLinearInput, gradientTypeRadialInput][randInt(0, 2)].checked = true;
    gradientAngleInput.value = randInt(gradientAngleInput.min, gradientAngleInput.max);
    stepGradientInput.checked = randBool();
    colorCountInput.value = randInt(colorCountInput.min, colorCountInput.max);
    color0Input.value = randColor();
    color1Input.value = randColor();
    color2Input.value = randColor();
    color3Input.value = randColor();
    color4Input.value = randColor();

    let percentages = [randInt(0, 100), randInt(0, 100), randInt(0, 100), randInt(0, 100), randInt(0, 100)].sort((a, b) => a - b);

    colorPosition0Input.value = percentages[0];
    colorPosition1Input.value = percentages[1];
    colorPosition2Input.value = percentages[2];
    colorPosition3Input.value = percentages[3];
    colorPosition4Input.value = percentages[4];
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^        /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
