const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const section = document.querySelector("section");

let playerOneScore = 0;
let playerTwoScore = 1;

function addScoreOne() {
    const pOneSelect = document.querySelector("p");
    const addPOne = document.createElement("p");
    addPOne.textContent = `Score: ${playerOneScore}`;
    pOneSelect.append(addPOne);
}

function addScoreTwo() {
    const pTwoSelect = document.querySelector("p:nth-child(4)");
    const addPTwo = document.createElement("p");
    addPTwo.textContent = `Score: ${playerTwoScore}`;
    pTwoSelect.append(addPTwo);
}

function startGameSports() {
    const startButtonS = document.createElement("button");
    startButtonS.textContent = "Start";
    section.append(startButtonS);
    startButtonS.addEventListener("click", (event) => {
        if (event.target === startButtonS) {
            const questionContainerElementS = document.createElement("div");
            section.append(questionContainerElementS);
            shuffledQuestions = questionsS.sort(() => Math.random() - .5);
            currentQuestionIndex = 0;
            nextQuestionSports();
        }
    });

}

function startGameGeography() {
    const startButtonG = document.createElement("button");
    startButtonG.textContent = "Start";
    section.append(startButtonG);
    startButtonG.addEventListener("click", (event) => {
        if (event.target === startButtonG) {
            const questionContainerElementG = document.createElement("div");
            section.append(questionContainerElementG);
            shuffledQuestions = questionsG.sort(() => Math.random() - .5);
            currentQuestionIndex = 0;
            nextQuestionGeography();
        }
    });
}

function startGameMusic() {
    const startButtonM = document.createElement("button");
    startButtonM.textContent = "Start";
    section.append(startButtonM);
    startButtonM.addEventListener("click", (event) => {
        if (event.target === startButtonM) {
            const questionContainerElementM = document.createElement("div");
            section.append(questionContainerElementM);
            shuffledQuestions = questionsM.sort(() => Math.random() - .5);
            currentQuestionIndex = 0;
            nextQuestionMusic();
        }
    });
}

let shuffledQuestions, currentQuestionIndex;

function nextQuestionSports() {
    showQuestionS(shuffledQuestions[currentQuestionIndex]);
}

function nextQuestionGeography() {
    showQuestionG(shuffledQuestions[currentQuestionIndex]);
}

function nextQuestionMusic() {
    showQuestionM(shuffledQuestions[currentQuestionIndex]);
}

function showQuestionS(questions) {
    const removeStartS = document.querySelector("button:nth-child(5)");
    removeStartS.remove();
    const questionContainerElementS = document.querySelector("div");
    const questionElementS = document.createElement("p");
    questionContainerElementS.append(questionElementS);
    questionElementS.innerText = questions.question;
    questions.answer.forEach(answer => {
        const buttonAS = document.createElement("button");
        buttonAS.innerText = answer.text;
        if (answer.correct) {
            buttonAS.dataset.correct = answer.correct;
        }
        buttonAS.addEventListener("click", selectAnswerSport);
        questionElementS.append(buttonAS);
    });
}

function showQuestionG(questions) {
    const removeStartG = document.querySelector("button:nth-child(5)");
    removeStartG.remove();
    const questionContainerElementG = document.querySelector("div");
    const questionElementG = document.createElement("p");
    questionContainerElementG.append(questionElementG);
    questionElementG.innerText = questions.question;
    questions.answer.forEach(answer => {
        const buttonAG = document.createElement("button");
        buttonAG.innerText = answer.text;
        if (answer.correct) {
            buttonAG.dataset.correct = answer.correct;
        }
        buttonAG.addEventListener("click", selectAnswerSport);
        questionElementG.append(buttonAG);
    });
}

