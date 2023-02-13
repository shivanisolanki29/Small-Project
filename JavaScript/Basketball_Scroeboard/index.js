const eleHome = document.getElementById("homePoints");
const eleGuest = document.getElementById("guestPoints");

homeCount = 0;

const plusOne = () => {
  homeCount += 1;
  eleHome.textContent = +homeCount;
  //   console.log(ele.textContent);
};
const plusTwo = () => {
  homeCount += 2;
  eleHome.textContent = +homeCount;
};
const plusThree = () => {
  homeCount += 3;
  eleHome.textContent = +homeCount;
};

guestCount = 0;
const addOne = () => {
  guestCount += 1;
  eleGuest.textContent = +guestCount;
};
const addTwo = () => {
  guestCount += 2;
  eleGuest.textContent = +guestCount;
};
const addThree = () => {
  guestCount += 3;
  eleGuest.textContent = +guestCount;
};

const setNewGame = () => {
  homeCount = 0;
  guestCount = 0;
  eleHome.textContent = 0;
  eleGuest.textContent = 0;
};

const endGameScore = () => {
  let winner = "";

  if (homeCount == 0 && guestCount == 0) {
    winner = "Game not started yet";
  }
  if (homeCount > guestCount) {
    winner = "Home Team";
  }
  if (guestCount > homeCount) {
    winner = "Guest Team";
  }
  if ((homeCount != 0 || guestCount != 0) && homeCount == guestCount) {
    winner = "Tie the Game";
  }
  const winnerEle = document.getElementById("winnerTeam-text");
  winnerEle.textContent = winner;
  setNewGame();
};
