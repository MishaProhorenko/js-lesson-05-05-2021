'use strict';

// function ConstFunc(value) {
//     this.value = value;
// };

// const obj = new ConstFunc(42)



class Robot {
    constructor(modelName) {
        this.modelName = modelName;
        this.isDisabled = false;
    }

    makeSomeNoise() {
        if (this.isDisabled) {
            console.log('We weee')
        } else {
            console.log('.....')
        }
    }

    toggleIsDisable() {
        this.isDisabled = !this.isDisabled;
        console.log(this.isDisabled);
    }
};


class VacuumCleanerBot extends Robot {
    constructor(modelName, power) {
        super(modelName);
        this.power = power;
    }

    makeRoomClear(room) {
        room.isCleaned = true;

        return room;
    }
    makeSomeNoise() {
        super.makeSomeNoise();
    }

}

const verter = new Robot('Verter');
const vacuum = new VacuumCleanerBot('Xiaomi', 9000);
const hall = {
    name: 'hall',
    isCleaned: false,
};



console.log(verter);

console.log(vacuum);
vacuum.toggleIsDisable();
vacuum.toggleIsDisable();
console.log(vacuum.makeSomeNoise());

