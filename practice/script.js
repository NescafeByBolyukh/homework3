//----------1----------
const makeAdder = function (x) {
    return function (y) {
        return x + y;
    }
}
const addFunction = makeAdder(5);
console.log(addFunction(2));


//---------2-----------
class Charmander {
    type = "Fire";
    specie = "Lizard Pokemon";

    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
    getType() {
        return this.type;
    }
    getSpecie() {
        return this.specie;
    }
    getHeight() {
        return this.height;
    }
    canWalk() {
        return true;
    }
    canFly() {
        return false;
    }
}
class Charmeleon extends Charmander {
    specie = "Flame Pokemon";
    constructor(height, weight) {
        super(height, weight);
    }

}
class Charizard extends Charmander {
    specie = "Flame Pokemon";
    constructor(height, weight) {
        super(height, weight);
    }
    canFly() {
        return true;
    }
}
var embury = new Charmander({
    height: 1,
    weight: 15
});
var mercury = new Charmeleon({
    height: 2,
    weight: 45
});
var morderbrand = new Charizard({
    height: 10,
    weight: 200
});

console.log(embury.getType()); // fire
console.log(mercury.getType()); // fire
console.log(morderbrand.getType()); // fire

console.log(embury.getSpecie()); // -> “Lizard Pokémon”
console.log(mercury.getSpecie()); // -> “Flame Pokémon”
console.log(morderbrand.getSpecie()); // -> "Flame Pokemon"

console.log(embury.getHeight()); // -> 1
console.log(morderbrand.canWalk()); // -> true
console.log(morderbrand.canFly()); // -> true


//---------------3--------------------
let date = "11-15-1944";

function changeDirection(yourString) {
    let newDate = date.split("-").reverse().join(",");
    return newDate;
}
console.log(changeDirection(date));


//--------------4-----------------
try {
    for (let i = 0; i <= 11; i++) {
        if (i === 11) {
            throw new Error('new error, 10 is enought');
        }
    }
} catch (error) {
    console.error(error, 'catch block');
} finally {
    console.log('finally block');
}


//----------------5-----------------

let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('a');
        }, 1000)
    })
    .then(data => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data + 'b');
                console.log(data);
            }, 1000);
        })
    })
    .then(data => {
        console.log(data);
    })
    .then(data => {
        throw new Error(data);
    })
    .then(null, onRejected => {
        throw new Error("oops");
    })
    .catch(error => console.log(error))
    .finally(() => {
        console.log(" finally ab")
    });
