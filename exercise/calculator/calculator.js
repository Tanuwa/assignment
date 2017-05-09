var a, b, result;

function sum() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a + b;
    document.getElementById("results").innerHTML = result;
}

function sub() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a - b;
    document.getElementById("results").innerHTML = result;
}

function multiply() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a * b;
    document.getElementById("results").innerHTML = result;
}

function divide() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
    result = a / b;
    document.getElementById("results").innerHTML = result;
}

function reset() {
    a = Number(document.getElementById("a").value = "");
    b = Number(document.getElementById("b").value = "");