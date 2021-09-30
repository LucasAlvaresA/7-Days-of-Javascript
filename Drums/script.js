// Set KeyUp to all keys
document.body.addEventListener("keyup", (e) => {
    playSound(e.code.toLowerCase());
});

// Add action to input and button
document.querySelector(".composer button").addEventListener("click", () => {
    // Get the value of input
    let song = document.querySelector("#input").value;

    if (song !== "") {
        // transforming all letters into an array
        let songArray = song.split("");
        console.log(songArray);
        playComposition(songArray);
    }
});

// Click event on all keys will active playSound
document.querySelectorAll(".key").forEach((element) => {
    element.addEventListener("click", () => {
        const clickedKey = element.getAttribute("data-key");
        playSound(clickedKey);
    });
});

function playSound(sound) {
    // if the key is the same as the id name, it will be stored in this let
    let audio = document.querySelector(`#s_${sound}`);
    let keyActive = document.querySelector(`div[data-key="${sound}"]`);

    // Audio Play actions
    if (audio) {
        // allowing to press the same key multiple times
        audio.currentTime = 0;
        audio.play();
    }

    // Set Active Class to Keys
    if (keyActive) {
        keyActive.classList.add("active");
        // Remove active class after 300ms
        setTimeout(() => {
            keyActive.classList.remove("active");
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;
    // Loop in all itens in songArray and run playSound after 250ms
    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}
