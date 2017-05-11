function Party(name) {
    this.population = population;
    this.name = name;
    this.alive = function () {
        return this.population > 0;
    }
}
var penguins = new Party('penguins', 1000000);
var communists = new Party("communists", 1000000);

//A random algorithm will be used to determine if the attack is a miss or a hit before sendNuke
while (penguins.alive() && communists.alive()) {

    if (random < .5) {
        sendNuke(penguins, onHit, onMiss)
    } else {
        sendNuke(communists, onHit, onMiss)
    }
}




function sendNuke(party, hit, miss) {
    var hitOrMiss = (Math.floor((Math.random() * 2)) + 1);
    if (hitOrMiss === 1) {
        hit(party)
    } else {
        miss(party)
    }
}
//var  = new person("");
//var  = new person("");

//THE GAME WILL END either a while loop that check if the population of one party is === 0 OR interval timer and clearInterval



//randomize damage amount and set that to a variable
//then take that variable and subtract the population
//console.log a hit was made 
//then call the other party to attack

function onHit(party) {
    //party population. - random number
}


//consolelog a miss statment
//then call the other party to attack
function onMiss(party) {
    //console they missed
}




function chooseFirst() {
    var chance = (Math.floor((Math.random() * 2)) + 1);
    if (chance === 1) {
        console.log("You attack first" + chance);
        sendNuke(communists, onHit, onMiss);
    } else {
        console.log("You attack second" + chance);
        sendNuke(penguins, onHit, onMiss);
    }
}

chooseFirst();



ranAway = true;;
//            
//giveMarcus(glasses);
//            
//function giveMarcus(glasses){
//    return glasses = phone
//}
//
