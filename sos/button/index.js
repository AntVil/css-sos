let buttonWidthInput;
let buttonHeightInput;
let buttonBorderWidthInput;
let buttonBorderRadiusInput;
let buttonColorInput;
let buttonBorderColorInput;
let buttonFontColorInput;
let buttonHoverColorInput;
let infoInput;
let infoTriggerHoverInput;
let infoTriggerClickedInput;
let infoLocationInput;
let infoTextInput;
let infoTimespanInput;
let infoWidthInput;
let infoHeightInput;
let infoArrowLengthInput;
let infoArrowSizeInput;

setup = () => {
    buttonWidthInput = document.getElementById("buttonWidth");
    buttonHeightInput = document.getElementById("buttonHeight");
    buttonBorderWidthInput = document.getElementById("buttonBorderWidth");
    buttonBorderRadiusInput = document.getElementById("buttonBorderRadius");
    buttonColorInput = document.getElementById("buttonColor");
    buttonBorderColorInput = document.getElementById("buttonBorderColor");
    buttonFontColorInput = document.getElementById("buttonFontColor");
    buttonHoverColorInput = document.getElementById("buttonHoverColor");
    infoInput = document.getElementById("info");
    infoTriggerHoverInput = document.getElementById("infoTriggerHover");
    infoTriggerClickedInput = document.getElementById("infoTriggerClicked");
    infoLocationInput = document.getElementById("infoLocation");
    infoTextInput = document.getElementById("infoText");
    infoTimespanInput = document.getElementById("infoTimespan");
    infoWidthInput = document.getElementById("infoWidth");
    infoHeightInput = document.getElementById("infoHeight");
    infoArrowLengthInput = document.getElementById("infoArrowLength");
    infoArrowSizeInput = document.getElementById("infoArrowSize");

    random();
}

