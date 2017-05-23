//Palindrome Finder
//31 MAY 2016 on Warmup
//Write a function that accepts a string as an argument and returns true if the string is a palindrome (the string is the same forward and backward), or false if it is not.
//
//A string is still considered a palindrome despite letter capitalization, spaces, or punctuation.
//
//E.g.:
//
//isPalindrome("Star Rats!");  // true  
//isPalindrome("palindrome");  // false  
//isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!");  // true


First exm.
// I want function to return true or false if the string is a palindrome
function isPalindrome(str) {
	str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (str[i] === "!" || str[i] === "," || str[i] === "?" || str[i] === " ") {
			//            console.log(str);
			str = str.replace(str[i], "");
			i--;
		}
	};
	for (var i = 0; i < Math.floor(str.length / 2); i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome("aba"));
console.log(isPalindrome("Star Rats!")); // true  
console.log(isPalindrome("palindrome")); // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));
``
`








Second exm.
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function isPalindrome(str) {
    str = str.toLowerCase();
    str = str.replaceAll("?", "");
    str = str.replaceAll("!", "");
    str = str.replaceAll(".", "");
    str = str.replaceAll(",", "");
    str = str.replaceAll(" ", "");

    console.log(str);

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;

}

console.log(isPalindrome("starrats")); // true  
console.log(isPalindrome("palindrome")); // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!")); // true
