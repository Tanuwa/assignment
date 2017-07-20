function Party(name, population) {
    this.population = population;
    this.name = name;
    this.alive = function () {
        return this.population > 0;
    }
}
var penguins = new Party('penguins', 1000000);
var communists = new Party("communists", 1000000);

//A random algorithm will be used to determine if the attack is a miss or a hit before sendNuke
//flip a coin fist time
var random = Math.random();
if (random < .5) {
    sendNuke(penguins, onHit, onMiss)
} else {
    sendNuke(communists, onHit, onMiss)
}





function sendNuke(party, onHit, onMiss) {
    var hitOrMiss = Math.floor(Math.random() * 2) + 1;
    if (hitOrMiss === 1) {
        onHit(party)
    } else {
        onMiss(party)
    }
}

function onHit(party) {
    //party population. - random number
    var randomDmg = Math.floor((Math.random() * 1000)) + 1000
    party.population = party.population - randomDmg;
    console.log(`${party.name} was hit, the population decreased, total population = ${party.population}`);
    if (!party.alive()) {
        console.log(`Sorry you party died`)
        return;
    } else {
        callAtack(party.name)

    }

}


//consolelog a miss statment
//then call the other party to attack
function onMiss(party) {
    //console they missed
    console.log(`${party.name} nuke missed and instead landed in the ocean`);
    callAtack(party.name)
}

function callAtack(name) {
    if (name === "communists") {
        sendNuke(penguins, onHit, onMiss)
    } else {
        sendNuke(communists, onHit, onMiss)
    }
}
