
    import inquirer from 'inquirer';
    import { Lock } from "./classes.js"
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
    console.log(`Welcome ${playerName}, to the Haunted Hotel! You must recover 6 keys to unlock the door and leave. The door's integrity will weaken with each lock broken. ${String(lock.doorStats())}`)
    }
    await greet()
    async function backToDoor(){ //backToDoor runs greet, generates challenge list and loops back to challenge list once one has been complete
           // Check if integrity is already 0, and if so, end the game
    if (lock.integrity <= 0) {
        return;
    }

    const answers = await inquirer.prompt([
        {
            type: "list",
            name: "chooseAChallenge",
            choices: availableChallenges,
        },
    ]);

    const chosenChallenge = answers.chooseAChallenge;
let updatedIntegrity;
    if (chosenChallenge === "1") {
         updatedIntegrity = lock.reduceIntegrity();
         challengeOne(chosenChallenge)
    }
        if (chosenChallenge === "2") {
            updatedIntegrity = lock.reduceIntegrity();
             ChallengeTwo(chosenChallenge);
        }
        if (chosenChallenge ==="3") {
            updatedIntegrity = lock.reduceIntegrity();
            backToDoor(
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="4") {
            updatedIntegrity = lock.reduceIntegrity();
            backToDoor(
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="5") {
            updatedIntegrity = lock.reduceIntegrity();
            backToDoor(
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
        
            
        }
        if (chosenChallenge ==="6") {
            updatedIntegrity = lock.reduceIntegrity();
            backToDoor(
            availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),
            console.log(`${lock.doorStats()}`))//PLACEHOLDER
            
        }
    }
    
    function ChallengeTwo(chosenChallenge) {
        function askQuestion() {    // we do some recursion 
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
                        availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge);
                        console.log(`${lock.doorStats()}`);
                        backToDoor();
                    } else {
                        console.log("Incorrect answer. Try again!");
                        askQuestion(); // Recursively call askQuestion again
                    }
                });
        }
    
        askQuestion(); // Initial call to start the question loop
    }

    async function challengeOne(chosenChallenge){    
        function askQuestion(){
        let itemAnswer;
        let availableitems = ["Witch's Finger","Goat Skull","Fairy Dust","Newt's Eyes","Rabbit's foot"]
        inquirer
        .prompt([{
            type:"list",
            name: "oddOneOut",
            choices: availableitems,
            message:"One of these items does not belong, make the right choice and you may find a key to freedom.."
        }
        ])
        .then((answerschallengeOne) => {
            itemAnswer = answerschallengeOne.oddOneOut
            if (itemAnswer === "Fairy Dust") {
                console.log("The lock breaks, and a key falls from it! Lock two is open.");
                backToDoor(
                    availableChallenges = availableChallenges.filter(challenge => challenge !== chosenChallenge),
                    console.log(`${lock.doorStats()}`))
            
            } else {
                console.log("Incorrect answer. The lock remains closed.");askQuestion()
            }
        });
    }
    askQuestion();
    }
    backToDoor()
