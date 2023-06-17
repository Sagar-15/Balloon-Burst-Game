function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function createBalloon() {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.top = getRandomInt(0, 500) + "px"; 
    balloon.style.left = getRandomInt(0, 700) + "px"; 
    balloon.style.backgroundColor = colors[getRandomInt(0, colors.length - 1)]; 
    balloon.innerText = letters[getRandomInt(0, letters.length - 1)]; 
    balloon.addEventListener("click", function() {
        burstBalloon(this);
    });
    return balloon;
}

function scaleUpBalloon(balloon) {
    var scale = 3;
    var interval = setInterval(function() {
        scale += 0.1;
        balloon.style.transform = "scale(" + scale + ")";
        if (scale >= 2) {
            clearInterval(interval);
        }
    }, 100);
}

function burstBalloon(balloon) {
    balloon.removeEventListener("click", burstBalloon);
    balloon.style.opacity = 0; 
    var burst = document.createElement("div");
    burst.className = "burst";
    balloon.appendChild(burst);  
    setTimeout(function() {
      balloon.parentNode.removeChild(balloon);
    }, 500);
  }
  
function startGame() {
    var gameContainer = document.getElementById("game-container");
    var airPump = document.getElementById("air-pump");
    airPump.addEventListener("click", function() {
        var balloon = createBalloon();
        gameContainer.appendChild(balloon);
        scaleUpBalloon(balloon);
    });
}   

window.onload = startGame;
