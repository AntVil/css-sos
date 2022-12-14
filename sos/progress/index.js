let trackWidthInput;
let trackHeightInput;
let trackBorderWidthInput;
let trackBorderRadiusInput;
let trackColorInput;
let trackBorderColorInput;
let thumbVisibleInput;
let thumbWidthInput;
let thumbHeightInput;
let thumbBorderWidthInput;
let thumbBorderRadiusInput;
let thumbColorInput;
let thumbBorderColorInput;
let thumbHoverColorInput;
let progressColorInput;
let progressHoverColorInput;

setup = () => {
    trackWidthInput = document.getElementById("trackWidth");
    trackHeightInput = document.getElementById("trackHeight");
    trackBorderWidthInput = document.getElementById("trackBorderWidth");
    trackBorderRadiusInput = document.getElementById("trackBorderRadius");
    trackColorInput = document.getElementById("trackColor");
    trackBorderColorInput = document.getElementById("trackBorderColor");
    thumbVisibleInput = document.getElementById("thumbVisible");
    thumbWidthInput = document.getElementById("thumbWidth");
    thumbHeightInput = document.getElementById("thumbHeight");
    thumbBorderWidthInput = document.getElementById("thumbBorderWidth");
    thumbBorderRadiusInput = document.getElementById("thumbBorderRadius");
    thumbColorInput = document.getElementById("thumbColor");
    thumbBorderColorInput = document.getElementById("thumbBorderColor");
    thumbHoverColorInput = document.getElementById("thumbHoverColor");
    progressColorInput = document.getElementById("progressColor");
    progressHoverColorInput = document.getElementById("progressHoverColor");

    random();
}

