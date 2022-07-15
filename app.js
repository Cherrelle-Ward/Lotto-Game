let lotto = {
  maxResultsLength: 6,
  numOfBalls: 59,
  userGuess: [1, 2, 3, 4, 5, 6],
  matchingNums: [],
  drawnBalls: [1, 2, 3, 4, 5, 6],
  luckyDipTotal: [],
};

let {
  maxResultsLength,
  numOfBalls,
  userGuess,
  matchingNums,
  drawnBalls,
  luckyDipTotal,
} = lotto;

// guest results
let results = document.querySelector("#result");

// drawn balls
let drawOne = document.querySelector("#one");
let drawTwo = document.querySelector("#two");
let drawThree = document.querySelector("#three");
let drawFour = document.querySelector("#four");
let drawFive = document.querySelector("#five");
let drawSix = document.querySelector("#six");

// play game btn
let submitBtn = document.getElementById("submit");

// winning ball generator
function winningBalls() {
  let ballOne = (drawOne.value = Math.floor(Math.random() * 59) + 1);
  let ballTwo = (drawTwo.value = Math.floor(Math.random() * 59) + 1);
  let ballThree = (drawThree.value = Math.floor(Math.random() * 59) + 1);
  let ballFour = (drawFour.value = Math.floor(Math.random() * 59) + 1);
  let ballFive = (drawFive.value = Math.floor(Math.random() * 59) + 1);
  let ballSix = (drawSix.value = Math.floor(Math.random() * 59) + 1);

  drawnBalls.push(ballOne);
  drawnBalls.push(ballTwo);
  drawnBalls.push(ballThree);
  drawnBalls.push(ballFour);
  drawnBalls.push(ballFive);
  drawnBalls.push(ballSix);

  let resultToReturn = false;
  resultToReturn = drawnBalls.some((element, index) => {
    return drawnBalls.indexOf(element) !== index;
  });
  if (resultToReturn) {
    console.log("Duplicate elements exist");
    drawnBalls = [];
    winningBalls();
    console.log("user guess elements exist", userGuess);
  } else {
    console.log("Duplicates dont exist ");
  }
}

// Lucky Dip
let luckyDipOne = document.getElementById("luckyDipOne");
let luckyDipTwo = document.getElementById("luckyDipTwo");
let luckyDipThree = document.getElementById("luckyDipThree");
let luckyDipFour = document.getElementById("luckyDipFour");
let luckyDipFix = document.getElementById("luckyDipFive");
let luckyDipSix = document.getElementById("luckyDipSix");
let luckyDipBtn = document.getElementById("submitLuckyDipBtn");

// luckydip submit
luckyDipBtn.addEventListener("click", function (e) {
  luckyDipPicker();
  submitPicked.setAttribute("disabled", "");
  submitBtn.addEventListener("click", playGame, true);
});

