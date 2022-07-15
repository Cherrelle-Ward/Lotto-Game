let lotto = {
  maxResultsLength: 6,
  numOfBalls: 59,
  userGuess: [],
  matchingNums: [],
  drawnBalls: [],
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

// play button
let submitBtn = document.getElementById("submit");
// play drawn balls
function toggle(e) {
  try {
    playGame();
    if (luckyDipTotal.length === maxResultsLength) {
      // luckydip
      for (let i = 0; i < drawnBalls.length; i++) {
        for (let j = 0; j < luckyDipTotal.length; j++) {
          if (drawnBalls[i] == luckyDipTotal[j]) {
            matchingNums.push(drawnBalls[i]);
            console.log(matchingNums, "matched balls");
          }
          for (let i = 0; i < matchingNums; i++) {
            if (matchingNums.length === 2) {
              results.innerHTML = `You win £50`;
            } else if (matchingNums.length === 3) {
              results.innerHTML = `You win £100`;
            } else if (matchingNums.length === 4) {
              results.innerHTML = `You win £200`;
            } else if (matchingNums.length === 5) {
              results.innerHTML = `You win £500`;
            } else {
              results.innerHTML = `you lose`;
            }
          }
        }
      }
    } else if (userGuess.length === maxResultsLength) {
      // guest picked
      for (let i = 0; i < drawnBalls.length; i++) {
        for (let k = 0; k < userGuess.length; k++) {
          if (drawnBalls[i] == userGuess[k]) {
            matchingNums.push(drawnBalls[i]);
            console.log(matchingNums, "matched balls");
          }
          for (let i = 0; i < matchingNums; i++) {
            if (matchingNums.length === 2) {
              results.innerHTML = `You win £50`;
            } else if (matchingNums.length === 3) {
              results.innerHTML = `You win £100`;
            } else if (matchingNums.length === 4) {
              results.innerHTML = `You win £200`;
            } else if (matchingNums.length === 5) {
              results.innerHTML = `You win £500`;
            } else {
              results.innerHTML = `you lose`;
            }
          }
        }
      }
    }
  } catch (error) {
    console.log(error, "i am error");
    return;
  }
  console.log(drawnBalls, "drawn");
  console.log(luckyDipTotal, "lucky");
  console.log(matchingNums, "matched");
}

// Ball Drawn Functions
function playGame() {
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
    playGame();
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

// luckydip submit button
luckyDipBtn.addEventListener("click", function (e) {
  // submitBtn.style.visibility = "hidden";
  // pickBtn.style.visibility = "visible";
  // resultsDiv.style.visibility = "visible";

  luckyDipPicker();
  submitBtn.addEventListener("click", toggle, true);
});

// luckydip number generator
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
/// guest numbers picked
submitPicked = document.querySelector("#submitPicked");
picked1 = document.querySelector("#picked1");
picked2 = document.querySelector("#picked2");
picked3 = document.querySelector("#picked3");
picked4 = document.querySelector("#picked4");
picked5 = document.querySelector("#picked5");
picked6 = document.querySelector("#picked6");

// ball picked submit
submitPicked.addEventListener("click", function () {
  submitBtn.addEventListener("click", toggle, true);
  guestGame();
});

function guestGame(e) {
  userGuess.push(picked1.value);
  userGuess.push(picked2.value);
  userGuess.push(picked3.value);
  userGuess.push(picked4.value);
  userGuess.push(picked5.value);
  userGuess.push(picked6.value);
  for (let i = 0; i < userGuess.length; i++) {
    if (userGuess[i] === "") {
      // console.log(userGuess[i], "nooooo");
      userGuess.splice(userGuess[i]);
      // console.log(userGuess, "user guess");
      alert("pick 6 numbers");
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

  submitBtn.removeEventListener("click", toggle, false);
});
// alt rest option
// window.location.reload()
