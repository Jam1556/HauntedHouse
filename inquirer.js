
    import inquirer from 'inquirer';
    import { Lock } from "./classes.js"
    const lock = new Lock();
    export let playerName;
    let availableChallenges = ["1","2","3","4","5","6"]
    async function start(){
        const answers = await inquirer
        .prompt([{
            type:"input",
            name:"Introduction",
            message:"What is your name?",
        },
        ]);
       playerName = answers.Introduction
    }
    
    async function greet(){
        await start()
    console.log(`Welcome ${playerName}, to the Haunted Hotel! You must recover 6 keys to unlock the door and leave. The door's integrity will weaken with each lock broken. ${String(lock.doorStats())}`)
    }
    await greet()
    async function backToDoor(){
        const answers = await inquirer.prompt([
            {
                type:"list",
                name:"chooseAChallenge",
                choices:availableChallenges,
            }
        ]);
        const chosenChallenge = answers.chooseAChallenge;
        if (chosenChallenge === "1") {backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
            console.log(`${lock.doorStats()}`)) //PLACEHOLDER
        

        }
        if (chosenChallenge === "2") {
             ChallengeTwo(chosenChallenge);
        }
        if (chosenChallenge ==="3") {backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="4") {backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="5") {backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="6") {backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
    }
    
    function ChallengeTwo(chosenChallenge) {
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
                if (chalTwo.toUpperCase() === "OPEN") {
                    console.log("The lock breaks, and a key falls from it! Lock two is open.");
                    backToDoor(availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),lock.reduceIntegrity(),
                    console.log(`${lock.doorStats()}`))
                
                } else {
                    console.log("Incorrect answer. The lock remains closed.");
                }
            });
    }

backToDoor();


