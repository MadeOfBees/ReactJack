import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const deck = [
    {Suit: 'Hearts', Value: 'Ace'},
    {Suit: 'Hearts', Value: '2'},
    {Suit: 'Hearts', Value: '3'},
    {Suit: 'Hearts', Value: '4'},
    {Suit: 'Hearts', Value: '5'},
    {Suit: 'Hearts', Value: '6'},
    {Suit: 'Hearts', Value: '7'},
    {Suit: 'Hearts', Value: '8'},
    {Suit: 'Hearts', Value: '9'},
    {Suit: 'Hearts', Value: '10'},
    {Suit: 'Hearts', Value: 'Jack'},
    {Suit: 'Hearts', Value: 'Queen'},
    {Suit: 'Hearts', Value: 'King'},
    {Suit: 'Spades', Value: 'Ace'},
    {Suit: 'Spades', Value: '2'},
    {Suit: 'Spades', Value: '3'},
    {Suit: 'Spades', Value: '4'},
    {Suit: 'Spades', Value: '5'},
    {Suit: 'Spades', Value: '6'},
    {Suit: 'Spades', Value: '7'},
    {Suit: 'Spades', Value: '8'},
    {Suit: 'Spades', Value: '9'},
    {Suit: 'Spades', Value: '10'},
    {Suit: 'Spades', Value: 'Jack'},
    {Suit: 'Spades', Value: 'Queen'},
    {Suit: 'Spades', Value: 'King'},
    {Suit: 'Diamonds', Value: 'Ace'},
    {Suit: 'Diamonds', Value: '2'},
    {Suit: 'Diamonds', Value: '3'},
    {Suit: 'Diamonds', Value: '4'},
    {Suit: 'Diamonds', Value: '5'},
    {Suit: 'Diamonds', Value: '6'},
    {Suit: 'Diamonds', Value: '7'},
    {Suit: 'Diamonds', Value: '8'},
    {Suit: 'Diamonds', Value: '9'},
    {Suit: 'Diamonds', Value: '10'},
    {Suit: 'Diamonds', Value: 'Jack'},
    {Suit: 'Diamonds', Value: 'Queen'},
    {Suit: 'Diamonds', Value: 'King'},
    {Suit: 'Clubs', Value: 'Ace'},
    {Suit: 'Clubs', Value: '2'},
    {Suit: 'Clubs', Value: '3'},
    {Suit: 'Clubs', Value: '4'},
    {Suit: 'Clubs', Value: '5'},
    {Suit: 'Clubs', Value: '6'},
    {Suit: 'Clubs', Value: '7'},
    {Suit: 'Clubs', Value: '8'},
    {Suit: 'Clubs', Value: '9'},
    {Suit: 'Clubs', Value: '10'},
    {Suit: 'Clubs', Value: 'Jack'},
    {Suit: 'Clubs', Value: 'Queen'},
    {Suit: 'Clubs', Value: 'King'}
]

function MainApp() {
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
        console.log(` ${card1.Value} of ${card1.Suit}, ${card2.Value} of ${card2.Suit}, ${card3.Value} of ${card3.Suit}, ${card4.Value} of ${card4.Suit} `);
        console.log(newDeck);
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
            </Box>
            <Button onClick={dealMeIn}>MAIN BUTTON</Button>
        </div>
    );
}

export default MainApp;