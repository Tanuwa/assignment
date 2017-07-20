var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
var items = ["Apple", "Star", "Spirit"];
//ask user for name and give greeting
var enemies = [
{
  name:'Dragon',
  health: 100
},
    {
  name:'Alien',
  health: 100
},
    {
  name:'Predator',
  health: 100
}
];

var inventory = {
    health: 100,
    items:[]
  };
var walkCount = 0;

function walk() {
    if (enemies.length > 0) {
        console.log("would you pls push W");
        var key = readlineSync.question('Press W to walk ');
        var countR = Math.floor(Math.random() * 4) + 1;
        console.log("chance "+countR);
        if (key === 'w') {
            walkCount++;
            if (countR === 1) {
                fight();
            } else {
                console.log("you did not meet the moster");
                if (inventory.health > 0) {
                    walk();
                } else {
                    die();
                }
            }

        } else {
            console.log("Press correct key - W");
            walk();
        }
    } else {
        win();
    }

}

function run() {
    var yourLuck = Math.floor(Math.random() * 2 + 1);
    console.log("lucky " + yourLuck);
    if (yourLuck == 1) {
        console.log("You escape, you can continue walking");
        walk();
    } else {
  var fightingEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        attackEnemy(fightingEnemy.name, fightingEnemy.health);
    }
}

function fight() {
    // ask user to either fight or run
    var decision = readlineSync.question('run or fight ');
    if (decision === 'run') {
        run();
    } else if (decision === 'fight') {
        var fightingEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        attackEnemy(fightingEnemy.name, fightingEnemy.health);
    }
}


function attackEnemy(name, health) {
    var killornot = Math.floor(Math.random() * 70);
    console.log("killornot " + killornot);
    if (killornot > 35) {
        enemyHealthDecrease(name, health-killornot);
        console.log("Decrease health of "+name);
        walk();
    } else {
        console.log("enemy attacking us");
        enemyAttack();
       
    }
}

function enemyAttack() {
    var dmg = Math.floor(Math.random() * 40) + 10;
    inventory.health = inventory.health - dmg;
    console.log("your health " + inventory.health + '%');
    if (inventory.health > 0) {
        walk();
    } else {
        die();
    }
}

function enemyHealthDecrease(name, health){
     
  for (var i=0; i<enemies.length; i++){
    if(enemies[i].name === name){
      console.log("enemy "+name+" health is "+health); 
      enemies[i].health = health;
      if(enemies[i].health <=0){
        enemyDie(name);

      }
    }
}
}


function die() {
    console.log("Sorry game is over");
}

function enemyDie(fightingEnemy) {
  for (var i=0; i<enemies.length; i++){
     if(enemies[i].name === fightingEnemy){
          enemies.splice(enemies[i], 1);
     }
  }
    console.log("array of enemies "+enemies.length);
    var randomItem = items[Math.floor(Math.random()*(2-0)+0)];
    inventory.items.push(randomItem);
    console.log("Conggrats you got "+randomItem);
    console.log("we killed enemy " + fightingEnemy);
    winFight();
}
function winFight() {
    if(enemies.length >0 ){
    console.log("congrats you won the fight lets continue playing");
    walk();
    }
    else{
        win();
    }
}

function win() {
    console.log("congrats you win the game");
    return;
}



walk();
//Health for enemies and characters
//
//
//Items
//
//after winning fight, continue walking, until you win the game or lose all your health.