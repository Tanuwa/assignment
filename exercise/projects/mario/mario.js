seralGoomba, totalbobOmb, totalcheepCheep;

var goombas = 5;

function myFunction1() {
    inputValue1 = document.getElementById('myinput').value;
    totalGoomba = goombas * inputValue1;
    document.getElementById("total1").innerHTML = totalGoomba;

}

var bobOmb = 7;

function myFunction2() {
    inputValue2 = document.getElementById('myinput2').value;
    totalbobOmb = bobOmb * inputValue2;
    document.getElementById("total2").innerHTML = bobOmb * inputValue2;
}


var cheepCheep = 11;

function myFunction3() {
    inputValue3 = document.getElementById('myinput3').value;
    totalcheepCheep = cheepCheep * inputValue3;
    document.getElementById("total3").innerHTML = cheepCheep * inputValue3;
}

function getTotal() {
    var totalTotal = totalbobOmb + totalcheepCheep + totalGoomba;
    document.getElementById("totalBox").innerHTML = "Total Is " + totalTotal + " Coins!!";
    
}
