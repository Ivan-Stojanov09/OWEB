const shapes = [
    "circle.png",
    "square.png",
    "triangle.png",
    "star.png",
    "heart.png",
    "hexagon.png"
];

let cards = [...shapes, ...shapes];
cards.sort(() => Math.random() - 0.5);

const board = document.getElementById("tabla");
const triesDisplay = document.getElementById("obidi");
const message = document.getElementById("poraka");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let tries = 0;
let matchedPairs = 0;

cards.forEach(shape => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = `images/${shape}`;
    img.alt = shape;
    img.style.display = "none";
    img.style.width = "80px";
    img.style.height = "80px";

    card.appendChild(img);
    card.addEventListener("click", flipCard);
    board.appendChild(card);
});

function flipCard(){
    if (lockBoard || this ===firstCard)
        return;

    const img = this.querySelector("img");
    img.style.display = "block";
    this.classList.add("flipped");

    if (!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;
    tries++;
    triesDisplay.textContent = `obidi: ${tries}`;

    checkForMatch();
}

function checkForMatch(){
    const firstShape = firstCard.querySelector("img").src;
    const secondShape = secondCard.querySelector("img").src;

    const isMatch = firstShape === secondShape;

    if (isMatch){
        disableCards();
    }
    else {
        unflipCards();
    }
}
function disableCards(){
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    matchedPairs++;
    if(matchedPairs === shapes.length){
        message.textContent = `Gi najde site parovi za ${tries} obidi`;
    }
    resetBoard();
}

function unflipCards(){
    setTimeout(() => {
        firstCard.querySelector("img").style.display = "none";
        secondCard.querySelector("img").style.display = "none";
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;

}