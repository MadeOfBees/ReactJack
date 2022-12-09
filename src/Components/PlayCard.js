import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';



function PlayCard(cardData) {
    let value = cardData.cardData.Value;
    let suit;
    switch (cardData.cardData.Suit) {
        case 'Clubs':
            suit = "♣";
            break;
        case 'Diamonds':
            suit = "♦";
            break;
        case 'Hearts':
            suit = "♥";
            break;
        case 'Spades':
            suit = "♠";
            break;
        default:
            suit = "?";
            break;
    }


    return (
        <Box sx={{ width: 100, height: 150, backgroundColor: "#fffde7", color: "#000000" }}>
            <Grid container direction="row" justifyContent="space-around" sx={{ height: 40 }}>
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

                
                <Grid container direction="row" justifyContent="center" sx={{ height: 40 }}>
                    <Grid item>
                        {parseInt(value) ? <p>{suit.repeat(parseInt(value))}</p> : <p>{value}</p>}
                    </Grid>
                </Grid>


                <Grid container direction="row" justifyContent="space-around" sx={{ height: 40 }}>
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
}

export default PlayCard;