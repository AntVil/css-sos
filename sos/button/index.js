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
let infoLocationTopInput;
let infoLocationRightInput;
let infoLocationBottomInput;
let infoLocationLeftInput;
let infoTextInput;
let infoTimespanInput;
let infoWidthInput;
let infoHeightInput;
let infoArrowLengthInput;
let infoArrowSizeInput;
let infoColorInput;
let infoFontColorInput;

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
    infoLocationTopInput = document.getElementById("infoLocationTop");
    infoLocationRightInput = document.getElementById("infoLocationRight");
    infoLocationBottomInput = document.getElementById("infoLocationBottom");
    infoLocationLeftInput = document.getElementById("infoLocationLeft");
    infoTextInput = document.getElementById("infoText");
    infoTimespanInput = document.getElementById("infoTimespan");
    infoWidthInput = document.getElementById("infoWidth");
    infoHeightInput = document.getElementById("infoHeight");
    infoArrowLengthInput = document.getElementById("infoArrowLength");
    infoArrowSizeInput = document.getElementById("infoArrowSize");
    infoColorInput = document.getElementById("infoColor");
    infoFontColorInput = document.getElementById("infoFontColor");

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
    let info = infoInput.checked;
    let infoTriggerHover = infoTriggerHoverInput.checked;
    let infoTriggerClicked = infoTriggerClickedInput.checked;
    let infoLocationTop = infoLocationTopInput.checked;
    let infoLocationRight = infoLocationRightInput.checked;
    let infoLocationBottom = infoLocationBottomInput.checked;
    let infoLocationLeft = infoLocationLeftInput.checked;
    let infoText = infoTextInput.value;
    let infoTimespan = parseFloat(infoTimespanInput.value);
    let infoWidth = parseFloat(infoWidthInput.value);
    let infoHeight = parseFloat(infoHeightInput.value);
    let infoArrowLength = parseFloat(infoArrowLengthInput.value);
    let infoArrowSize = parseFloat(infoArrowSizeInput.value);
    let infoColor = infoColorInput.value;
    let infoFontColor = infoFontColorInput.value;

    let infoTop;
    let infoActiveTop
    let infoActiveArrowTop
    let infoLeft;
    let infoActiveLeft;
    let infoActiveArrowLeft;
    let infoArrowWidth;
    let infoArrowHeight;
    let infoTransform;
    let imgUrl;
    if(infoLocationTop){
        infoTop = "100%";
        infoActiveTop = `${-(infoArrowLength + buttonBorderWidth)}px`;
        infoActiveArrowTop = `${-(buttonBorderWidth + 1)}px`;
        infoLeft = "50%";
        infoActiveLeft = `50%`;
        infoActiveArrowLeft = `50%`;
        infoArrowWidth = `${infoArrowSize}px`;
        infoArrowHeight = `${infoArrowLength}px`;
        infoTransform = "translate(-50%, -100%)";
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${infoArrowSize} ${infoArrowLength}'%3E%3Cpath d='M0 0L${infoArrowSize} 0L${infoArrowSize / 2} ${infoArrowLength}'/%3E%3C/svg%3E")`;
    }else if(infoLocationRight){
        infoTop = "50%";
        infoActiveTop = `50%`;
        infoActiveArrowTop = `50%`;
        infoLeft = "-100%";
        infoActiveLeft = `calc(100% + ${infoArrowLength + buttonBorderWidth}px)`;
        infoActiveArrowLeft = `calc(100% + ${buttonBorderWidth + 1}px)`;
        infoArrowWidth = `${infoArrowLength}px`;
        infoArrowHeight = `${infoArrowSize}px`;
        infoTransform = "translate(0, -50%)";
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${infoArrowLength} ${infoArrowSize}'%3E%3Cpath d='M${infoArrowLength} 0L0 ${infoArrowSize / 2}L${infoArrowLength} ${infoArrowSize}'/%3E%3C/svg%3E")`;
    }else if(infoLocationBottom){
        infoTop = "-100%";
        infoActiveTop = `calc(100% + ${infoArrowLength + buttonBorderWidth}px)`;
        infoActiveArrowTop = `calc(100% + ${buttonBorderWidth + 1}px)`;
        infoLeft = "50%";
        infoActiveLeft = `50%`;
        infoActiveArrowLeft = `50%`;
        infoArrowWidth = `${infoArrowSize}px`;
        infoArrowHeight = `${infoArrowLength}px`;
        infoTransform = "translate(-50%, 0)";
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${infoArrowSize} ${infoArrowLength}'%3E%3Cpath d='M0 ${infoArrowLength}L${infoArrowSize} ${infoArrowLength}L${infoArrowSize / 2} 0'/%3E%3C/svg%3E")`;
    }else if(infoLocationLeft){
        infoTop = "50%";
        infoActiveTop = `50%`;
        infoActiveArrowTop = `50%`;
        infoLeft = "100%";
        infoActiveLeft = `${-(infoArrowLength + buttonBorderWidth)}px`;
        infoActiveArrowLeft = `${-(buttonBorderWidth + 1)}px`;
        infoArrowWidth = `${infoArrowLength}px`;
        infoArrowHeight = `${infoArrowSize}px`;
        infoTransform = "translate(-100%, -50%)";
        imgUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${infoArrowLength} ${infoArrowSize}'%3E%3Cpath d='M0 0L${infoArrowLength} ${infoArrowSize / 2}L0 ${infoArrowSize}'/%3E%3C/svg%3E")`;
    }
    
    if(!info){
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

            #output>button:disabled{
                filter: grayscale(100%);
            }

            @media (hover: hover) {
                #output>button:not([disabled]):hover{
                    background-color: ${buttonHoverColor};
                    cursor: pointer;
                }
            }
        `;
    }else if(infoTriggerHover){
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
                left: ${infoLeft};
                top: ${infoTop};
                width: ${infoArrowWidth};
                height: ${infoArrowHeight};
                transform: ${infoTransform};
                transition: 0s ${infoTimespan}s;
                background-color: ${infoColor};
                -webkit-mask-image: ${imgUrl};
                mask-image: ${imgUrl};
                -webkit-mask-size: ${infoArrowWidth} ${infoArrowHeight};
                mask-size: ${infoArrowWidth} ${infoArrowHeight};
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                background-blend-mode: overlay;
                z-index: 1;
            }
            
            #output>button:not([disabled]):active::before{
                opacity: 1;
                top: ${infoActiveArrowTop};
                left: ${infoActiveArrowLeft};
                transition: 0s;
            }

            #output>button::after{
                content: "${infoText}";
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                position: absolute;
                left: ${infoLeft};
                top: ${infoTop};
                width: 0;
                height: 0;
                transform: ${infoTransform};
                transition: 0s ${infoTimespan}s;
                text-align: center;
                border-radius: 5px;
                background-color: ${infoColor};
                padding: 0;
                z-index: 1;
                color: ${infoFontColor};
            }

            #output>button:not([disabled]):active::after{
                opacity: 1;
                top: ${infoActiveTop};
                left: ${infoActiveLeft};
                transition: 0s;
                width: ${infoWidth}px;
                height: ${infoHeight}px;
                padding: 5px;
            }

            #output>button:disabled{
                filter: grayscale(100%);
            }

            @media (hover: hover) {
                #output>button:not([disabled]):hover{
                    background-color: ${buttonHoverColor};
                    cursor: pointer;
                }
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
                top: ${infoTop};
                left: ${infoLeft};
                width: ${infoArrowWidth};
                height: ${infoArrowHeight};
                transform: ${infoTransform};
                transition: 0s ${infoTimespan}s;
                background-color: ${infoColor};
                -webkit-mask-image: ${imgUrl};
                mask-image: ${imgUrl};
                -webkit-mask-size: ${infoArrowWidth} ${infoArrowHeight};
                mask-size: ${infoArrowWidth} ${infoArrowHeight};
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                background-blend-mode: overlay;
                z-index: 1;
            }
            
            #output>button:hover::before{
                opacity: 1;
                top: ${infoActiveArrowTop};
                left: ${infoActiveArrowLeft};
                transition: 0s;
            }

            #output>button::after{
                content: "${infoText}";
                display: flex;
                justify-content: center;
                align-items: center;
                opacity: 0;
                position: absolute;
                top: ${infoTop};
                left: ${infoLeft};
                width: 0;
                height: 0;
                transform: ${infoTransform};
                transition: 0s ${infoTimespan}s;
                text-align: center;
                border-radius: 5px;
                background-color: ${infoColor};
                padding: 0;
                z-index: 1;
                color: ${infoFontColor};
            }

            #output>button:hover::after{
                opacity: 1;
                top: ${infoActiveTop};
                left: ${infoActiveLeft};
                transition: 0s;
                width: ${infoWidth}px;
                height: ${infoHeight}px;
                padding: 5px;
            }

            #output>button:disabled{
                filter: grayscale(100%);
            }

            @media (hover: hover) {
                #output>button:not([disabled]):hover{
                    background-color: ${buttonHoverColor};
                    cursor: pointer;
                }
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
    infoInput.checked = randBool();
    [infoTriggerHoverInput, infoTriggerClickedInput][randInt(0, 2)].checked = true;
    [infoLocationTopInput, infoLocationRightInput, infoLocationBottomInput, infoLocationLeftInput][randInt(0, 4)].checked = true;
    infoTextInput.value = "info text";
    infoTimespanInput.value = randFloat(infoTimespanInput.min, infoTimespanInput.max);
    infoWidthInput.value = randInt(infoWidthInput.min, infoWidthInput.max);
    infoHeightInput.value = randInt(infoHeightInput.min, infoHeightInput.max);
    infoArrowLengthInput.value = randInt(infoArrowLengthInput.min, infoArrowLengthInput.max);
    infoArrowSizeInput.value = randInt(infoArrowSizeInput.min, infoArrowSizeInput.max);
    infoColorInput.value = randColor();
    infoFontColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^            /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
