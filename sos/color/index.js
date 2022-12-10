let pickerWidthInput;
let pickerHeightInput;
let pickerBorderWidthInput;
let pickerBorderRadiusInput;
let pickerBorderColorInput;

setup = () => {
    pickerWidthInput = document.getElementById("pickerWidth");
    pickerHeightInput = document.getElementById("pickerHeight");
    pickerBorderWidthInput = document.getElementById("pickerBorderWidth");
    pickerBorderRadiusInput = document.getElementById("pickerBorderRadius");
    pickerBorderColorInput = document.getElementById("pickerBorderColor");

    random();
}

update = () => {
    let pickerWidth = parseFloat(pickerWidthInput.value);
    let pickerHeight = parseFloat(pickerHeightInput.value);
    let pickerBorderWidth = parseFloat(pickerBorderWidthInput.value);
    let pickerBorderRadius = parseFloat(pickerBorderRadiusInput.value);
    let pickerBorderColor = pickerBorderColorInput.value;
    
    return `
        #output>input[type="color"] {
            position: relative;
            width: ${pickerWidth + 2 * pickerBorderWidth}px;
            height: ${pickerHeight + 2 * pickerBorderWidth}px;
            border-radius: ${pickerBorderRadius}px;
            padding: 0;
            border: ${pickerBorderWidth}px solid ${pickerBorderColor};
            overflow: hidden;
        }
        
        #output>input[type="color"]::-moz-color-swatch {
            border: none;
            border-radius: ${Math.max(pickerBorderRadius - pickerBorderWidth - 1, 0)}px;
            overflow: hidden;
        }
        
        #output>input[type="color"]::-webkit-color-swatch-wrapper {
            padding: 0;
            border-radius: ${Math.max(pickerBorderRadius - pickerBorderWidth - 1, 0)}px;
            overflow: hidden;
        }
        
        #output>input[type="color"]::-webkit-color-swatch {
            border: none;
        }

        #output>input[type="color"]::after{
            content: "";
            display: block;
            position: absolute;
            left: ${-pickerBorderWidth}px;
            top: ${-pickerBorderWidth}px;
            width: ${pickerWidth}px;
            height: ${pickerHeight}px;
            border-radius: ${pickerBorderRadius}px;
            padding: 0;
            border: ${pickerBorderWidth}px solid ${pickerBorderColor};
        }

        #output>input[type="color"]:disabled{
            filter: grayscale(100%);
        }
    `;
}

random = () => {
    pickerWidthInput.value = randInt(pickerWidthInput.min, pickerWidthInput.max);
    pickerHeightInput.value = randInt(pickerHeightInput.min, pickerHeightInput.max);
    pickerBorderWidthInput.value = randInt(pickerBorderWidthInput.min, pickerBorderWidthInput.max);
    pickerBorderRadiusInput.value = randInt(pickerBorderRadiusInput.min, pickerBorderRadiusInput.max);
    pickerBorderColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^        /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