update = () => {
    let buttonWidth = parseFloat(buttonWidthInput.value);
    let buttonHeight = parseFloat(buttonHeightInput.value);
    let buttonBorderWidth = parseFloat(buttonBorderWidthInput.value);
    let buttonBorderRadius = parseFloat(buttonBorderRadiusInput.value);
    let buttonColor = buttonColorInput.value;
    let buttonBorderColor = buttonBorderColorInput.value;
    let buttonFontColor = buttonFontColorInput.value;
    let buttonHoverColor = buttonHoverColorInput.value;
    let info = parseFloat(infoInput.value);
    let infoTriggerHover = infoTriggerHoverInput.checked;
    let infoTriggerClicked = infoTriggerClickedInput.checked;
    let infoLocation = parseFloat(infoLocationInput.value);
    let infoText = infoTextInput.value;
    let infoTimespan = parseFloat(infoTimespanInput.value);
    let infoWidth = parseFloat(infoWidthInput.value);
    let infoHeight = parseFloat(infoHeightInput.value);
    let infoArrowLength = parseFloat(infoArrowLengthInput.value);
    let infoArrowSize = parseFloat(infoArrowSizeInput.value);
    
    if(infoTriggerHover){
        return `
            #output>button{
                position: relative;
                width: ${buttonWidth + 2 * buttonBorderWidth}px;
                height: ${buttonHeight + 2 * buttonBorderWidth}px;
                border: ${buttonBorderWidth}px solid ${buttonBorderColor};
                border-radius: ${buttonBorderRadius}px;
                background-color: ${buttonColor};
                color: ${buttonFontColor};
            }

            #output>button::before{
                content: "";
                opacity: 0;
                position: absolute;
                top: 0;
                width: ${infoArrowSize};
                height: ${infoArrowLength};
                transition: 0s 1s;

                background-color: ${0};
                -webkit-mask-image: ${0};
                mask-image: ${0};
                -webkit-mask-size: ${0}px;
                mask-size: ${0}px;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                background-blend-mode: overlay;
            }
            
            #output>button:not([disabled]):active::before{
                opacity: 1;
                left: 50%;
                transform: translate(-50%, -100%);
                border-top: ${infoArrowLength + 1}px solid var(--theme-color-3);
                transition: 0s;
            }

            #output>button::after{
                content: "${infoText}";
                opacity: 0;
                position: absolute;
                top: 0;
                left: 50%;
                width: ${infoWidth}px;
                height: ${infoHeight}px;
                transition: 0s 1s;
                text-align: center;
                border-radius: 5px;
            }

            #output>button:not([disabled]):active::after{
                opacity: 1;
                top: ${-(infoArrowLength + buttonBorderWidth)}px;
                
                transform: translate(-50%, -100%);
                background-color: var(--theme-color-3);
                padding: 5px;
                transition: 0s;
            }

            #output>button:disabled{
                filter: grayscale(100%);
            }
        `;
    }else if(infoTriggerClicked){
        return `
            #output>button{
                position: relative;
                width: ${buttonWidth + 2 * buttonBorderWidth}px;
                height: ${buttonHeight + 2 * buttonBorderWidth}px;
                border: ${buttonBorderWidth}px solid ${buttonBorderColor};
                border-radius: ${buttonBorderRadius}px;
                background-color: ${buttonColor};
                color: ${buttonFontColor};
            }

            #output>button::before{
                content: "";
                opacity: 0;
                position: absolute;
                top: 0;
                width: ${infoArrowSize};
                height: ${infoArrowLength};
                transition: 0s 1s;

                background-color: ${0};
                -webkit-mask-image: ${0};
                mask-image: ${0};
                -webkit-mask-size: ${0}px;
                mask-size: ${0}px;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                background-blend-mode: overlay;
            }
            
            #output>button:hover::before{
                opacity: 1;
                left: 50%;
                transform: translate(-50%, -100%);
                border-top: ${infoArrowLength + 1}px solid var(--theme-color-3);
                transition: 0s;
            }

            #output>button::after{
                content: "${infoText}";
                opacity: 0;
                position: absolute;
                top: 0;
                left: 50%;
                width: ${infoWidth}px;
                height: ${infoHeight}px;
                transition: 0s 1s;
                text-align: center;
                border-radius: 5px;
            }

            #output>button:hover::after{
                opacity: 1;
                top: ${-(infoArrowLength + buttonBorderWidth)}px;
                
                transform: translate(-50%, -100%);
                background-color: var(--theme-color-3);
                padding: 5px;
                transition: 0s;
            }

            #output>button:disabled{
                filter: grayscale(100%);
            }
        `;
    }
}

random = () => {
    buttonWidthInput.value = randInt(buttonWidthInput.min, buttonWidthInput.max);
    buttonHeightInput.value = randInt(buttonHeightInput.min, buttonHeightInput.max);
    buttonBorderWidthInput.value = randInt(buttonBorderWidthInput.min, buttonBorderWidthInput.max);
    buttonBorderRadiusInput.value = randInt(buttonBorderRadiusInput.min, buttonBorderRadiusInput.max);
    buttonColorInput.value = randColor();
    buttonBorderColorInput.value = randColor();
    buttonFontColorInput.value = randColor();
    buttonHoverColorInput.value = randColor();
    infoInput.value = randInt(infoInput.min, infoInput.max);
    [infoTriggerHoverInput, infoTriggerClickedInput][randInt(0, 2)].checked = true;
    infoLocationInput.value = randInt(infoLocationInput.min, infoLocationInput.max);
    infoTextInput.value = "info text";
    infoTimespanInput.value = randInt(infoTimespanInput.min, infoTimespanInput.max);
    infoWidthInput.value = randInt(infoWidthInput.min, infoWidthInput.max);
    infoHeightInput.value = randInt(infoHeightInput.min, infoHeightInput.max);
    infoArrowLengthInput.value = randInt(infoArrowLengthInput.min, infoArrowLengthInput.max);
    infoArrowSizeInput.value = randInt(infoArrowSizeInput.min, infoArrowSizeInput.max);
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^            /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
