let cardSuits = ['hearts', 'spades', 'clubs', 'diamonds']
let cardValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
let deck = ''

// *** Creat the deck ***
function CreateDeck() {
    deck = new Array()
    for (let i = 0; i < cardSuits.length; i++) {
        for (let u = 0; u < cardValues.length; u++) {
            let card = {cardValue: cardValues[u], cardSuit: cardSuits[i]}
            deck.push(card);
            document.getElementById('card').textContent = 'front';
            document.getElementById('card').textContent = 'back';
            
        }
    }
    return deck
}


//console.log(CreateDeck())
//let cards = document.createElement('div')


// *** The flip ***

const cards = document.getElementById("card")

cards.addEventListener("click", flipCard);

function flipCard() {
    cards.classList.toggle("flipCard");
}
