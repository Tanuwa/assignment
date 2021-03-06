//Parsing JSON
//03 AUGUST 2015 on JavaScript, Warmup, Programming Principles, Problem Solving
//This exercise should help demonstrate how much nicer Angular (and jQuery, for that matter) makes AJAX requests. To demonstrate this, you must do the following in vanilla (plain) JavaScript.
//
//Write a Javascript function called parsePokemon.
//
//Use http://api.vschool.io:6543/pokemon.json as your url for your XHR request to get the big list of pokemon.
//
//The function should parse the JSON and create an array of objects that look like this:
//
//{
//    name: 'Charmander',
//    resource_uri: 'api/v1/pokemon/8/'
//},
//{(Another pokemon object)},
//{(Another pokemon object)},
//{(Another pokemon object)},
//...
//etc.  
//Then make each Pokemon's name show up on a separate line in an HTML document. This means you won't be using node.js to run this JavaScript.
//
//Hints
//You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
//You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the W3Schools JSON Howto for more information and examples.
//The data that comes from the url endpoint above is complex. Notice that the "objects" property is an array, so you'll need to index into it's 1st item in order to get any of the pokemon names (data.objects[0]...);
//You'll need to use pure JavaScript to create and add an element to your HTML.parsePokemon

var pockemonData;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function parsePokemon() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        //            document.getElementById("pockName").innerText=
        pockemonData = data.objects[0].pokemon;
        for(let i = 0; i < pockemonData.length; i++){
            var node = document.createElement("li");
        var textNode = document.createTextNode(pockemonData[i].name);
        node.appendChild(textNode);
        document.getElementById("pockName").appendChild(node);
        }
        


    }
}


xhr.open("GET", "http://api.vschool.io:6543/pokemon.json");
xhr.send();
