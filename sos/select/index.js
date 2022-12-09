let selectWidthInput;
let selectHeightInput;
let selectBorderWidthInput;
let selectBorderRadiusInput;
let selectColorInput;
let selectBorderColorInput;
let selectFontColorInput;
let arrowIconCornerInput;
let arrowIconTriangleInput;
let arrowXSizeInput;
let arrowYSizeInput;
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
    arrowIconCornerInput = document.getElementById("arrowIconCorner");
    arrowIconTriangleInput = document.getElementById("arrowIconTriangle");
    arrowXSizeInput = document.getElementById("arrowXSize");
    arrowYSizeInput = document.getElementById("arrowYSize");
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
    let arrowIconCorner = arrowIconCornerInput.checked;
    let arrowIconTriangle = arrowIconTriangleInput.checked;
    let arrowXSize = parseFloat(arrowXSizeInput.value);
    let arrowYSize = parseFloat(arrowYSizeInput.value);
    let arrowColor = arrowColorInput.value;
    let arrowBackgroundWidth = parseFloat(arrowBackgroundWidthInput.value);
    let arrowBackgroundColor = arrowBackgroundColorInput.value;
    
    let imgUrl;
    if(arrowIconTriangle){
        let offsetX = 12 - arrowXSize;
        let offsetY = 12 - arrowYSize;
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23${arrowColor.slice(1)}' d='M${offsetX} ${offsetY}L12 ${24 - offsetY}L${24 - offsetX} ${offsetY}'/%3E%3C/svg%3E")`;
    }else if(arrowIconCorner){
        let offsetX = 12 - arrowXSize;
        let offsetY = 12 - arrowYSize;
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke-width='3' stroke='%23${arrowColor.slice(1)}' d='M${offsetX} ${offsetY}L12 ${24 - offsetY}L${24 - offsetX} ${offsetY}'/%3E%3C/svg%3E")`;
    }

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
            background: ${imgUrl} no-repeat right ${arrowBackgroundWidth / 2 - selectHeight / 2}px center/${selectHeight}px,
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
    [arrowIconCornerInput, arrowIconTriangleInput][randInt(0, 2)].checked = true;
    arrowXSizeInput.value = randInt(arrowXSizeInput.min, arrowXSizeInput.max);
    arrowYSizeInput.value = randInt(arrowYSizeInput.min, arrowYSizeInput.max);
    arrowColorInput.value = randColor();
    arrowBackgroundWidthInput.value = randInt(arrowBackgroundWidthInput.min, arrowBackgroundWidthInput.max);
    arrowBackgroundColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll("        ", "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
