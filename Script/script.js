const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const section = document.querySelector("section");

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
                    if (displayName.value = true){
                        twoPlayers.disabled = true; 
                    }
                }
            });
        }
    } else if (event.target === twoPlayers) {
        
        let nameFillOne = document.createElement("input");
        let nameFillTwo = document.createElement("input");
        nameFillOne.placeholder = "Player 1 name: ";
        nameFillTwo.placeholder = "Player 2 name: ";
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
                    if (displayNameOne.value = true){
                        onePlayer.disabled = true;             
                    }
                    if (nameFillOne.disabled = true) {
                        nameFillOne.remove(); 
                        document.addEventListener("keypress", (event) => {
                            if (event.key === "Enter") {
                                const nameHolderTwo = nameFillTwo.value;
                                displayNameTwo.textContent = `Player 2 ${nameHolderTwo}`;
                                section.append(displayNameTwo);
                                nameFillTwo.disabled = true;
                                nameFillTwo.remove(); 
                            }
                        });
                    }
                }
            });
        }
    }
});