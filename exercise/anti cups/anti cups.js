var antiCaps = function(letters){
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toLowerCase()){
            newLetters += letters[i].toUpperCase();
            //console.log(newLetters);
        }else {
            newLetters += letters[i].toLowerCase();
            //console.log(newLetters);
        }
    }
    console.log(newLetters);
}
antiCaps("Hello");
antiCaps("racEcar");
antiCaps("bAnAnA");



var ask = require("readline-sync");
var input = ask.question("Please input the string you would like reversed\n");
var array = input.split("");
var finished = "";
var reversed = array.forEach(function (letter) {
    if (letter.charCodeAt() > "a".charCodeAt() && letter.charCodeAt() < "z".charCodeAt()) {
        finished += letter.toUpperCase();
    } else {
        finished += letter.toLowerCase();
    }
})

var reversed = array.map(function (letter) {
    if (letter.charCodeAt() > "a".charCodeAt() && letter.charCodeAt() < "z".charCodeAt()) {
        return letter.toUpperCase();
    } else {
        return letter.toLowerCase();
    }
})

console.log(finished);
console.log(reversed.join(""));