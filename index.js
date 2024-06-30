const textFifty = document.querySelector("[textFifty]");
const originalText = textFifty.textContent;
const homePage = document.querySelector(".Homepage");
const rulesPage = document.querySelector(".Rulespage");
const gamePage = document.querySelector(".Gamepage");
const rulesButton = document.querySelector(".Rulesbutton");
const gameoverPage = document.querySelector(".Gameoverpage");
const backButton = document.querySelector(".Backbutton");
const playButton = document.querySelector(".Playbutton");
const backButton2 = document.querySelector(".Backbutton2");
const playerName1 = document.querySelector(".Playername1");
const playerNameshow1 = document.querySelector(".Playernameshow1");
const playerName2 = document.querySelector(".Playername2");
const playerNameshow2 = document.querySelector(".Playernameshow2");
const playerNumber1 = document.querySelector(".Numberplayer1");
const playerNumber2 = document.querySelector(".Numberplayer2");
const gameStartsin = document.querySelector(".gamestartsin");
const playerTimer1 = document.querySelector(".Playertimer1");
const playerTimer2 = document.querySelector(".Playertimer2");
const buttons = document.querySelectorAll(".button");
const obuttons = document.querySelectorAll(".obutton");
const playagainButton = document.querySelector(".Playagainbutton");
const mainmenuButton = document.querySelector(".Mainmenubutton");
const gameoverText = document.querySelector(".Gameovertext");

let currentTurn = "1";
var curO;
var numberinput;
let number;
let timer1;
let timer2;
let sec1;
let sec2;
let winner;
let turnType1;
let turnType2;
let inputPlayername1;
let inputPlayername2;

function clickfifty() {
  setTimeout(() => (textFifty.textContent = "+"), 1000);
  setTimeout(() => (textFifty.textContent = "-"), 2000);
  setTimeout(() => (textFifty.textContent = "x"), 3000);
  setTimeout(() => (textFifty.textContent = "÷"), 4000);
  setTimeout(() => (textFifty.textContent = "50"), 5000);
}
textFifty.addEventListener("mouseenter", clickfifty);

function clickRules() {
  setTimeout(() => homePage.classList.toggle("hidden"), 100);
  setTimeout(() => rulesPage.classList.toggle("hidden"), 100);
}
function clickPlay() {
  currentTurn = "1";
  sec1 = 30;
  sec2 = 30;
  playerTimer1.textContent = sec1;
  playerTimer2.textContent = sec2;
  // Starting the game page
  setTimeout(() => homePage.classList.toggle("hidden"), 100);
  setTimeout(() => gamePage.classList.toggle("hidden"), 100);

  //reflecting names
  inputPlayername1 = playerName1.value;
  playerNameshow1.textContent = inputPlayername1;
  inputPlayername2 = playerName2.value;
  playerNameshow2.textContent = inputPlayername2;

  //showing countdown + generate the number
  const random = Math.random();
  const randomNumber = Math.floor(random * 1000);
  let sec = 6;
  var intervalCount = setInterval(function () {
    playerNumber1.textContent = sec - 1;
    playerNumber2.textContent = sec - 1;
    sec--;
    if (sec == 0) {
      playerTurn1();
      playerNumber1.textContent = randomNumber;
      playerNumber2.textContent = randomNumber;
      clearInterval(intervalCount);
    }
  }, 1000);
}
function clickPlayagain() {
  currentTurn = "1";
  setTimeout(() => gameoverPage.classList.toggle("hidden"), 200);
  sec1 = 30;
  sec2 = 30;
  playerTimer1.textContent = sec1;
  playerTimer2.textContent = sec2;
  const random = Math.random();
  const randomNumber = Math.floor(random * 1000);
  let sec = 4;
  var intervalCount = setInterval(function () {
    playerNumber1.textContent = sec - 1;
    playerNumber2.textContent = sec - 1;
    sec--;
    if (sec == 0) {
      playerTurn1();
      playerNumber1.textContent = randomNumber;
      playerNumber2.textContent = randomNumber;
      clearInterval(intervalCount);
    }
  }, 1000);
}
function clickMainmenu() {
  setTimeout(function () {
    gameoverPage.classList.toggle("hidden");
    gamePage.classList.toggle("hidden");
    homePage.classList.toggle("hidden");
  }, 200);
}

