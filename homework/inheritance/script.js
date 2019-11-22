class Main {
    constructor(properties) {
        this.name = properties.name;
        this.attack = properties.attack;
        this.totalHitpoints = properties.hitpoints;
        this.currentHitpoints = properties.hitpoints;
    }
    getHitpoints() {
        return this.currentHitpoints;
    }
    setHitpoints(hitpoints) {
        this.currentHitpoints = hitpoints;
    }
    getTotalHitpoints() {
        return this.totalHitpoints;
    }
    setTotalHitpoints(hitpoints) {
        this.totalHitpoints = hitpoints;
    }
    getAttack() {
        return this.attack;
    }
    setAttack(attack) {
        this.attack = attack;
    }
    fight(enemy) {
        return enemy.currentHitpoints - this.attack;
    }
    isAlive() {
        if (this.currentHitpoints > 0) {
            return true;
        } else {
            return false;
        }
    }

}
let def = false;
let enr = false;
class Champion extends Main {

    constructor(properties) {
        super(properties);
    }
    getHitpoints(fighter) {
        return this.currentHitpoints;
    }
    fight(fighter) {
        if (fighter.currentHitpoints > 0) {
            fighter.currentHitpoints -= this.attack;
        }
        if (fighter.currentHitpoints == 0) {
            this.attack += 1;
            console.log("Congrats! You are the winner.")
        }
    }
    rest() {
        this.currentHitpoints += 5;
        if (this.currentHitpoints > this.totalHitpoints) {
            this.currentHitpoints = this.totalHitpoints;
        }
    }
    defence() {
        def = true;
    }
}

class Monster extends Main {
    constructor(properties) {
        super(properties);
    }
    getHitpoints(fighter) {
        return this.currentHitpoints;
    }
    fight(fighter) {
        if (fighter.currentHitpoints > 0) {
            if (def == true) {
                fighter.currentHitpoints = fighter.currentHitpoints;
                def = false;
            } else if (def == false) {
                if (enr == true) {
                    fighter.currentHitpoints = fighter.currentHitpoints - this.attack * 2;
                    enr = false;
                } else if (enr == false) {
                    fighter.currentHitpoints -= this.attack;
                }
            }
        }
        if (fighter.currentHitpoints == 0) {
            this.currentHitpoints = Math.round(this.currentHitpoints + fighter.totalHitpoints / 4);
            this.totalHitpoints = Math.round(this.totalHitpoints + fighter.totalHitpoints / 10);
            console.log("Game over. Monster wins.")
        }
    }
    enrage() {
        enr = true;
    }
}


var heracles = new Champion({
    name: 'Heracles',
    attack: 10,
    hitpoints: 50
});
var boar = new Monster({
    name: 'Erymanthian Boar',
    attack: 5,
    hitpoints: 100
});

heracles.fight(boar);
console.log(boar.getHitpoints()); // -> 90
heracles.fight(boar);
console.log(boar.getHitpoints()); // -> 80
boar.fight(heracles);
console.log(heracles.getHitpoints()); // -> 45
heracles.defence();
boar.fight(heracles);
console.log(heracles.getHitpoints()); //45
heracles.fight(boar);
console.log(boar.getHitpoints()); // - 70
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
boar.fight(heracles);
console.log(heracles.getHitpoints()); //10
boar.enrage();
boar.fight(heracles);
//boar.fight(heracles);
console.log(heracles.getHitpoints()); //0
//    heracles.fight(boar);
//    heracles.fight(boar);
//    heracles.fight(boar);
//    heracles.fight(boar);
//    heracles.fight(boar);
//    heracles.fight(boar);
//    heracles.fight(boar);
console.log(boar.getHitpoints()); //83
console.log(boar.getTotalHitpoints()); //105
console.log(boar.isAlive()); // -> true
console.log(heracles.isAlive()); // -> false
console.log(heracles.getAttack()); // -> 10
console.log(heracles.getHitpoints()); // -> 0
heracles.rest();
console.log(heracles.getHitpoints()); // -> 5
