import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styled from 'styled-components';

import CardData from './CardData';

const styles = {
    card: {
        margin: '25px', 
        height: '100%'
    }
}

const Cards = () => {

    return(
        <div>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} md={2} style={styles.card}>
                    <CardData data={ 1 }/>
                </Grid>
                <Grid item component={Card} md={2} style={styles.card}>
                    <CardData data={ 2 }/>
                </Grid>
                <Grid item component={Card} md={2} style={styles.card}>
                    <CardData data={ 3 }/>
                </Grid>
                <Grid item component={Card} md={2} style={styles.card}>
                    <CardData data={ 4 }/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;