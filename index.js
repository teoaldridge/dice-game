function dice1() {
  var randomNumber1 = Math.ceil(Math.random() * 6); // Random number 1-6
  randomImageSource1 = "./images/dice" + randomNumber1 + ".png"; // images/dice1.png - images/dice6.png
  document.querySelector("img.img1").setAttribute("src", randomImageSource1);
  return randomNumber1;
}

function dice2() {
  var randomNumber2 = Math.ceil(Math.random() * 6);
  randomImageSource2 = "./images/dice" + randomNumber2 + ".png";
  document.querySelector("img.img2").setAttribute("src", randomImageSource2);
  return randomNumber2;
}

function playGame() {
  diceResult1 = dice1();
  diceResult2 = dice2();

  if (diceResult1 > diceResult2) {
    document.querySelector("h1").textContent = "🚩Player 1 won!";
  } else if (diceResult2 > diceResult1) {
    document.querySelector("h1").textContent = "Player 2 won!🚩";
  } else if (diceResult1 === diceResult2) {
    document.querySelector("h1").textContent = "Draw!";
  }
}
