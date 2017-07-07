Create two parties (Create a Javascript constructor function and use the new keyword to instantiate the parties)
Each party has a name ("Penguins" and "Communists" - or whatever you want)
Each party has a starting population of 1,000,000
Flip a coin (random number between 1 and 2) to see which party attacks first
Create a function called sendNuke(party, onHit, onMiss) where:
the first parameter party is the Javascript object of the party that will be attacked
the second parameter onHit is a callback function that will be called if the attack is successful
the third parameter onMiss is a callback function that will be called if the attack is unsuccessful
the onHit and onMiss functions each take one parameter of type party (just forwarding the party you already passed into sendNuke)
Print messages in the callbacks that are appropriate - e.g. if the attack missed then it would log "The Penguins' nuke missed the Communists and instead landed in the ocean" or something along those lines
A random algorithm will be used to determine if the attack is a miss or a hit (this can happen in the sendNuke function
If an attack is successful initiate a random damage amount
After an attack is completed (or missed) the opposing party will initiate an attack.
This process will repeat until one of the parties reaches a 0 population
Passing Criteria: Instructor or TA Code Review
An instructor or TA will sit down to code review your work and assess your understanding of the following topics:

Objects/Associative Arrays
Constructors or "Classes"
Callback functions
Functional programming concepts