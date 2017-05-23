var dictionary = ["a", "b", "c"];

function isWordInDictionary(word, dictionary) {
    var val = false;
    dictionary.forEach(function (currentlyWorld) {
        if (word === currentlyWorld) {
            val = true;
        }

    })
    return val;
}
console.log(isWordInDictionary("d", dictionary));
