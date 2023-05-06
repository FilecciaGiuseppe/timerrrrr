// Set the date we're counting down to
var countDownDate = new Date("May 13, 2023 08:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "j " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// ---------------------
const cardArray = [
  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "fries",
    img: "images/fries.jpg",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.jpg",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.jpg",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "/images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];
  console.log(cards);
  console.log("check for match");

  if (optionOneId == optionTwoId) {
    alert("Tu as cliqué sur la même image ! ");
    cards[optionOneId].setAttribute("src", "/images/blank.png");
    cards[optionTwoId].setAttribute("src", "/images/blank.png");
  } else if (cardsChosen[0] == cardsChosen[1]) {
    alert("Bravooo ! ");
    cards[optionOneId].setAttribute("src", "/images/white.png");
    cards[optionTwoId].setAttribute("src", "/images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "/images/blank.png");
    cards[optionTwoId].setAttribute("src", "/images/blank.png");
    alert("Essaie encore ! ");
  }

  resultDisplay.textContent = cardsWon.length;

  cardsChosen = [];
  cardsChosenIds = [];
  console.log(cardArray.length, "cardArray.length");
  console.log(cardsWon, "cardsWon.length");

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "Bravooo, tu as tout trouvé !";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");

  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  console.log(cardArray);
  console.log(cardsChosen);

  console.log(cardsChosenIds);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length == 2) {
    setTimeout(checkMatch, 500);
  }
}
