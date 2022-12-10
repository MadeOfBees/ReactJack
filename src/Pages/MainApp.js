import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import PlayCard from '../Components/PlayCard';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

    function handleEndState(string) {
        endGame();
        setWinType(string);
        handleOpen();
    }

    const [playerCards, setPlayerCards] = React.useState([]);
    const [computerCards, setComputerCards] = React.useState([]);
    const [currentDeck, setCurrentDeck] = React.useState([]);
    const [flipEm, setFlipEm] = React.useState(false);
    const [gameOver, setGameOver] = React.useState(false);
    const [hasStarted, setHasStarted] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [winType, setWinType] = React.useState('');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function dealMeIn() {
        setOpen(false);
        setGameOver(false);
        setHasStarted(true);
        setFlipEm(false);
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
        if (calcScore([starterCards[0], starterCards[2]]) === 21) {
            handleEndState(`You got 21 with your first 2 cards! The computer had ${calcScore(computerCards)}. You Win!`);
        } else if (calcScore([starterCards[1], starterCards[3]]) === 21) {
            handleEndState(`The computer got 21 with their first 2 cards! You had ${calcScore(playerCards)}. You Lose!`);
        }
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
                    {playerCards.map((card, i) => <Grid key={i} item xs={1}><PlayCard cardData={card} /></Grid>)}
                </Grid>
                <p>Score: {calcScore(playerCards)}</p>
                <h1>Computer Cards:</h1>
                <Grid container spacing={cSpace}>
                    {hiddenCards.map((card, i) => <Grid key={i} item xs={1}><PlayCard cardData={card} /></Grid>)}
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
        var currentCards = [...playerCards, newCard];
        if (calcScore(currentCards) > 21) {
            handleEndState(`You went over 21 with ${calcScore(currentCards)} the computer had ${calcScore(computerCards)}. You Lose!`);

        }
        if (currentCards.length === 5 && calcScore(currentCards) <= 21) {
            handleEndState(`You got up to 5 cards without going over 21, your score was ${calcScore(currentCards)} and the computer had ${calcScore(computerCards)}. You Win!`);
        }
    }

    function stay() {
        if (calcScore(playerCards) <= 21) {
            computersTurn();
        } else {
            handleEndState(`You had ${calcScore(playerCards)} but the computer had ${calcScore(computerCards)}. You Lose!`);
        }
    }

    function computersTurn() {
        let fastCards = computerCards;
        turn(fastCards);
        function turn(fastCards) {
            if (fastCards.length === 5 && calcScore(fastCards) <= 21) {

                handleEndState(`The computer got up to 5 cards without going over 21, their score was ${calcScore(fastCards)} and you had ${calcScore(playerCards)}. You Lose!`);

            }
            if (calcScore(fastCards) < 17) {
                let newDeck = currentDeck;
                let newCard = newDeck[Math.floor(Math.random() * newDeck.length)];
                newDeck = newDeck.filter(function (obj) {
                    return obj !== newCard;
                });
                setCurrentDeck(newDeck);
                fastCards = [...fastCards, newCard];
                turn(fastCards);
            }
            endings(fastCards);
        }
    }

    function endings(fastCards) {
        setComputerCards(fastCards);
        if (calcScore(fastCards) > 21) {
            handleEndState(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
        else if (calcScore(fastCards) >= calcScore(playerCards)) {
            handleEndState(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Lose!`);
        }
        else if (calcScore(fastCards) < calcScore(playerCards)) {
            handleEndState(`You had ${calcScore(playerCards)} and the computer had ${calcScore(fastCards)}. You Win!`);
        }
    }

    function endGame() {
        setGameOver(true);
        setFlipEm(true);
    }

    return (
        <div >
            <Box sx={{ width: '100%' }}>
                {!hasStarted ? <Button onClick={dealMeIn} className="PushTheButton">Deal Me In:</Button> : null}
                {playerCards.length > 0 && computerCards.length > 0 ? <CardDisplay /> : null}
                {playerCards.length > 0 && computerCards.length > 0 ?
                    <div>
                        {gameOver ? null : <Button onClick={hitMe}>Hit Me</Button>}
                        {gameOver ? <Button onClick={stay}>Score</Button> : <Button onClick={stay}>Stay</Button>}
                    </div> : null}
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {winType}
                    </Typography>
                    <Button onClick={dealMeIn} className="SpaceAge">New Game</Button>
                </Box>
            </Modal>
        </div>
    );
}