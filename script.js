let magicArray = ["exploda", "lightinga", "thundera"];
let dragonHP = 100;
let effect = document.getElementById("effect");
let magicName = document.querySelector("#message input");
let currentFrame = 1;
let spriteSize = 256;
let dragonHealthText = document.querySelector("h4");
let effectInterval;

function castMagic() {
    if (magicArray.indexOf(magicName.value.toLowerCase()) > -1) {
        effect.style.backgroundImage = "url(/res/27fe2fe4-626e-4312-91de-a8a219be4e61/" + magicName.value.toLowerCase() + ".png)";
//         effect.style.backgroundImage = "url(https://thumbs.gfycat.com/CelebratedUnawareDodo-size_restricted.gif)";
        magicName.value = "";
        currentFrame = 1;
        dragonHP -= 10;
        if (dragonHP < 0) {
            dragonHP = 0;
        }
        dragonHealthText.innerHTML = "Dragon HP: " + dragonHP;
        clearInterval(effectInterval);
        effectInterval = setInterval(playNextFrame, 70);
    }
    else {
        alert("Wrong magic spell! Did you check your spelling?");
    }
}

function playNextFrame() {
    currentFrame++;
    if (currentFrame >= 14) {
        currentFrame = 14;
        effect.style.display = "none";

        if (dragonHP == 0) {
            alert("You win!");
        }
        clearInterval(effectInterval);
    }
    else {
        effect.style.display = "block";
        effect.style.backgroundPositionX = ((currentFrame % 4) * spriteSize * -1) + "px";
        effect.style.backgroundPositionY = (Math.floor(currentFrame / 4) * spriteSize * -1) + "px";
    }
}

/*
* RESPONSIVE CODE
*/

let container = document.querySelector("#container");

window.onload = window.onresize = resizeGame;

function resizeGame() {
    let gameRatio = container.offsetWidth / container.offsetHeight;
    let windowRatio = window.innerWidth / window.innerHeight;
    
    container.style.position = "absolute";
    container.style.left = `${(window.innerWidth - container.offsetWidth) / 2}px`;
    container.style.top = `${(window.innerHeight - container.offsetHeight) / 2}px`;

    let newScale;
    if (gameRatio > windowRatio) {
        newScale = window.innerWidth / container.offsetWidth;
        if (newScale > 1) newScale = 1;
    }
    else {
        newScale = window.innerHeight / container.offsetHeight;
        if (newScale > 1) newScale = 1;
    }
    container.style.transform = `scale(${newScale})`;
}
