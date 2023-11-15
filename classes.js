import {playerName} from "./inquirer.js";






class Door {
    constructor() {
        this.integrity =  90;
    }

    doorStats() {
        if (this.integrity <= 0) {return(`Congratulations ${playerName}, you've escaped!`);
            }
            else {
        return `Door integrity currently ${this.integrity}`;}
    }
}

class Lock extends Door {
    constructor() {
        super();
    }

 reduceIntegrity() {

        this.integrity -= 15;
        if (this.integrity <= 0) {
            return;
        } else {
            return this.integrity
        }
    }
}

const lock = new Lock();

export { Door, Lock };