update = () => {
    let trackWidth = parseFloat(trackWidthInput.value);
    let trackHeight = parseFloat(trackHeightInput.value);
    let trackBorderWidth = parseFloat(trackBorderWidthInput.value);
    let trackBorderRadius = parseFloat(trackBorderRadiusInput.value);
    let trackColor = trackColorInput.value;
    let trackBorderColor = trackBorderColorInput.value;
    let thumbVisible = thumbVisibleInput.checked;
    let thumbWidth = parseFloat(thumbWidthInput.value);
    let thumbHeight = parseFloat(thumbHeightInput.value);
    let thumbBorderWidth = parseFloat(thumbBorderWidthInput.value);
    let thumbBorderRadius = parseFloat(thumbBorderRadiusInput.value);
    let thumbColor = thumbColorInput.value;
    let thumbBorderColor = thumbBorderColorInput.value;
    let thumbHoverColor = thumbHoverColorInput.value;
    let progressColor = progressColorInput.value;
    let progressHoverColor = progressHoverColorInput.value;

    if(!thumbVisible){
        return `
            #output>input[type="range"]{
                appearance: none;
                position: relative;
                width: ${trackWidth + 2 * trackBorderWidth}px;
                height: ${Math.max(trackHeight + 2 * trackBorderWidth, thumbHeight + 2 * thumbBorderWidth)}px;
                background-color: transparent;
                background: transparent;
                overflow-x: hidden;
            }
            
            #output>input[type="range"]::-webkit-slider-runnable-track{
                height: ${trackHeight + 2 * trackBorderWidth}px;
                border-width: ${trackBorderWidth}px;
                border-style: solid;
                border-radius: ${trackBorderRadius}px;
                background-color: ${trackColor};
                border-color: ${trackBorderColor};
                z-index: 1;
                overflow-x: hidden;
            }
            
            #output>input[type="range"]::-webkit-slider-thumb{
                appearance: none;
                width: 0;
                height: ${trackHeight}px;
                margin-top: 0;
                border-width: 0;
                border-style: solid;
                border-radius: ${thumbBorderRadius}px;
                background-color: ${thumbColor};
                border-color: ${thumbBorderColor};
                box-shadow: -100vw 0 0 100vw ${progressColor};
                clip-path: polygon(1px 0, 100% 0, 100% 100%, 1px 100%, 1px calc(50% + ${trackHeight / 2}px), -100vw calc(50% + ${trackHeight / 2}px), -100vw calc(50% - ${trackHeight / 2}px), 0 calc(50% - ${trackHeight / 2}px));
                z-index: 1;
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
                width: 0;
                height: ${thumbHeight}px;
                border-width: 0;
                border-style: solid;
                border-radius: ${thumbBorderRadius}px;
                background-color: ${thumbColor};
                border-color: ${thumbBorderColor};
            }

            #output>input[type="range"]::-moz-range-progress{
                height: ${trackHeight}px;
                border-top-left-radius: ${trackBorderRadius}px;
                border-bottom-left-radius: ${trackBorderRadius}px;
                background-color: ${progressColor};
            }

            #output>input[type="range"]:disabled{
                filter: grayscale(100%);
            }
        
            @media (hover: hover) {
                #output>input[type="range"]:not([disabled]){
                    cursor: pointer;
                }
                
                #output>input[type="range"]:not([disabled]):hover::-webkit-slider-thumb{
                    background-color: ${thumbHoverColor};
                    box-shadow: -100vw 0 0 100vw ${progressHoverColor};
                }
                
                #output>input[type="range"]:not([disabled]):hover::-moz-range-thumb{
                    background-color: ${thumbHoverColor};
                }

                #output>input[type="range"]:not([disabled]):hover::-moz-range-progress{
                    background-color: ${progressHoverColor};
                }
            }
        `;
    }else if(thumbHeight + 2 * thumbBorderWidth <= trackHeight){
        return `
            #output>input[type="range"]{
                appearance: none;
                position: relative;
                width: ${trackWidth + 2 * trackBorderWidth}px;
                height: ${Math.max(trackHeight + 2 * trackBorderWidth, thumbHeight + 2 * thumbBorderWidth)}px;
                background-color: transparent;
                background: transparent;
                overflow-x: hidden;
            }
            
            #output>input[type="range"]::-webkit-slider-runnable-track{
                height: ${trackHeight + 2 * trackBorderWidth}px;
                border-width: ${trackBorderWidth}px;
                border-style: solid;
                border-radius: ${trackBorderRadius}px;
                background-color: ${trackColor};
                border-color: ${trackBorderColor};
                z-index: 1;
                overflow-x: hidden;
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
                box-shadow: calc(-100vw - ${thumbWidth + 2 * thumbBorderWidth}px) 0 0 100vw ${progressColor};
                clip-path: polygon(1px 0, 100% 0, 100% 100%, 1px 100%, 1px calc(50% + ${trackHeight / 2}px), -100vw calc(50% + ${trackHeight / 2}px), -100vw calc(50% - ${trackHeight / 2}px), 0 calc(50% - ${trackHeight / 2}px));
                z-index: 1;
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

            #output>input[type="range"]::-moz-range-progress{
                height: ${trackHeight}px;
                border-top-left-radius: ${trackBorderRadius}px;
                border-bottom-left-radius: ${trackBorderRadius}px;
                background-color: ${progressColor};
            }

            #output>input[type="range"]:disabled{
                filter: grayscale(100%);
            }
        
            @media (hover: hover) {
                #output>input[type="range"]:not([disabled]){
                    cursor: pointer;
                }
                
                #output>input[type="range"]:not([disabled]):hover::-webkit-slider-thumb{
                    background-color: ${thumbHoverColor};
                    box-shadow: calc(-100vw - ${thumbWidth + 2 * thumbBorderWidth}px) 0 0 100vw ${progressHoverColor};
                }
                
                #output>input[type="range"]:not([disabled]):hover::-moz-range-thumb{
                    background-color: ${thumbHoverColor};
                }

                #output>input[type="range"]:not([disabled]):hover::-moz-range-progress{
                    background-color: ${progressHoverColor};
                }
            }
        `;
    }else{
        return `
            #output>input[type="range"]{
                appearance: none;
                position: relative;
                width: ${trackWidth + 2 * trackBorderWidth}px;
                height: ${Math.max(trackHeight + 2 * trackBorderWidth, thumbHeight + 2 * thumbBorderWidth)}px;
                background-color: transparent;
                background: transparent;
                overflow-x: hidden;
            }

            #output>input[type="range"]::before{
                content: "";
                display: block;
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                width: 100%;
                height: ${trackHeight + 2 * trackBorderWidth}px;
                z-index: 0;
                box-sizing: border-box;
                border-width: ${trackBorderWidth}px;
                border-style: solid;
                border-radius: ${trackBorderRadius}px;
                background-color: transparent;
                border-color: ${trackBorderColor};
                clip-path: polygon(0 0, ${Math.max(trackBorderWidth, trackBorderRadius) + 1}px 0, ${Math.max(trackBorderWidth, trackBorderRadius) + 1}px 100%, 0 100%);
            }
            
            #output>input[type="range"]::-webkit-slider-runnable-track{
                height: ${trackHeight + 2 * trackBorderWidth}px;
                border-width: ${trackBorderWidth}px;
                border-style: solid;
                border-radius: ${trackBorderRadius}px;
                background-color: ${trackColor};
                border-color: ${trackBorderColor};
                clip-path: polygon(${trackBorderWidth}px -100vh, 100vw -100vh, 100vw 100vh, ${trackBorderWidth}px 100vh);
                z-index: 1;
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
                box-shadow: calc(-100vw - ${thumbWidth + 2 * thumbBorderWidth}px) 0 0 100vw ${progressColor};
                clip-path: polygon(1px 0, 100% 0, 100% 100%, 1px 100%, 1px calc(50% + ${trackHeight / 2}px), -100vw calc(50% + ${trackHeight / 2}px), -100vw calc(50% - ${trackHeight / 2}px), 0 calc(50% - ${trackHeight / 2}px));
                z-index: 1;
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

            #output>input[type="range"]::-moz-range-progress{
                height: ${trackHeight}px;
                border-top-left-radius: ${trackBorderRadius}px;
                border-bottom-left-radius: ${trackBorderRadius}px;
                background-color: ${progressColor};
            }

            #output>input[type="range"]:disabled{
                filter: grayscale(100%);
            }
        
            @media (hover: hover) {
                #output>input[type="range"]:not([disabled]){
                    cursor: pointer;
                }
                
                #output>input[type="range"]:not([disabled]):hover::-webkit-slider-thumb{
                    background-color: ${thumbHoverColor};
                    box-shadow: calc(-100vw - ${thumbWidth + 2 * thumbBorderWidth}px) 0 0 100vw ${progressHoverColor};
                }
                
                #output>input[type="range"]:not([disabled]):hover::-moz-range-thumb{
                    background-color: ${thumbHoverColor};
                }

                #output>input[type="range"]:not([disabled]):hover::-moz-range-progress{
                    background-color: ${progressHoverColor};
                }
            }
        `;
    }
}

random = () => {
    trackWidthInput.value = randInt(trackWidthInput.min, trackWidthInput.max);
    trackHeightInput.value = randInt(trackHeightInput.min, trackHeightInput.max);
    trackBorderWidthInput.value = randInt(trackBorderWidthInput.min, trackBorderWidthInput.max);
    trackBorderRadiusInput.value = randInt(trackBorderRadiusInput.min, trackBorderRadiusInput.max);
    trackColorInput.value = randColor();
    trackBorderColorInput.value = randColor();
    thumbVisibleInput.checked = randBool();
    thumbWidthInput.value = randInt(thumbWidthInput.min, thumbWidthInput.max);
    thumbHeightInput.value = randInt(thumbHeightInput.min, thumbHeightInput.max);
    thumbBorderWidthInput.value = randInt(thumbBorderWidthInput.min, thumbBorderWidthInput.max);
    thumbBorderRadiusInput.value = randInt(thumbBorderRadiusInput.min, thumbBorderRadiusInput.max);
    thumbColorInput.value = randColor();
    thumbBorderColorInput.value = randColor();
    thumbHoverColorInput.value = randColor();
    progressColorInput.value = randColor();
    progressHoverColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^                /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