function clickBack2() {
  playerNumber1.textContent = 50;
  playerNumber2.textContent = 50;
  homePage.classList.toggle("hidden");
  gamePage.classList.toggle("hidden");
}

function playerTurn1() {
  playerNumber1.style.backgroundColor = "white";
  playerNumber2.style.backgroundColor = "rgb(55 65 81 / var(--tw-bg-opacity))";
  timer1 = setInterval(function () {
    playerTimer1.textContent = sec1;
    sec1--;
    if (sec1 == -1) {
      clearInterval(timer1);
      gameoverPage.style.backgroundColor = "#235de6";
      gameoverText.textContent = "Winner : " + inputPlayername2;
      setTimeout(() => gameoverPage.classList.toggle("hidden"), 1500);
      return;
    }
  }, 1000);
}

function playerTurn2() {
  playerNumber2.style.backgroundColor = "white";
  playerNumber1.style.backgroundColor = "rgb(55 65 81 / var(--tw-bg-opacity))";
  timer2 = setInterval(function () {
    playerTimer2.textContent = sec2;
    sec2--;
    if (sec2 == -1) {
      clearInterval(timer2);
      gameoverPage.style.backgroundColor = "#de510c";
      gameoverText.textContent = "Winner : " + inputPlayername1;
      setTimeout(() => gameoverPage.classList.toggle("hidden"), 1500);
      return;
    }
  }, 1000);
}

function swapTurn() {
  if (currentTurn == "1") {
    playerTurn2();
    currentTurn = "2";
    clearInterval(timer1);
  } else {
    playerTurn1();
    currentTurn = "1";
    clearInterval(timer2);
  }
}

function inputData(numberinput) {
  if (currentTurn == "1") {
    if (curO == "+")
      playerNumber1.textContent =
        Number(playerNumber1.textContent) + Number(numberinput);
    else if (curO == "-")
      playerNumber1.textContent =
        Number(playerNumber1.textContent) - Number(numberinput);
    else if (curO == "x")
      playerNumber1.textContent =
        Number(playerNumber1.textContent) * Number(numberinput);
    else if (
      curO == "÷" &&
      Number(playerNumber1.textContent) % Number(numberinput) == 0
    )
      playerNumber1.textContent =
        Number(playerNumber1.textContent) / Number(numberinput);
    if (Number(playerNumber1.textContent) == 50) {
      gameoverPage.style.backgroundColor = "#de510c";
      gameoverText.textContent = "Winner : " + inputPlayername1;
      clearInterval(timer1);
      setTimeout(() => gameoverPage.classList.toggle("hidden"), 1500);
      return;
    }
    swapTurn();
  } else {
    if (curO == "+")
      playerNumber2.textContent =
        Number(playerNumber2.textContent) + Number(numberinput);
    else if (curO == "-")
      playerNumber2.textContent =
        Number(playerNumber2.textContent) - Number(numberinput);
    else if (curO == "x")
      playerNumber2.textContent =
        Number(playerNumber2.textContent) * Number(numberinput);
    else if (
      curO == "÷" &&
      Number(playerNumber2.textContent) % Number(numberinput) == 0
    )
      playerNumber2.textContent =
        Number(playerNumber2.textContent) / Number(numberinput);
    if (Number(playerNumber2.textContent) == 50) {
      gameoverPage.style.backgroundColor = "#235de6";
      gameoverText.textContent = "Winner : " + inputPlayername2;
      clearInterval(timer2);
      setTimeout(() => gameoverPage.classList.toggle("hidden"), 1500);
      return;
    }
    swapTurn();
  }
}

rulesButton.addEventListener("click", clickRules);
backButton.addEventListener("click", clickRules);
playButton.addEventListener("click", clickPlay);
backButton2.addEventListener("click", clickBack2);
playagainButton.addEventListener("click", clickPlayagain);
mainmenuButton.addEventListener("click", clickMainmenu);
obuttons.forEach((obutton) => {
  obutton.addEventListener("click", function () {
    obutton.style.backgroundColor = "gray";
    curO = obutton.textContent;
    curO = curO.replace(/\u00A0/g, ""); // Replace non-breaking spaces
    curO = curO.trim();
  });
});
buttons.forEach((button) =>
  button.addEventListener("click", function () {
    numberinput = button.textContent;
    numberinput = numberinput.replace(/\u00A0/g, ""); // Replace non-breaking spaces
    numberinput = numberinput.trim();
    inputData(numberinput);
  }),
);
