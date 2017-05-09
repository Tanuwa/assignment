function CountCode(bigString){
    var smallString = "code";
    if (bigString.indexOf(smallString) > -1){
        var countTimes = bigString.split(smallString).length - 1;
        console.log("String appeared "+ countTimes);
        
        
        
        
        
    }
}
CountCode("codexxcode") ;
//eslu I can use regular expressions


another exm.
//var ask = require("readline-sync");
//var str = ask.question("What string would you like me to use?").toLowerCase();
//var result = 0;
//
//codeCount(str);
//
//function codeCount(str) {
//    for (var i = 0; i < str.length; i++) {
//        if (str[i] === "c" && str[(i + 1)] === "o" && str[(i + 3)] === "e") {
//            result += 1;
//        }
//    }
//}
//console.log("The word code appears " + result + " times.");
