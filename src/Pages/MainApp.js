import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const deck = [
    { Suit: 'Hearts', Value: 'Ace' },
    { Suit: 'Hearts', Value: '2' },
    { Suit: 'Hearts', Value: '3' },
    { Suit: 'Hearts', Value: '4' },
    { Suit: 'Hearts', Value: '5' },
    { Suit: 'Hearts', Value: '6' },
    { Suit: 'Hearts', Value: '7' },
    { Suit: 'Hearts', Value: '8' },
    { Suit: 'Hearts', Value: '9' },
    { Suit: 'Hearts', Value: '10' },
    { Suit: 'Hearts', Value: 'Jack' },
    { Suit: 'Hearts', Value: 'Queen' },
    { Suit: 'Hearts', Value: 'King' },
    { Suit: 'Spades', Value: 'Ace' },
    { Suit: 'Spades', Value: '2' },
    { Suit: 'Spades', Value: '3' },
    { Suit: 'Spades', Value: '4' },
    { Suit: 'Spades', Value: '5' },
    { Suit: 'Spades', Value: '6' },
    { Suit: 'Spades', Value: '7' },
    { Suit: 'Spades', Value: '8' },
    { Suit: 'Spades', Value: '9' },
    { Suit: 'Spades', Value: '10' },
    { Suit: 'Spades', Value: 'Jack' },
    { Suit: 'Spades', Value: 'Queen' },
    { Suit: 'Spades', Value: 'King' },
    { Suit: 'Diamonds', Value: 'Ace' },
    { Suit: 'Diamonds', Value: '2' },
    { Suit: 'Diamonds', Value: '3' },
    { Suit: 'Diamonds', Value: '4' },
    { Suit: 'Diamonds', Value: '5' },
    { Suit: 'Diamonds', Value: '6' },
    { Suit: 'Diamonds', Value: '7' },
    { Suit: 'Diamonds', Value: '8' },
    { Suit: 'Diamonds', Value: '9' },
    { Suit: 'Diamonds', Value: '10' },
    { Suit: 'Diamonds', Value: 'Jack' },
    { Suit: 'Diamonds', Value: 'Queen' },
    { Suit: 'Diamonds', Value: 'King' },
    { Suit: 'Clubs', Value: 'Ace' },
    { Suit: 'Clubs', Value: '2' },
    { Suit: 'Clubs', Value: '3' },
    { Suit: 'Clubs', Value: '4' },
    { Suit: 'Clubs', Value: '5' },
    { Suit: 'Clubs', Value: '6' },
    { Suit: 'Clubs', Value: '7' },
    { Suit: 'Clubs', Value: '8' },
    { Suit: 'Clubs', Value: '9' },
    { Suit: 'Clubs', Value: '10' },
    { Suit: 'Clubs', Value: 'Jack' },
    { Suit: 'Clubs', Value: 'Queen' },
    { Suit: 'Clubs', Value: 'King' }
]

export default function MainApp() {
    const [playerCards, setPlayerCards] = React.useState([]);
    const [computerCards, setComputerCards] = React.useState([]);
    const [currentDeck, setCurrentDeck] = React.useState([]);
    function dealMeIn() {
        let newDeck = deck;
        let card1 = newDeck[Math.floor(Math.random() * newDeck.length)];
        newDeck = newDeck.filter(function (obj) {
            return obj !== card1;
        });
        let card2 = newDeck[Math.floor(Math.random() * newDeck.length)];
        newDeck = newDeck.filter(function (obj) {
            return obj !== card2;
        });
        let card3 = newDeck[Math.floor(Math.random() * newDeck.length)];
        newDeck = newDeck.filter(function (obj) {
            return obj !== card3;
        });
        let card4 = newDeck[Math.floor(Math.random() * newDeck.length)];
        newDeck = newDeck.filter(function (obj) {
            return obj !== card4;
        });
        setCurrentDeck(newDeck);
        setPlayerCards([card1, card3]);
        setComputerCards([card2, card4]);
    }
    function calcScore(inputCards) {
        let score = 0;
        inputCards.forEach(card => {
            if (card.Value === 'Ace') {
                score += 11;
            }
            else if (card.Value === 'Jack' || card.Value === 'Queen' || card.Value === 'King') {
                score += 10;
            }
            else {
                score += parseInt(card.Value);
            }
        });
        if (score > 21) {
            inputCards.forEach(card => {
                if (card.Value === 'Ace') {
                    score -= 10;
                }
            });
        }
        return score;
    }
    function makeCardReadbable(card) { return card.Value + " of " + card.Suit; }
    function CardDisplay() {
        return (
            <div>
                <h1>Player Cards</h1>
                {playerCards.map(card => <p>{makeCardReadbable(card)}</p>)}
                <h1>Computer Cards</h1>
                {computerCards.map(card => <p>{makeCardReadbable(card)}</p>)}
            </div>
        );
    }
    
    function hitMe() {
        let newDeck = currentDeck;
        let newCard = newDeck[Math.floor(Math.random() * newDeck.length)];
        newDeck = newDeck.filter(function (obj) {
            return obj !== newCard;
        });
        setCurrentDeck(newDeck);
        setPlayerCards([...playerCards, newCard]);
    }
    function stay() {
        if (calcScore(playerCards) <= 21) {
            computersTurn();
        } else {
            alert(`You had ${calcScore(playerCards)} but the computer had ${calcScore(computerCards)}. You Lose!`);
        }
    }

    function computersTurn() {
        let fastCards = computerCards;
        turn(fastCards);
        function turn(fastCards) {
            while (calcScore(fastCards) < 17) {
                let newDeck = currentDeck;
                let newCard = newDeck[Math.floor(Math.random() * newDeck.length)];
                newDeck = newDeck.filter(function (obj) {
                    return obj !== newCard;
                });
                setCurrentDeck(newDeck);
                fastCards = [...fastCards, newCard];
            }
            endGame(fastCards);
        }
    }
    function endGame(fastCards) {
        setComputerCards(fastCards);
        if (calcScore(fastCards) > 21) {
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
        else if (calcScore(fastCards) >= calcScore(playerCards)) {
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Lose!`);
        }
        else if (calcScore(fastCards) < calcScore(playerCards)) {
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
            </Box>
            <Button onClick={dealMeIn}>MAIN BUTTON</Button>
            {playerCards.length > 0 && computerCards.length > 0 ? <CardDisplay /> : null}
            {playerCards.length > 0 && computerCards.length > 0 ?
                <div>
                    <Button onClick={hitMe}>HitMe</Button>
                    <Button onClick={stay}>Stay</Button>
                </div> : null}
        </div>
    );
}