// luckydip generator
function luckyDipPicker() {
  luckyDipTotal.push(
    (luckyDipOne.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  luckyDipTotal.push(
    (luckyDipTwo.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  luckyDipTotal.push(
    (luckyDipThree.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  luckyDipTotal.push(
    (luckyDipFour.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  luckyDipTotal.push(
    (luckyDipFive.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  luckyDipTotal.push(
    (luckyDipSix.innerHTML =
      Math.floor(Math.random() * 59) + 1 && Math.floor(Math.random() * 59) + 1)
  );
  let resultToReturn = false;
  resultToReturn = luckyDipTotal.some((element, index) => {
    return luckyDipTotal.indexOf(element) !== index;
  });
  if (resultToReturn) {
    console.log("Duplicate elements exist");
    luckyDipTotal = [];
    luckyDipPicker();
    console.log("user guess elements exist", userGuess);
  } else {
    console.log("Duplicates dont exist ");
  }
}
/// guess numbers
submitPicked = document.querySelector("#submitPicked");
picked1 = document.querySelector("#picked1");
picked2 = document.querySelector("#picked2");
picked3 = document.querySelector("#picked3");
picked4 = document.querySelector("#picked4");
picked5 = document.querySelector("#picked5");
picked6 = document.querySelector("#picked6");

// guess submit
submitPicked.addEventListener("click", function () {
  submitBtn.addEventListener("click", playGame, true);
  submitLuckyDipBtn.setAttribute("disabled", "");
  guessGame();
});

function guessGame(e) {
  userGuess.push(picked1.value);
  userGuess.push(picked2.value);
  userGuess.push(picked3.value);
  userGuess.push(picked4.value);
  userGuess.push(picked5.value);
  userGuess.push(picked6.value);
  for (let i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === "" || userGuess[i] < 0) {
      console.log(userGuess[i], "error");
      userGuess.splice(userGuess[i]);
      alert("pick 6 valid numbers");
    } else if (userGuess.length === 6) {
      console.log(userGuess, "6 numbers picked");
    }
  }

  let resultToReturn = false;
  resultToReturn = userGuess.some((element, index) => {
    return userGuess.indexOf(element) !== index;
  });
  if (resultToReturn) {
    console.log("Duplicate elements exist");
    userGuess = [];
    console.log("user guess elements exist", userGuess);
    alert("you have duplicate numbers");
  } else {
    console.log("Duplicates dont exist ");
  }
}

function winChecker(matchingNums) {
  if (matchingNums.length == 2) {
    results.innerHTML = `You win £50`;
  } else if (matchingNums.length == 3) {
    results.innerHTML = `You win £100`;
  } else if (matchingNums.length == 4) {
    results.innerHTML = `You win £200`;
  } else if (matchingNums.length == 5) {
    results.innerHTML = `You win £500`;
  } else if (matchingNums.length <= 1) {
    results.innerHTML = `you lose`;
  } else {
    console.log(error);
  }
}

// play game
function playGame(e) {
  try {
    winningBalls();
    if (luckyDipTotal.length === maxResultsLength) {
      // luckydip
      for (let i = 0; i < drawnBalls.length; i++) {
        for (let j = 0; j < luckyDipTotal.length; j++) {
          if (drawnBalls[i] == luckyDipTotal[j]) {
            matchingNums.push(drawnBalls[i]);
            console.log(matchingNums, "matched balls");
          }
          console.log(matchingNums.length, "i am length");
          winChecker(matchingNums);
        }
      }
    } else if (userGuess.length === maxResultsLength) {
      // guessed
      for (let i = 0; i < drawnBalls.length; i++) {
        for (let k = 0; k < userGuess.length; k++) {
          if (drawnBalls[i] == userGuess[k]) {
            matchingNums.push(drawnBalls[i]);
            console.log(matchingNums, "matched balls");
          }
          winChecker(matchingNums);
        }
      }
    }
    submitBtn.setAttribute("disabled", "");
  } catch (error) {
    console.log(error, "i am error");
    return;
  }
  console.log(drawnBalls, "drawn");
  console.log(luckyDipTotal, "lucky");
  console.log(matchingNums, "matched");
}
// RESET
let reset = document.querySelector("#reset");
reset.addEventListener("click", function (e) {
  matchingNums = [];
  drawnBalls = [];
  luckyDipTotal = [];
  userGuess = [];

  drawOne.value = "";
  drawTwo.value = "";
  drawThree.value = "";
  drawFour.value = "";
  drawFive.value = "";
  drawSix.value = "";

  luckyDipOne.innerHTML = "";
  luckyDipTwo.innerHTML = "";
  luckyDipThree.innerHTML = "";
  luckyDipFour.innerHTML = "";
  luckyDipFive.innerHTML = "";
  luckyDipSix.innerHTML = "";

  result.innerHTML = "";

  picked1.value = "";
  picked2.value = "";
  picked3.value = "";
  picked4.value = "";
  picked5.value = "";
  picked6.value = "";

  submitLuckyDipBtn.removeAttribute("disabled");
  submitBtn.removeAttribute("disabled");
  submitPicked.removeAttribute("disabled");
});
// alt rest option
// window.location.reload()
