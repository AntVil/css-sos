let trackWidthInput;
let trackHeightInput;
let trackBorderWidthInput;
let trackBorderRadiusInput;
let trackColorInput;
let trackBorderColorInput;
let trackActiveColorInput;
let thumbWidthInput;
let thumbHeightInput;
let thumbBorderWidthInput;
let thumbOffsetInput;
let thumbBorderRadiusInput;
let thumbColorInput;
let thumbBorderColorInput;
let thumbHoverColorInput;

setup = () => {
    trackWidthInput = document.getElementById("trackWidth");
    trackHeightInput = document.getElementById("trackHeight");
    trackBorderWidthInput = document.getElementById("trackBorderWidth");
    trackBorderRadiusInput = document.getElementById("trackBorderRadius");
    trackColorInput = document.getElementById("trackColor");
    trackBorderColorInput = document.getElementById("trackBorderColor");
    trackActiveColorInput = document.getElementById("trackActiveColor");
    thumbWidthInput = document.getElementById("thumbWidth");
    thumbHeightInput = document.getElementById("thumbHeight");
    thumbBorderWidthInput = document.getElementById("thumbBorderWidth");
    thumbOffsetInput = document.getElementById("thumbOffset");
    thumbBorderRadiusInput = document.getElementById("thumbBorderRadius");
    thumbColorInput = document.getElementById("thumbColor");
    thumbBorderColorInput = document.getElementById("thumbBorderColor");
    thumbHoverColorInput = document.getElementById("thumbHoverColor");

    random();
}

update = () => {
    let trackWidth = parseFloat(trackWidthInput.value);
    let trackHeight = parseFloat(trackHeightInput.value);
    let trackBorderWidth = parseFloat(trackBorderWidthInput.value);
    let trackBorderRadius = parseFloat(trackBorderRadiusInput.value);
    let trackColor = trackColorInput.value;
    let trackBorderColor = trackBorderColorInput.value;
    let trackActiveColor = trackActiveColorInput.value;
    let thumbWidth = parseFloat(thumbWidthInput.value);
    let thumbHeight = parseFloat(thumbHeightInput.value);
    let thumbBorderWidth = parseFloat(thumbBorderWidthInput.value);
    let thumbOffset = parseFloat(thumbOffsetInput.value);
    let thumbBorderRadius = parseFloat(thumbBorderRadiusInput.value);
    let thumbColor = thumbColorInput.value;
    let thumbBorderColor = thumbBorderColorInput.value;
    let thumbHoverColor = thumbHoverColorInput.value;
    
    return `
        #output>input[type="checkbox"]{
            appearance: none;
            position: relative;
            width: ${trackWidth + 2 * trackBorderWidth}px;
            height: ${Math.max(trackHeight + 2 * trackBorderWidth, thumbHeight + 2 * thumbBorderWidth)}px;
        }

        #output>input[type="checkbox"]::before{
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            content: "";
            display: block;
            width: ${trackWidth}px;
            height: ${trackHeight}px;
            border: ${trackBorderWidth}px solid ${trackBorderColor};
            border-radius: ${trackBorderRadius}px;
            background-color: ${trackColor};
        }

        #output>input[type="checkbox"]:checked::before{
            background-color: ${trackActiveColor};
        }

        #output>input[type="checkbox"]::after{
            position: absolute;
            top: 50%;
            transform: translate(${thumbOffset}px, -50%);
            content: "";
            display: block;
            width: ${thumbWidth}px;
            height: ${thumbHeight}px;
            border: ${thumbBorderWidth}px solid ${thumbBorderColor};
            border-radius: ${thumbBorderRadius}px;
            background-color: ${thumbColor};
        }

        #output>input[type="checkbox"]:checked::after{
            transform: translate(${trackWidth + 2 * trackBorderWidth - thumbWidth - 2 * thumbBorderWidth - thumbOffset}px, -50%);
        }

        #output>input[type="checkbox"]:disabled{
            filter: grayscale(100%);
        }
        
        @media (hover: hover) {
            #output>input[type="checkbox"]:not([disabled]):hover::before{
                cursor: pointer;
            }
            
            #output>input[type="checkbox"]:not([disabled]):hover::after{
                background-color: ${thumbHoverColor};
                cursor: pointer;
            }
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
    trackActiveColorInput.value = randColor();
    thumbWidthInput.value = randInt(thumbWidthInput.min, thumbWidthInput.max);
    thumbHeightInput.value = randInt(thumbHeightInput.min, thumbHeightInput.max);
    thumbBorderWidthInput.value = randInt(thumbBorderWidthInput.min, thumbBorderWidthInput.max);
    thumbOffsetInput.value = randInt(thumbOffsetInput.min, thumbOffsetInput.max);
    thumbBorderRadiusInput.value = randInt(thumbBorderRadiusInput.min, thumbBorderRadiusInput.max);
    thumbColorInput.value = randColor();
    thumbBorderColorInput.value = randColor();
    thumbHoverColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^        /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
