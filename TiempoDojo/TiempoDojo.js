var cookieDiv = document.querySelector(".cookie-policy");

function loading(){
    alert("Cargando reporte del clima...")
}

function accept(){
    cookieDiv.remove();
}

function celfarh(temp){
    return Math.round(9 / 5 * (temp + 32));
}

function farhcel(temp){
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element){
    for(var i=1; i<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        
        if(element.value == "°C"){
            tempSpan.innerText = farhcel(tempVal);
        } else {
            tempSpan.innerText = celfarh(tempVal);
        }
    }
}