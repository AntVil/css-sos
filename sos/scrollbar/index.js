let trackStyleThinInput;
let trackStyleThickInput;
let trackColorInput;
let thumbColorInput;

setup = () => {
    trackStyleThinInput = document.getElementById("trackStyleThin");
    trackStyleThickInput = document.getElementById("trackStyleThick");
    trackColorInput = document.getElementById("trackColor");
    thumbColorInput = document.getElementById("thumbColor");

    random();
}


update = () => {
    let trackStyleThin = trackStyleThinInput.checked;
    let trackStyleThick = trackStyleThickInput.checked;
    let trackColor = trackColorInput.value;
    let thumbColor = thumbColorInput.value;
    
    if(trackStyleThin){
        return `
            .scroll{
                overflow-y: scroll;
                scrollbar-color: ${thumbColor} ${trackColor};
                scrollbar-width: thin;
            }

            .scroll::-webkit-scrollbar{
                background-color: ${trackColor};
                width: 8px;
            }

            .scroll::-webkit-scrollbar-thumb{
                background-color: ${thumbColor};
            }
        `;
    }else if(trackStyleThick){
        return `
            .scroll{
                overflow-y: scroll;
                scrollbar-color: ${thumbColor} ${trackColor};
                scrollbar-width: auto;
            }

            .scroll::-webkit-scrollbar{
                background-color: ${trackColor};
                width: 16px;
            }

            .scroll::-webkit-scrollbar-button:vertical:single-button:decrement{
                background-position: center center;
                background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 168 168' xml:space='preserve'%3E%3Cpolygon points='45,108 84,72 120,108 120,83 84,43 45,83'/%3E%3C/svg%3E");
            }
            
            .scroll::-webkit-scrollbar-button:vertical:single-button:increment{
                background-position: center center;
                background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 168 168' xml:space='preserve'%3E%3Cpolygon points='45,60 84,96 120,60 120,85 84,125 45,85'/%3E%3C/svg%3E");
            }

            .scroll::-webkit-scrollbar-thumb{
                background-color: ${thumbColor};
            }
        `;
    }
}

random = () => {
    [trackStyleThinInput, trackStyleThickInput][randInt(0, 2)].checked = true;
    trackColorInput.value = randColor();
    thumbColorInput.value = randColor();
}

clipboard = () => {
    let code = sos.innerHTML;
    code = code.replaceAll("        ", "").replaceAll("#output>", "");
    navigator.clipboard.writeText(code);
}
