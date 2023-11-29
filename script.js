let myScore = 0;
let compScore = 0;
let myName = prompt("Введіть своє ім'я:");
if (!myName) {
  myName = "Гравець 1";
}
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('myName').innerText = myName;
});

function genNumb() {
  const myNumber = Math.floor(Math.random() * 10) + 1;
  const compNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('myNumber').innerText = `Число: ${myNumber}`;
  document.getElementById('compNumber').innerText = `Число: ${compNumber}`;
  updateScores(myNumber, compNumber);
}

function updateScores(myNumber, compNumber) {
  if (myScore === 3 || compScore === 3) {
    alert(`${myScore === 3 ? myName : "Комп'ютер"} виграє гру!`);
    resetGame();
  } else {
    if (myNumber > compNumber) {
      myScore++;
      document.getElementById('myScore').innerText = `Перемоги: ${myScore}`;
    } else if (compNumber > myNumber) {
      compScore++;
      document.getElementById('compScore').innerText = `Перемоги: ${compScore}`;
    }
  }
}

function resetGame() {
  myScore = 0;
  compScore = 0;
  document.getElementById('myScore').innerText = `Перемоги: 0`;
  document.getElementById('compScore').innerText = `Перемоги: 0`;
  setTimeout(() => {
    alert('Новий раунд починається!');
  }, 500); 
}

