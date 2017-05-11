//example 1:
var player = {
    name: "Mario",
    totalCoins: 0,
    status: "Small",
    star: false,
    setName: function (namePicked) {
        this.name = namePicked
    },
    gotHit: function () {
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false
        }
    },
    gotPowerup: function () {
        if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Small") {
            this.status = "Big"
        }
    },
    gameActive: true,
    addCoin: function () {
        this.totalCoins++
    },
    print: function () {
        console.log("\n\tName: " + this.name + "\n\tTotal Coins: " + this.totalCoins + "\n\tStatus: " + this.status + "\n\tStar: " + this.star + "\n")
    }
}

function pickName() {
    var pick = Math.random();
    if (pick < .5) {
        player.setName("Mario")
    } else {
        player.setName("Luigi")
    }
}

function rand() {
    var num = Math.floor(Math.random() * 3);
    if (player.gameActive === false) {
        console.log("\n\tGAME OVER\n");
        return
    }
    if (num === 0) {
        player.gotHit();
        player.print();
    } else if (num === 1) {
        player.gotPowerup();
        player.print();
    } else if (num === 2) {
        player.addCoin();
        player.print();
    }
    if (player.status === "Dead") {
        console.log("\n\tGAME OVER\n");
        return
    }
}

pickName();

rand();
rand();
rand();
Add Comment Collap







//example 2


// Make a constructor function with properties: name, totalCoin, status, star, setName, gotHit, gotPowerup, gameActive
// cunstructor
function Player() {
    this.name = this.setName();
    this.setName = function ('Mario') {
        // Creating a function that has 1 of 2 possibilitys
        if (Math.random() <= .50) {
            this.name= "Lugi";
        } else {
            this.name= "Mario";
        }
    };
    this.totalCoins = 0;
    this.addCoin = function () {
        // We want to add coins to totalCoins
        this.totalCoins += 20;
    }
    this.status = "Small";
    this.gotPowerup = function () {
        // Create a function that checks the status and adds the power up
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        }
    };
    this.gotHit = function () {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        }
    };
    this.star = false;
    this.gameActive = true;
    this.print = function () {
        var properties = [""]
        // write a functinon that prints to the console the name, totalCoins, status, and star properties.
        console.log("Name " + this.name + "\nTotal Coins " + this.totalCoins + "\nStatus " + this.status + "\nStar Properties "  );
    };
}
function ran() {
    var myRan = Math.floor(Math.random() * 3)
    for (var i = 0; i < 3; i++) {
        if (myRan === 0) {
            player.gotHit();
        } else if (myRan === 1) {
            player.gotPowerup();
        } else if (myRan === 2) {
            player.addCoin();
        }
    }
}
// name
var player = new Player();
console.log(ran());






//example 3

function Player() {
    this.name;
    this.totalCoins = 0;
    this.status = "small";
    this.star = false;
    this.setName = function (namePicked) {
        this.name = namePicked;
    }
    this.gotHit = function () {
        console.log("Got hit!");
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
                break;
        }
    }
    this.gotPowerup = function () {
        console.log("Got a power up!");
        this.status = "Powered Up";
    }
    this.gameActive = true;
    this.addCoin = function () {
        console.log("Got a coin!");
        this.totalCoins++;
    }
    this.print = function () {
        console.log("Name: " + this.name);
        console.log("Total Coins: " + this.totalCoins);
        console.log("Status: " + this.status);
        console.log(this.star);
        console.log("Star?: " + (this.star ? "Has Star" : "No Star"));
    }
}
for (var i = 0; i < 3; i++) {
    var mario = new Player();
    mario.setName("Mario");
    var rand = Math.floor(Math.random() * 3);
    switch (rand) {
        case 0:
            mario.gotHit();
            break;
        case 1:
            mario.gotPowerup();
            break;
        case 2:
            mario.addCoin();
            break;
    }
    mario.print();
    console.log();
}
Add Comment



//example 4









function Car(name, status, star, gotHit, gotPowerUp, gameActive, addCoin, print) {
    this.name = function (pickName) {
        var getName = (Math.floor((Math.random() * 2)) + 1);
        if (getName === 1) {
            console.log("Mario turn");
            this.name = "Mario";
        } else {
            console.log("Lugi turn");
            this.name = "Lugi";
        }


    };


    this.totalCoints = 0;
    this.status = function () {

    };






    this.star = false;
    this.setName = function (pickName) {
        if (this.status === "Power Up")
            this.status = "Big"
    };




    this.goHit = function () {
        if () {

        } else {
            console.log("");

        }
    }
}


};







this.gotPowerUp = () {

};




this.gameActive = true;
this.addCoint = function () {};




this.print = function () {

};




var carName = new Car('Mario', 'small', true)
