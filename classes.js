import {playerName} from "./inquirer.js";
import chalk from "chalk";




class Door {
    constructor() {
        this.integrity =  90;
    }

    doorStats() {
        if (this.integrity <= 0) {return`${chalk.yellow.bold.underline(`***=== Congratulations ${playerName}, you've escaped! ===***`)}`;
            }
            else {
        return `${chalk.cyan.inverse(` Door integrity currently ${this.integrity} `)}`;}
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