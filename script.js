//defining the quantity of cards

const totalCards = 55;
const cardsPerDay = 11;

const currentDate = new Date().toString();
//Sat Jun 15 2024 23:52:50 GMT+0300 (Arabian Standard Time)

// creating image path object

let uxCards = {};
let cardBox = [];

for (let i = 1; i <= 55; i++) {
  uxCards = {
    id: `${i}`,
    front: `images/image_${i}_front.png`,
    back: `images/image_${i}_back.png`,
  };
  cardBox.push(uxCards);
}

const sundayCards = cardBox.slice(0, 11);
const mondayCards = cardBox.slice(12, 23);
const TuesdayCards = cardBox.slice(24, 35);
const wednesdayCards = cardBox.slice(36, 47);
const ThursdayCards = cardBox.slice(48, 55);

const getCardsForDay = () => {
  if (currentDate.includes("Sun")) {
    return sundayCards;
  } else if (currentDate.includes("Mon")) {
    return mondayCards;
  } else if (currentDate.includes("Tue")) {
    return TuesdayCards;
  } else if (currentDate.includes("Wed")) {
    return wednesdayCards;
  } else if (currentDate.includes("Thu")) {
    return ThursdayCards;
  } else {
    return "0 cards";
  }
};

const cardsForDay = getCardsForDay();

let count = 0;
const maxId = cardsForDay.length - 1;

//changeCard function
const changeCard = () => {
  if (count > maxId) {
    count = 0;
  }
  const card = cardsForDay[count];
  console.log(count);
  const frontImageElement = document.getElementById("frontImage");
  const backImageElement = document.getElementById("backImage");
  frontImageElement.src = card.front;
  backImageElement.src = card.back;
  count++;
};

function flipCard() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flip");
}

const disappearCard = () => {
  const card = document.getElementById("flipCard");
  card.style.opacity = 0;
  card.style.transition = "opacity 0.5s ease-in-out";
};

const appearCard = () => {
  const card = document.getElementById("flipCard");
  card.style.opacity = 1;
  card.style.transition = "opacity 0.5s ease-in-out";
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function cardAnimation() {
  appearCard();
  await sleep(3000);
  flipCard();
  await sleep(3000);
  disappearCard();
  await sleep(500);
  flipCard();
  changeCard();
  await sleep(500);
}
changeCard();
setInterval(cardAnimation, 7000);

setInterval(getCardsForDay, 3600000); // check the day every one hour
