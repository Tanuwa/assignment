function noDuplicates(input) {
    var notDups = "";
    var misfits = "";
    for (var i = 1; i < input.length; i++) {
        if (input[i] == input[i - 1]) {
            misfits += input[i - 1];
        } else {
            notDups += input[i - 1];
        }
    }
    console.log("NO Duplicate: " + notDups);
    console.log("My motha fkn missyFits: " + misfits);
}

noDuplicates("Harry Potter");
noDuplicates("This is a string with letters spaced differently")









/*function noDuplicates(input) {
    var notDups = "";
    for (var i = 0; i < input.length; i++) {
        if (input.lastIndexOf(input[i]) == input.indexOf(input[i])) {
            notDups += input[i];
        }
    }
    return notDups;
}

console.log(noDuplicates("Harry Potter"));




var removeSecondOccurrence = function (input) {
    for (var i = 0; i < input.length; i++)
        if (input[i] == input.charAt(i)) {
            console.log(input.remove)
        }
    results += string.charAt(i);
}

console.log(removeSecondOccurrence("Harry Potter"));




function noDuplicates(input) {
    var unique = '';
    for (var i = 0; i < input.length; i++) {
        if (unique.indexOf(input[i] < 0)) {
            unique += input[i];
            console.log(unique);
        }
    }
    return unique;
}

noDuplicates("Harry Potter");

console.log(input.replace(/(.)(?=.*\2)/g, ""));
//input
var input = 'bookkeeper larry';

// output
// No duplicates: 'bokeper lary'
// The Misfits: 'oker'*/