function showQuestionM(questions) {
    const removeStartM = document.querySelector("button:nth-child(5)");
    removeStartM.remove();
    const questionContainerElementM = document.querySelector("div");
    const questionElementM = document.createElement("p");
    questionContainerElementM.append(questionElementM);
    questionElementM.innerText = questions.question;
    questions.answer.forEach(answer => {
        const buttonAM = document.createElement("button");
        buttonAM.innerText = answer.text;
        if (answer.correct) {
            buttonAM.dataset.correct = answer.correct;
        }
        buttonAM.addEventListener("click", selectAnswerSport);
        questionElementM.append(buttonAM);
    });
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
        playerOneScore++;
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

function selectAnswerSport(e) {
    const selectedButtonS = e.target;
    const correctS = selectedButtonS.dataset.correct;
    setStatusClass(document.body, correctS)
    const questionElementS = document.querySelector("p");
    Array.from(questionElementS.children).forEach(buttonAS => {
        setStatusClass(buttonAS, buttonAS.dataset.correct);
    });
}

function selectAnswerGeography(e) {
    const selectedButtonG = e.target;
    const correctG = selectedButtonG.dataset.correct;
    setStatusClass(document.body, correctG)
    const questionElementG = document.querySelector("p");
    Array.from(questionElementG.children).forEach(G => {
        setStatusClass(buttonAG, buttonAG.dataset.correct);
    });
}

function selectAnswerMusic(e) {
    const selectedButtonM = e.target;
    const correctM = selectedButtonM.dataset.correct;
    setStatusClass(document.body, correctM)
    const questionElementM = document.querySelector("p");
    Array.from(questionElementM.children).forEach(buttonAM => {
        setStatusClass(buttonAM, buttonAM.dataset.correct);
    });
}

const questionsS = [
    {
        question: "In which team sport does every player play every position?",
        answer: [
            { text: "A: Volleyball", correct: true },
            { text: "B: Polo", correct: false },
            { text: "C: Basketball", correct: false }
        ]
    },
    {
        question: "In which city is the Hockey Hall of Fame located?",
        answer: [
            { text: "A: Vancouver ", correct: false },
            { text: "B: Ottawa", correct: false },
            { text: "C: Toronto", correct: true }
        ]
    },
    {
        question: "In which game would you encounter a 'Chukker'?",
        answer: [
            { text: "A: Swimming", correct: false },
            { text: "B: Football", correct: false },
            { text: " C: Polo", correct: true }
        ]

    },
    {
        question: "In a game of horseshoes, how many feet apart must the stakes be?",
        answer: [
            { text: "A: 10 Feet", correct: false },
            { text: "B: 40 Feet", correct: true },
            { text: "C: 80 Feet", correct: false }
        ]
    },
    {
        question: "Which country improbably beat England in the 1950 World Cup at Belo Horizonte in Brazil?",
        answer: [
            { text: "A: USA", correct: true },
            { text: "B: Sweden", correct: false },
            { text: "C: Japan", correct: false }
        ]
    },
    {
        question: "In which sport is a hole in one possible?",
        answer: [
            { text: "A: Horse riding", correct: false },
            { text: "B: Golf", correct: true },
            { text: "C: Boxing", correct: false }
        ]
    }
];

const questionsG = [
    {
        question: "Hollywood is a district of what US city?",
        answer: [
            { text: "A: Los Angeles", correct: true },
            { text: "B: San Diego", correct: false },
            { text: "C: San Francisco", correct: false }
        ]
    },
    {
        question: "	Which South American country shares its name with a nut?",
        answer: [
            { text: "A: Brazil", correct: true },
            { text: "B: Surinam", correct: false },
            { text: "C: Chile", correct: false }
        ]
    },
    {
        question: "What number of latitudinal parallel separates North and South Korea?",
        answer: [
            { text: "A: The 36th South", correct: false },
            { text: "B: The 38th North", correct: true },
            { text: "C: The 41th North", correct: false }
        ]
    },
    {
        question: "What is the only nation that borders both Morocco and Tunisia?",
        answer: [
            { text: "A: Libyen", correct: false },
            { text: "B: Algeria", correct: true },
            { text: "C: Mauretanien", correct: false }
        ]
    },
    {
        question: "	Which Gulf is located north of Somalia?",
        answer: [
            { text: "A: Gulf of Aqaba", correct: false },
            { text: "B: Persian Gulf", correct: false },
            { text: "C: Gulf of Aden", correct: true }
        ]
    },
    {
        question: "What is the capital of Bangladesh?",
        answer: [
            { text: "A: Calcutta", correct: false },
            { text: "B: Chittagong", correct: false },
            { text: "C: Dhaka", correct: true }
        ]
    }
];

const questionsM = [
    {
        question: "Which American city does Jazz originate from?",
        answer: [
            { text: "A: New Orleans", correct: true },
            { text: "B: Orlando", correct: false },
            { text: "C: Memphis", correct: false }
        ]
    },
    {
        question: "Which famous opera artist sung Nessun dorma from Turandot?",
        answer: [
            { text: "A: Luciano Pavarotti", correct: true },
            { text: "B: Ruggero Raimondi", correct: false },
            { text: "C: Plácido Domingo", correct: false }
        ]
    },
    {
        question: "Which English singer and song writer appeared in the movie Labyrinth?",
        answer: [
            { text: "A: Bono", correct: false },
            { text: "B: David Bowie", correct: true },
            { text: "C: Elton John", correct: false }
        ]
    },
    {
        question: "Space Jam featured which R Kelly song?",
        answer: [
            { text: "A: Ignition", correct: false },
            { text: "B: I believe I can fly", correct: true },
            { text: "C: Wonderful", correct: false }
        ]
    },
    {
        question: "Who sang Empire State of Mind?",
        answer: [
            { text: "A: Drake", correct: false },
            { text: "B: Kanye West", correct: false },
            { text: "C: Jay-Z", correct: true }
        ]
    },
    {
        question: "The metal band Opeth originate from which country?",
        answer: [
            { text: "A: Norway", correct: false },
            { text: "B: Finland", correct: false },
            { text: "C: Sweden", correct: true }
        ]
    }
];

function addSubjets() {
    const addSubjectSports = document.createElement("button");
    addSubjectSports.textContent = "Sports";
    section.append(addSubjectSports);

    const addSubjectGeography = document.createElement("button");
    addSubjectGeography.textContent = "Geography";
    section.append(addSubjectGeography);

    const addSubjectMusic = document.createElement("button");
    addSubjectMusic.textContent = "Music";
    section.append(addSubjectMusic);

    document.addEventListener("click", (event) => {
        if (event.target === addSubjectSports) {
            addSubjectGeography.remove();
            addSubjectMusic.remove();
            startGameSports();
            addSubjectSports.disabled = true;
        } else if (event.target === addSubjectGeography) {
            addSubjectSports.remove();
            addSubjectMusic.remove();
            startGameGeography();
            addSubjectGeography.disabled = true;
        } else if (event.target === addSubjectMusic) {
            addSubjectSports.remove();
            addSubjectGeography.remove();
            startGameMusic();
            addSubjectMusic.disabled = true;
        }
    });
}

document.addEventListener("click", (event) => {
    if (event.target === onePlayer) {
        let nameFill = document.createElement("input");
        nameFill.placeholder = "Enter your name";
        section.append(nameFill);
        onePlayer.disabled = true;
        twoPlayers.disabled = false;
        if (onePlayer.disabled = true) {
            document.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const nameHolder = nameFill.value;
                    const displayName = document.createElement("p");
                    displayName.textContent = `Player ${nameHolder}`;
                    section.append(displayName);
                    nameFill.remove();
                    addScoreOne();
                    if (displayName.value = true) {
                        onePlayer.remove();
                        twoPlayers.remove();
                        addSubjets();
                    }
                }
            });
        }
    } else if (event.target === twoPlayers) {
        let nameFillOne = document.createElement("input");
        let nameFillTwo = document.createElement("input");
        nameFillOne.placeholder = "Player 1 name:";
        nameFillTwo.placeholder = "Player 2 name:";
        section.append(nameFillOne, nameFillTwo);
        onePlayer.disabled = false;
        twoPlayers.disabled = true;
        if (twoPlayers.disabled = true) {
            const displayNameOne = document.createElement("p");
            const displayNameTwo = document.createElement("p");
            document.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const nameHolderOne = nameFillOne.value;
                    displayNameOne.textContent = `Player 1 ${nameHolderOne}`;
                    section.append(displayNameOne);
                    nameFillOne.disabled = true;
                    addScoreOne();
                    if (displayNameOne.value = true) {
                        onePlayer.remove();
                        twoPlayers.remove();
                    }
                    if (nameFillOne.disabled = true) {
                        nameFillOne.remove();
                        document.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                const nameHolderTwo = nameFillTwo.value;
                                displayNameTwo.textContent = `Player 2 ${nameHolderTwo}`;
                                section.append(displayNameTwo);
                                nameFillTwo.remove();
                                addScoreTwo();
                                addSubjets();
                            }
                        });
                    }
                }
            });
        }
    }
});