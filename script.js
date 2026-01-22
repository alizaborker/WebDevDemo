document.addEventListener("DOMContentLoaded", () => {
  let score = 0;
  let timeLeft = 30;

  // define constants to refer to HTML elements
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const gameArea = document.getElementById("game-area");

  function spawnGhost() {
    const ghost = document.createElement("img");
    ghost.src = "https://www.pngarts.com/files/18/Ghost-PNG-HQ-Picture.png";
    ghost.classList.add("ghost");

    // random position in game area
    ghost.style.left = Math.random() * (gameArea.clientWidth - 80) + "px";
    ghost.style.top = Math.random() * (gameArea.clientHeight - 80) + "px";

    gameArea.appendChild(ghost);

    ghost.addEventListener("click", () => {
      score++;
      scoreDisplay.textContent = score;
      ghost.remove();
    });

    // ghost disappears after 1.2 seconds
    setTimeout(() => ghost.remove(), 1200);
  }

  function countdown() {
    const timer = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        clearInterval(ghostSpawner);
        alert("Time’s up! Your final score is " + score + ".");
      }
    }, 1000);
  }

  // start the game automatically once HTML is loaded
  const ghostSpawner = setInterval(spawnGhost, 800);
  countdown();
});
