document.getElementById("djsquare").addEventListener("mouseover", mouseOver);
document.getElementById("djsquare").addEventListener("mousedown", mouseDown);
document.addEventListener("wheel", myWheel);
document.getElementById("djsquare").addEventListener("mouseup", mouseUp);
document.getElementById("djsquare").addEventListener("dblclick", mousedbClick);

document.addEventListener("keypress", dealWithKeyboard, false);

function mouseOver() {
    document.getElementById("djsquare").style.backgroundColor = "blue";
}

function mouseDown() {
    document.getElementById("djsquare").style.backgroundColor = "red";
}

function myWheel() {
    document.getElementById("djsquare").style.backgroundColor = "orange";
}
function mouseUp(){
    document.getElementById("djsquare").style.backgroundColor = "yellow";
}
function mousedbClick(){
    document.getElementById("djsquare").style.backgroundColor = "green";
}

function dealWithKeyboard(e){
    if(e.keyCode === 111){
        document.getElementById("djsquare").style.backgroundColor = "orange";
    }
    else if (e.keyCode === 114){
        document.getElementById("djsquare").style.backgroundColor = "red";
    }
     else if (e.keyCode === 98){
        document.getElementById("djsquare").style.backgroundColor = "blue";
    }
    
     else if (e.keyCode === 121){
        document.getElementById("djsquare").style.backgroundColor = "yellow";
    }
     else if (e.keyCode === 103){
        document.getElementById("djsquare").style.backgroundColor = "green";
    }
     else {
        document.getElementById("djsquare").style.backgroundColor = "white";
    }
}