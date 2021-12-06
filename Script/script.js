const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const section = document.querySelector("section");

const playerOneScore = 0;
const playerTwoScore = 1;

function addScoreOne() {
    const pOneSelect = document.querySelector("p");
    const addPOne = document.createElement("p");
    addPOne.textContent = `Score: ${playerOneScore}`;
    pOneSelect.append(addPOne);
}

function addScoreTwo() {
    const pTwoSelect = document.querySelector("p");
    const addPTwo = document.createElement("p");
    addPTwo.textContent = `Score: ${playerTwoScore}`;
    pTwoSelect.append(addPTwo);
}

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
            const questionsS = [
                {
                    question: "In which team sport does every player play every position?  A: Volleyball  B: Polo  C: Basketball",
                    answer: "A"
                },
                {
                    question: "In which city is the Hockey Hall of Fame located?  A: Vancouver  B: Ottawa  C: Toronto",
                    answer: "C"
                },
                {
                    prompt: "In which game would you encounter a 'Chukker'?  A: Swimming  B: Football  C: Polo",
                    answer: "C"
                },
                {
                    question: "In a game of horseshoes, how many feet apart must the stakes be?  A: 10 Feet  B: 40 Feet  C: 80 Feet",
                    answer: "B"
                },
                {
                    question: "Which country improbably beat England in the 1950 World Cup at Belo Horizonte in Brazil?  A: USA  B: Sweden  C: Japan",
                    answer: "A"
                },
                {
                    question: "In which sport is a hole in one possible?  A: Horse riding  B: Golf  C: Boxing",
                    answer: "B"
                }
            ]
            const response = document.createElement("p");
            for (let i = 0; i < questionsS.length; i++) {
                response.textContent = questionsS[i].question;
                // Behövs en input for att matcha svar 
                section.append(response);
                if (response == questionsS[i].answer) {
                    playerOneScore++;
                }
            }
            const howManyCorrect = document.createElement("p");
            howManyCorrect.textContent = "You got " + playerOneScore + "/" + questionsS.length;
            section.append(howManyCorrect);
        } else if (event.target === addSubjectGeography){
            addSubjectSports.remove();
            addSubjectMusic.remove();
            const questionsG = []; 
        } else if (event.target === addSubjectMusic){
            addSubjectSports.remove();
            addSubjectGeography.remove();
            const questionsM = []; 
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



