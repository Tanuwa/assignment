//Write a function that takes a string input (which contains either spaces, underscores, or hyphens/dashes between words, but no combination of the two) and turn it into the camelCase version of that string.


function camelCase() {


    for (var i = 0; i < camelCase.length; i++) {
        var cap = false;
        str = str.toLocaleLowerCase();
        if (str[i] === "_" ||
            str[i] === "" ||
            str[i] === "-"); {
            var nextLetter = str[i + 1]

            var upperCaseLetter = nextLetter.toLocaleUpperCase();


            str = str.replace(nextLetter, upperCaseLetter);
            str = str.replace('', "");
            str = str.replace('', "");
            str = str.replace('', "");



            console.log();
        }

    }

}

camelCase("hello_world");






another exm.
function camelCase(string) {
    let underscore = "_",
        hyphen = "-",
        space = " ";
    let newString = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] === underscore ||
            string[i] === hyphen ||
            string[i] === space) {
            let char = string[i + 1];
            newString += char.toUpperCase();
            i++;
        } else {
            newString += string[i];
        };
    };
    console.log(newString);
    return;
}
camelCase("free bird_sucks-yep-oh_so-much");
