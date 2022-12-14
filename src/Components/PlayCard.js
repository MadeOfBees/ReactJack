import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';

function PlayCard(cardData) {
    const cream = "#e6e3dc";
    let value = cardData.cardData.Value;
    let color = (cardData.cardData.Suit === "Clubs" || cardData.cardData.Suit === "Spades") ? "black" : "red";
    let suit = cardData.cardData.Suit === "Clubs" ? "♣" : cardData.cardData.Suit === "Diamonds" ? "♦" : cardData.cardData.Suit === "Hearts" ? "♥" :cardData.cardData.Suit === "Spades" ? "♠" : "";

    function isFace() {
        if (value === "A" || value === "J" || value === "Q" || value === "K" || value === "?") { return true; }
        else { return false; }
    }

    function MiddleOutput() {
        const array = [];
        if (isFace()) { return <h3>{value}</h3> }
        else {
            for (let i = 0; i < parseInt(value); i++) {
                array.push(suit);
            }
            if (array.length > 5) {
                return (
                    <div>
                        <Grid >
                            <Grid item>
                                {array.slice(0, 5)}
                            </Grid>
                            <Grid item className="Card">
                                {array.slice(5, array.length)}
                            </Grid>
                        </Grid>
                    </div>
                )
            }
            return array
        }
    }
    
    if (!isFace()) {
        return (
            <Box sx={{ width: 100, height: 160, backgroundColor: cream, color: { color } }}>
                <Grid container direction="row" justifyContent="space-around" height={10}>
                    <Grid item>
                        <p>
                            {value}
                        </p>
                    </Grid>
                    <Grid item>
                        <p>
                            {suit}
                        </p>
                    </Grid>
                    <Grid container direction="row" justifyContent="center" height={50}>
                        <Grid item justifyContent="center">
                            <MiddleOutput />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-around" height={25}>
                        <Grid item>
                            <p>
                                {suit}
                            </p>
                        </Grid>
                        <Grid item>
                            <p>
                                {value}
                            </p>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        );
    } else {
        return (
            <Box sx={{ width: 100, height: 160, backgroundColor: cream, color: { color } }}>
                <Grid container direction="row" justifyContent="space-around">
                    <Grid item>
                        <h1 className='StayThere'>{value}{suit}</h1>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default PlayCard;