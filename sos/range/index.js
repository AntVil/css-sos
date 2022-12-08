let trackWidthInput;
let trackHeightInput;
let trackBorderWidthInput;
let trackBorderRadiusInput;
let trackColorInput;
let trackBorderColorInput;
let thumbWidthInput;
let thumbHeightInput;
let thumbBorderWidthInput;
let thumbBorderRadiusInput;
let thumbColorInput;
let thumbBorderColorInput;

setup = () => {
    trackWidthInput = document.getElementById("trackWidth");
    trackHeightInput = document.getElementById("trackHeight");
    trackBorderWidthInput = document.getElementById("trackBorderWidth");
    trackBorderRadiusInput = document.getElementById("trackBorderRadius");
    trackColorInput = document.getElementById("trackColor");
    trackBorderColorInput = document.getElementById("trackBorderColor");
    thumbWidthInput = document.getElementById("thumbWidth");
    thumbHeightInput = document.getElementById("thumbHeight");
    thumbBorderWidthInput = document.getElementById("thumbBorderWidth");
    thumbBorderRadiusInput = document.getElementById("thumbBorderRadius");
    thumbColorInput = document.getElementById("thumbColor");
    thumbBorderColorInput = document.getElementById("thumbBorderColor");

    random();
}

update = () => {
    let trackWidth = parseFloat(trackWidthInput.value);
    let trackHeight = parseFloat(trackHeightInput.value);
    let trackBorderWidth = parseFloat(trackBorderWidthInput.value);
    let trackBorderRadius = parseFloat(trackBorderRadiusInput.value);
    let trackColor = trackColorInput.value;
    let trackBorderColor = trackBorderColorInput.value;
    let thumbWidth = parseFloat(thumbWidthInput.value);
    let thumbHeight = parseFloat(thumbHeightInput.value);
    let thumbBorderWidth = parseFloat(thumbBorderWidthInput.value);
    let thumbBorderRadius = parseFloat(thumbBorderRadiusInput.value);
    let thumbColor = thumbColorInput.value;
    let thumbBorderColor = thumbBorderColorInput.value;
    
    return `
        #output>input[type="range"]{
            appearance: none;
            width: ${trackWidth + 2 * trackBorderWidth}px;
            height: ${Math.max(trackHeight + 2 * trackBorderWidth, thumbHeight + 2 * thumbBorderWidth)}px;
            background-color: transparent;
            background: transparent;
        }
        
        #output>input[type="range"]::-webkit-slider-runnable-track{
            height: ${trackHeight + 2 * trackBorderWidth}px;
            border-width: ${trackBorderWidth}px;
            border-style: solid;
            border-radius: ${trackBorderRadius}px;
            background-color: ${trackColor};
            border-color: ${trackBorderColor};
        }
        
        #output>input[type="range"]::-webkit-slider-thumb{
            appearance: none;
            width: ${thumbWidth + 2 * thumbBorderWidth}px;
            height: ${thumbHeight + 2 * thumbBorderWidth}px;
            margin-top: ${(trackHeight - (thumbHeight + 2 * thumbBorderWidth)) / 2}px;
            border-width: ${thumbBorderWidth}px;
            border-style: solid;
            border-radius: ${thumbBorderRadius}px;
            background-color: ${thumbColor};
            border-color: ${thumbBorderColor};
        }
        
        #output>input[type="range"]::-moz-range-track{
            width: 100%;
            height: ${trackHeight}px;
            border-width: ${trackBorderWidth}px;
            border-style: solid;
            border-radius: ${trackBorderRadius}px;
            background-color: ${trackColor};
            border-color: ${trackBorderColor};
        }
        
        #output>input[type="range"]::-moz-range-thumb{
            width: ${thumbWidth}px;
            height: ${thumbHeight}px;
            border-width: ${thumbBorderWidth}px;
            border-style: solid;
            border-radius: ${thumbBorderRadius}px;
            background-color: ${thumbColor};
            border-color: ${thumbBorderColor};
        }

        #output>input[type="range"]:disabled{
            filter: grayscale(100%);
        }
    `;
}

random = () => {
    trackWidthInput.value = randInt(trackWidthInput.min, trackWidthInput.max);
    trackHeightInput.value = randInt(trackHeightInput.min, trackHeightInput.max);
    trackBorderWidthInput.value = randInt(trackBorderWidthInput.min, trackBorderWidthInput.max);
    trackBorderRadiusInput.value = randInt(trackBorderRadiusInput.min, trackBorderRadiusInput.max);
    trackColorInput.value = randColor();
    trackBorderColorInput.value = randColor();
    thumbWidthInput.value = randInt(thumbWidthInput.min, thumbWidthInput.max);
    thumbHeightInput.value = randInt(thumbHeightInput.min, thumbHeightInput.max);
    thumbBorderWidthInput.value = randInt(thumbBorderWidthInput.min, thumbBorderWidthInput.max);
    thumbBorderRadiusInput.value = randInt(thumbBorderRadiusInput.min, thumbBorderRadiusInput.max);
    thumbColorInput.value = randColor();
    thumbBorderColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll("        ", "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
