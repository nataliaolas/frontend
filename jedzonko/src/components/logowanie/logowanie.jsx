import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, LockOpenRounded } from '@material-ui/icons';
import { Button, InputAdornment, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid: {
        position: 'relative',
        justifyContent: 'center',
        top: '100px',
    },
    column: {
        display: 'flex',
        flexDirection: "column",
        minWidth: 300,
        maxWidth: 400,
    },
    butttton:{
        backgroundColor:'#ffa733'
    }
}));

export default function LoginView() {

    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.grid}>
                <div className={classes.column}>
                    <TextField label="Username" margin="normal" InputProps={{startAdornment: <InputAdornment><AccountCircle/></InputAdornment>}}/>
                    <TextField label="Password" margin="normal" InputProps={{startAdornment: <InputAdornment><LockOpenRounded/></InputAdornment>}}/>
                    <div style={{height: 30}}/>
                    <Button className={classes.butttton} variant="contained">
                        Log in
                    </Button>
                    <div style={{height: 30}}/>
                    <div>
                        Forgot your password?
                    </div>   
                    <div>
                    </div>                               
                </div>
            </Grid>
        </div>
    );

};