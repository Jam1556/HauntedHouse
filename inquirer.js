
    import inquirer from 'inquirer';
    import { Lock } from "./classes.js"
    import chalk from 'chalk'
    const lock = new Lock(); //creates Lock Subclass 
    export let playerName; //declares playerName before it is used in start() so the value can be used in greet, while also exporting itself. 
    let availableChallenges = ["1","2","3","4","5","6"] //array of challenges, used later in a list inquirer.
    async function start(){ //initialises the game by asking for player input
        const answers = await inquirer
        .prompt([{
            type:"input",
            name:"Introduction",
            message:"What is your name?",
        },
        ]);
       playerName = answers.Introduction // takes input value from promt "introduction"
    }
    
    async function greet(){ //greet runs start by awaiting it 
        await start()
    console.log(chalk.cyan.bold(`Welcome ${chalk.yellow(playerName)}, to the ${chalk.magenta.italic.underline(`Haunted Hotel!`)} You must recover 6 keys to unlock the door and leave. The door's integrity will weaken with each lock broken. ${chalk.inverse(String(lock.doorStats()))}`))
    }
    await greet()
    async function backToDoor(){ //backToDoor runs greet, generates challenge list and loops back to challenge list once one has been complete
           // Check if integrity is already 0, and if so, end the game
    if (lock.integrity <= 0) {
        return;
    }

    const answers = await inquirer.prompt([ //needs to be async/await for the prompt to work 
        {
            type: "list",
            name: "chooseAChallenge",
            choices: availableChallenges,
        },
    ]);

    const chosenChallenge = answers.chooseAChallenge; //sets the value of chosenChallenge to your challenge choice from the inquirer prompt
let updatedIntegrity; // need to declare outside of functions
    if (chosenChallenge === "1") {
            updatedIntegrity = lock.reduceIntegrity(); //after a challenge is completed, lock.reduceIntegrity decreases Integrity attribute and returns the value for it to be reused in new challenges
             challengeOne(chosenChallenge);
    }
        if (chosenChallenge === "2") {
            updatedIntegrity = lock.reduceIntegrity();
             ChallengeTwo(chosenChallenge); //calls challengeTwo and passes the value of chosenChallenge (the number of the challenge you chose from the prompt) through the function 
        }
        if (chosenChallenge ==="3") {
            updatedIntegrity = lock.reduceIntegrity();
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge);
            console.log(`${lock.doorStats()}`);
            backToDoor();//PLACEHOLDER PLACEHOLDER PLACEHODLER, code that has been ripped out of the indiviudal challenge functions.
        
            
        }
        if (chosenChallenge ==="4") {
            updatedIntegrity = lock.reduceIntegrity();
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge);
            console.log(`${lock.doorStats()}`);
            backToDoor()//PLACEHOLDER PLACEHOLDER PLACEHODLER, code that has been ripped out of the indiviudal challenge functions.
        
            
        }
        if (chosenChallenge ==="5") {
            updatedIntegrity = lock.reduceIntegrity();
            challengeFive(chosenChallenge);
        
            
        }
        if (chosenChallenge ==="6") {
            updatedIntegrity = lock.reduceIntegrity();
            challengeSix(chosenChallenge);
            
        }
    }
    
    function ChallengeTwo(chosenChallenge) {
        function askQuestion() {    //recursion
            inquirer
                .prompt([
                    {
                        type: "input",
                        name: "chalTwo",
                        message: "A dusty note attached to a letter combination lock reads; `if yOu can deciPher me, you might havE a chaNce at walking free`. How do you answer?",
                    },
                ])
                .then((answersChallengeTwo) => {
                    const chalTwo = answersChallengeTwo.chalTwo;
                    if (chalTwo.toUpperCase() === "OPEN") { //changes the input to uppercase so no errors
                        console.log(chalk.green.bold("The lock breaks, and a key falls from it! Lock two is open.")); 
                        availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge); // removes the challenge you just completed from the array when successful
                        console.log(`${lock.doorStats()}`); // notifies player of current door integrity
                        backToDoor(); //recursive, allows the user to loop back to the inquirer prompt and select another challenge 
                    } else {
                        console.log(chalk.yellowBright.bold("Incorrect answer. Try again!")); 
                        askQuestion(); // Recursively call askQuestion again
                    }
                });
        }
    
        askQuestion(); // Initial call to start the question loop
    }


