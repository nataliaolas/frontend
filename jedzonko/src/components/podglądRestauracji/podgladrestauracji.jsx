import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default function PodgladRestauracji(){

    return (
        <Grid align="center">
        <TextField id="standard-search" label="Wyszukaj restauracje" type="search" />
        <Button >Default</Button>
        </Grid>
    )
}