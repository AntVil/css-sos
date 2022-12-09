let checkboxSizeInput;
let checkboxBorderWidthInput;
let checkboxBorderRadiusInput;
let checkboxColorInput;
let checkboxBorderColorInput;
let checkIconCheckInput;
let checkIconCrossInput;
let checkSizeInput;
let checkWidthInput;
let checkColorInput;
let checkHoverColorInput;

setup = () => {
    checkboxSizeInput = document.getElementById("checkboxSize");
    checkboxBorderWidthInput = document.getElementById("checkboxBorderWidth");
    checkboxBorderRadiusInput = document.getElementById("checkboxBorderRadius");
    checkboxColorInput = document.getElementById("checkboxColor");
    checkboxBorderColorInput = document.getElementById("checkboxBorderColor");
    checkIconCheckInput = document.getElementById("checkIconCheck");
    checkIconCrossInput = document.getElementById("checkIconCross");
    checkSizeInput = document.getElementById("checkSize");
    checkWidthInput = document.getElementById("checkWidth");
    checkColorInput = document.getElementById("checkColor");
    checkHoverColorInput = document.getElementById("checkHoverColor");
    
    random();
}

update = () => {
    let checkboxSize = parseFloat(checkboxSizeInput.value);
    let checkboxBorderWidth = parseFloat(checkboxBorderWidthInput.value);
    let checkboxBorderRadius = parseFloat(checkboxBorderRadiusInput.value);
    let checkboxColor = checkboxColorInput.value;
    let checkboxBorderColor = checkboxBorderColorInput.value;
    let checkIconCheck = checkIconCheckInput.checked;
    let checkIconCross = checkIconCrossInput.checked;
    let checkSize = parseFloat(checkSizeInput.value);
    let checkWidth = parseFloat(checkWidthInput.value);
    let checkColor = checkColorInput.value;
    let checkHoverColor = checkHoverColorInput.value;
    
    let imgUrl;
    if(checkIconCheck){
        imgUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='9' x2='3.5' y1='18' y2='12.5' stroke='%23000' stroke-width='${checkWidth}' stroke-linecap='round'/%3E%3Cline x1='20.5' x2='9' y1='6.5' y2='18' stroke='%23000' stroke-width='${checkWidth}' stroke-linecap='round'/%3E%3C/svg%3E")`;
    }else if(checkIconCross){
        imgUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='4' x2='20' y1='4' y2='20' stroke='%23000' stroke-width='${checkWidth}' stroke-linecap='round'/%3E%3Cline x1='4' x2='20' y1='20' y2='4' stroke='%23000' stroke-width='${checkWidth}' stroke-linecap='round'/%3E%3C/svg%3E")`;
    }

    return `
        #output>input[type="checkbox"]{
            appearance: none;
            width: ${checkboxSize + checkboxBorderWidth}px;
            height: ${checkboxSize + checkboxBorderWidth}px;
        }

        #output>input[type="checkbox"]::before{
            position: absolute;
            content: "";
            display: block;
            width: ${checkboxSize}px;
            height: ${checkboxSize}px;
            border: ${checkboxBorderWidth}px solid ${checkboxBorderColor};
            border-radius: ${checkboxBorderRadius}px;
            background-color: ${checkboxColor};
        }

        #output>input[type="checkbox"]::after{
            position: absolute;
            content: "";
            display: block;
            width: ${checkboxSize}px;
            height: ${checkboxSize}px;
        }

        #output>input[type="checkbox"]:checked::after{
            background-color: ${checkColor};
            -webkit-mask-image: ${imgUrl};
            mask-image: ${imgUrl};
            -webkit-mask-size: ${checkSize}px;
            mask-size: ${checkSize}px;
            -webkit-mask-position: center center;
            mask-position: center center;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            background-blend-mode: overlay;
            padding: 0;
            border: ${checkboxBorderWidth}px solid transparent;
        }

        #output>input[type="checkbox"]:disabled{
            filter: grayscale(100%);
        }

        @media (hover: hover) {
            #output>input[type="checkbox"]:not([disabled]):checked:hover::after{
                background-color: ${checkHoverColor};
                cursor: pointer;
            }
        }
    `;
}

random = () => {
    checkboxSizeInput.value = randInt(checkboxSizeInput.min, checkboxSizeInput.max);
    checkboxBorderWidthInput.value = randInt(checkboxBorderWidthInput.min, checkboxBorderWidthInput.max);
    checkboxBorderRadiusInput.value = randInt(checkboxBorderRadiusInput.min, checkboxBorderRadiusInput.max);
    checkboxColorInput.value = randColor();
    checkboxBorderColorInput.value = randColor();
    [checkIconCheck, checkIconCross][randInt(0, 2)].checked = true;
    checkSizeInput.value = randInt(checkSizeInput.min, checkSizeInput.max);
    checkWidthInput.value = randInt(checkWidthInput.min, checkWidthInput.max);
    checkColorInput.value = randColor();
    checkHoverColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll(/^        /g, "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
