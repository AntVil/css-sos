let selectWidthInput;
let selectHeightInput;
let selectBorderWidthInput;
let selectBorderRadiusInput;
let selectColorInput;
let selectBorderColorInput;
let selectFontColorInput;
let arrowSizeInput;
let arrowColorInput;
let arrowBackgroundWidthInput;
let arrowBackgroundColorInput;

setup = () => {
    selectWidthInput = document.getElementById("selectWidth");
    selectHeightInput = document.getElementById("selectHeight");
    selectBorderWidthInput = document.getElementById("selectBorderWidth");
    selectBorderRadiusInput = document.getElementById("selectBorderRadius");
    selectColorInput = document.getElementById("selectColor");
    selectBorderColorInput = document.getElementById("selectBorderColor");
    selectFontColorInput = document.getElementById("selectFontColor");
    arrowSizeInput = document.getElementById("arrowSize");
    arrowColorInput = document.getElementById("arrowColor");
    arrowBackgroundWidthInput = document.getElementById("arrowBackgroundWidth");
    arrowBackgroundColorInput = document.getElementById("arrowBackgroundColor");

    random();
}


update = () => {
    let selectWidth = parseFloat(selectWidthInput.value);
    let selectHeight = parseFloat(selectHeightInput.value);
    let selectBorderWidth = parseFloat(selectBorderWidthInput.value);
    let selectBorderRadius = parseFloat(selectBorderRadiusInput.value);
    let selectColor = selectColorInput.value;
    let selectBorderColor = selectBorderColorInput.value;
    let selectFontColor = selectFontColorInput.value;
    let arrowSize = parseFloat(arrowSizeInput.value);
    let arrowColor = arrowColorInput.value;
    let arrowBackgroundWidth = parseFloat(arrowBackgroundWidthInput.value);
    let arrowBackgroundColor = arrowBackgroundColorInput.value;
    
    let arrowUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23${arrowColor.slice(1)}' d='M3 3L21 3L12 21'/%3E%3C/svg%3E")`;
    return `
        #output>select{
            appearance: none;
            box-sizing: border-box;
            position: relative;
            width: ${selectWidth + 2 * selectBorderWidth}px;
            height: ${selectHeight + 2 * selectBorderWidth}px;
            border: ${selectBorderWidth}px solid ${selectBorderColor};
            color: ${selectFontColor};
            border-radius: ${selectBorderRadius}px;
            padding-left: 5px;
            background: ${arrowUrl} no-repeat right calc(${arrowBackgroundWidth / 2}px - ${arrowSize / 2}px) center/${arrowSize}px,
            linear-gradient(to left, ${arrowBackgroundColor} ${arrowBackgroundWidth}px, ${selectColor} ${arrowBackgroundWidth}px);
        }

        #output>select>option{
            color: inherit;
            background-color: ${selectColor};
        }

        #output>select:disabled{
            filter: grayscale(100%);
        }
    `;
}

random = () => {
    selectWidthInput.value = randInt(selectWidthInput.min, selectWidthInput.max);
    selectHeightInput.value = randInt(selectHeightInput.min, selectHeightInput.max);
    selectBorderWidthInput.value = randInt(selectBorderWidthInput.min, selectBorderWidthInput.max);
    selectBorderRadiusInput.value = randInt(selectBorderRadiusInput.min, selectBorderRadiusInput.max);
    selectColorInput.value = randColor();
    selectBorderColorInput.value = randColor();
    selectFontColorInput.value = randColor();
    arrowSizeInput.value = randInt(arrowSizeInput.min, arrowSizeInput.max);
    arrowColorInput.value = randColor();
    arrowBackgroundWidthInput.value = randInt(arrowBackgroundWidthInput.min, arrowBackgroundWidthInput.max);
    arrowBackgroundColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll("        ", "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
