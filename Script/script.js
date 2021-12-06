const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const section = document.querySelector("section");

document.addEventListener("click", (event) => {
    if (event.target === onePlayer) {
        let nameFill = document.createElement("input");
        nameFill.placeholder = "Enter your name";
        section.append(nameFill);
        document.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                const nameHolder = nameFill.value;
                const displayName = document.createElement("p");
                displayName.textContent = `Player ${nameHolder}`;
                section.append(displayName);
            }
        });
    } else if (event.target === twoPlayers) {
        let nameFillOne = document.createElement("input");
        let nameFillTwo = document.createElement("input");
        nameFillOne.placeholder = "Player 1 name: ";
        nameFillTwo.placeholder = "Player 2 name: ";
        section.append(nameFillOne, nameFillTwo);
        if (displayNameOne = true) {
            document.addEventListener("keypress", (event) => {
                if (event.key === "Enter") {
                    const nameHolderOne = nameFillOne.value;
                    const displayNameOne = document.createElement("p");
                    displayNameOne.textContent = `Player 1 ${nameHolderOne}`;
                    section.append(displayNameOne);
                    if (displayNameTwo = true) {
                        document.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                const nameHolderTwo = nameFillTwo.value;
                                const displayNameTwo = document.createElement("p");
                                displayNameTwo.textContent = `Player 2 ${nameHolderTwo}`;
                                section.append(displayNameTwo);
                            }
                        });
                    }
                }
            });
        }
    }
});

