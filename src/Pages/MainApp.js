import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import PlayCard from '../Components/PlayCard';

export default function MainApp() {
    const cSpace = 13;
    const deck = [];
    const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    for (let i = 0; i < suits.length; i++) {
        deck.push({ Value: 'A', Suit: suits[i] });
        for (let b = 2; b < 11; b++) {
            deck.push({ Value: b.toString(), Suit: suits[i] });
        }
        deck.push({ Value: 'J', Suit: suits[i] });
        deck.push({ Value: 'Q', Suit: suits[i] });
        deck.push({ Value: 'K', Suit: suits[i] });
    }

    const [playerCards, setPlayerCards] = React.useState([]);
    const [computerCards, setComputerCards] = React.useState([]);
    const [currentDeck, setCurrentDeck] = React.useState([]);
    const [flipEm, setFlipEm] = React.useState(false);

    function dealMeIn() {
        let newDeck = deck;
        let starterCards = [];
        for (let i = 0; i < 4; i++) {
            starterCards[i] = newDeck[Math.floor(Math.random() * newDeck.length)];
            newDeck = newDeck.filter(function (obj) {
                return obj !== starterCards[i];
            });
        }
        setCurrentDeck(newDeck);
        setPlayerCards([starterCards[0], starterCards[2]]);
        setComputerCards([starterCards[1], starterCards[3]]);
    }

    function calcScore(inputCards) {
        let score = 0;
        inputCards.forEach(card => {
            if (card.Value === 'A') {
                score += 11;
            }
            else if (card.Value === 'J' || card.Value === 'Q' || card.Value === 'K') {
                score += 10;
            }
            else {
                score += parseInt(card.Value);
            }
        });
        if (score > 21) {
            inputCards.forEach(card => {
                if (card.Value === 'A') {
                    score -= 10;
                }
            });
        }
        return score;
    }

    function CardDisplay() {
        let hiddenCards = [];
        if (flipEm) {
            hiddenCards = computerCards;
        } else {
            hiddenCards = [{ Value: '?', Suit: '?' }, computerCards[0]];
        }
        return (
            <div>
                <h1>Player Cards:</h1>
                <Grid container spacing={cSpace}>
                    {playerCards.map((card, i) => <Grid key={i} item xs={1}><PlayCard cardData={card}/></Grid>)}
                </Grid>
                <p>Score: {calcScore(playerCards)}</p>
                <h1>Computer Cards:</h1>
                <Grid container spacing={cSpace}>
                    {hiddenCards.map((card, i) => <Grid key={i} item xs={1}><PlayCard cardData={card}/></Grid>)}
                </Grid>
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
            setFlipEm(true);
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
            setFlipEm(true);
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
        else if (calcScore(fastCards) >= calcScore(playerCards)) {
            setFlipEm(true);
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Lose!`);
        }
        else if (calcScore(fastCards) < calcScore(playerCards)) {
            setFlipEm(true);
            alert(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
            </Box>
            <Button onClick={dealMeIn}>Deal Me In:</Button>
            {playerCards.length > 0 && computerCards.length > 0 ? <CardDisplay /> : null}
            {playerCards.length > 0 && computerCards.length > 0 ?
                <div>
                    <Button onClick={hitMe}>Hit Me</Button>
                    <Button onClick={stay}>Stay</Button>
                </div> : null}
        </div>
    );
}