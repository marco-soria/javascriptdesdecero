const deck = [ 'As of Hearts', 'Two of Hearts', 'Three of Hearts', 'Four of Hearts', 'Five of Hearts', 'Six of Hearts', 'Seven of Hearts', 'Eight of Hearts', 'Nine of Hearts', 'Ten of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts', 'As of Diamonds', 'Two of Diamonds', 'Three of Diamonds', 'Four of Diamonds', 'Five of Diamonds', 'Six of Diamonds', 'Seven of Diamonds', 'Eight of Diamonds', 'Nine of Diamonds', 'Ten of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds', 'As of Clubs', 'Two of Clubs', 'Three of Clubs', 'Four of Clubs', 'Five of Clubs', 'Six of Clubs', 'Seven of Clubs', 'Eight of Clubs', 'Nine of Clubs', 'Ten of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs', 'As of Spades', 'Two of Spades', 'Three of Spades', 'Four of Spades', 'Five of Spades', 'Six of Spades', 'Seven of Spades', 'Eight of Spades', 'Nine of Spades', 'Ten of Spades', 'Jack of Spades', 'Queen of Spades', 'King of Spades', 'Joker']

// FISHER-YATES SHUFFLE ALGORITHM
function shuffleDeck(){
    for(let i=deck.length-1; i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        [deck[i],deck[j]]=[deck[j],deck[i]]
    }
}

function dealCards(numCard){
    const dealCards=deck.splice(0,numCard)
    return dealCards
}

shuffleDeck()

const player1Hand=dealCards(3)
const player2Hand=dealCards(3)
const player3Hand=dealCards(3)

console.log('Player 1 Hand: ',player1Hand) // ['As of Hearts', 'Two of Hearts', 'Three of Hearts']

console.log('Player 2 Hand: ',player2Hand) // ['Four of Hearts', 'Five of Hearts', 'Six of Hearts']

console.log('Player 3 Hand: ',player3Hand) // ['Seven of Hearts', 'Eight of Hearts', 'Nine of Hearts']