async function challengeOne(chosenChallenge){
    function askQuestion() {
    let itemAnswer;//declaring outside of .then() 
let availableitems = ["Witch's Finger","Goat Skull","Fairy Dust","Newt's Eyes","Rabbit's foot"] //array that will be the multiple choice answers to the riddle
inquirer
    .prompt([{
        type:"list",
        name: "oddOneOut",
        choices: availableitems,
        message:"One of these items does not belong, make the right choice and you may find a key to freedom.."
    },
    ])
    .then((answerschallengeOne) => {
         itemAnswer = answerschallengeOne.oddOneOut //sets the value of item answer to the users prompt answer
        if (itemAnswer === "Fairy Dust") {
            console.log(chalk.green.bold("You find a key underneath the bag of Fairy Dust!"))
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge); 
            console.log(`${lock.doorStats()}`);
            backToDoor();
        } else {
            console.log(chalk.yellowBright.bold("Incorrect answer. The lock remains closed."));
            askQuestion(); // Recursively call askQuestion again
        }
    });
}
askQuestion();
}


// Jamie's Challenges (3 and 4)

async function challengeThree(chosenChallenge){
    function askQuestion(){
    let operatorAnswer; // declaring outside of .then()
    let operators = ["+", "-", "*", "/"]
        inquirer
        .prompt([{
            type:"list",
            name:"challthree",
            choices: operators,
            message:"You are given the numbers '333' and '2', which operator will transform it into a number that is associated with the devil?",
        },
    ])
    .then((answersChallengeThree) => {
         operatorAnswer = answersChallengeThree.challthree;
        if (operatorAnswer === "*") {   // Multiplies it 
            console.log(chalk.green.bold("Correct! 666 is the answer, a key has appears before you!"));
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge);
            console.log(`${lock.doorStats()}`);
            backToDoor();
        } else {
            console.log(chalk.yellowBright.bold("Incorrect, please try again!"));
            askQuestion(); // Goes back to the start of challenge 3
        }
    });
    
}
askQuestion(); // Calls the function
}

async function challengeFour(chosenChallenge){
    function askQuestion(){
    let challFourAnswer;
    let halloweenChoices = ["Oct 31st", "Trick or Treating", "Champions League Final", "Scary Movie 2"]
    inquirer
    .prompt([{
        type:"checkbox",
        name:"challfour",
        choices: halloweenChoices,
        message:"Which of these choices are NOT related to Halloween?"
    },
    ])
    .then((answersChallengeFour) => {
        challFourAnswer = answersChallengeFour.challfour;
        if (challFourAnswer == "Champions League Final") {
            console.log(chalk.green.bold("Correct!, A key has dropped down for you!"));
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge);
            console.log(`${lock.doorStats()}`);
            backToDoor();
        } else {
            console.log(chalk.yellowBright.bold("Incorrect, try again!"));
            askQuestion(); // Will go back around to the start of challenge 4
        }

    });

}
askQuestion();
}

//-------Kev Challenges (5 and 6)--------

async function challengeFive(chosenChallenge){
    function askQuestion() {
    let answerBool;//declaring outside of .then() 
inquirer
    .prompt([{
        type:"confirm",
        name: "statue",
        message:"You come across a grand statue of a female warrior, her hands are empty.. \nA  worn sword lays on the ground next to her. Will you place the sword in her empty hands?"
    },
    ])
    .then((answerschallengeFive) => {
         answerBool = answerschallengeFive.statue //sets the value of item answer to the users prompt answer. 
         //console.log(answerBool)
        if (answerBool === true) {
            console.log(chalk.green.bold("The sword activates the statue; releasing a new key!"))
            //console.log(chalk.red.bold(" .-.\n(o o) boo!\n| O |\n|   |\n`~~~'"))
            console.log(chalk.green.bold("  8 8          ,o.\n d8o8azzzzzzzzd   b\n               `o' "))
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge); 
            console.log(`${lock.doorStats()}`);
            backToDoor();
        } else {
            console.log(chalk.yellowBright.bold("Nothing happens.. Try again."));
            askQuestion(); // Recursively call askQuestion again
        }
    });
}
askQuestion();
}

async function challengeSix(chosenChallenge){
    function askQuestion() {
    let autopsyAnswer;//declaring outside of .then() 
inquirer
    .prompt([{
        type:"list",
        name: "autopsy",
        message:"You find a human sized doll that appears to have been used for surgical practice.\n Will you unstitch the fresh work?",
        choices: ['left leg', 'chest', 'head', 'stomach', 'throat']
    },
    ])
    .then((answerschallengeSix) => {
         autopsyAnswer = answerschallengeSix.autopsy //sets the value of item answer to the users prompt answer
         //console.log(autopsyAnswer)
        if (autopsyAnswer === 'stomach') {
            console.log(chalk.green.bold("Nesteled between dirty bandages and rotten flesh; you find a New Key."))
            console.log(chalk.green.bold("  8 8          ,o.\n d8o8azzzzzzzzd   b\n               `o' "))
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge); 
            console.log(`${lock.doorStats()}`);
            backToDoor();
        } else {
            console.log(chalk.yellowBright.bold("Nothing unusual here. Try again."));
            askQuestion(); // Recursively call askQuestion again
        }
    });
}
askQuestion();
}

backToDoor()// call at the end to generate your recursive game choices -> game -> choices loop



