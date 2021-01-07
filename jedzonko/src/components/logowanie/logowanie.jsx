import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, LockOpenRounded } from '@material-ui/icons';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";


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
    butttton: {
        backgroundColor: '#ffa733'
    },
    link: {
        margin: "10px",
        padding: "10px"
    }
}));

export default function LoginView() {

    const preventDefault = (event) => event.preventDefault();
    const classes = useStyles();

    return (

        <div>
            <Grid container className={classes.grid}>
                <div className={classes.column}>
                    <TextField label="Nazwa użytkownika" margin="normal" InputProps={{ startAdornment: <InputAdornment><AccountCircle /></InputAdornment> }} />
                    <TextField label="Hasło" margin="normal" InputProps={{ startAdornment: <InputAdornment><LockOpenRounded /></InputAdornment> }} />
                    <div style={{ height: 30 }} />
                    <Button className={classes.butttton} variant="contained">
                        Zaloguj
                        </Button>
                    <div style={{ height: 30 }} />
                    <div>
                        <Link href="#" onClick={preventDefault} className={classes.link}>Zapomniałeś hasła?</Link>
                        <Link to="/rejestracja" className={classes.link}>Rejestracja</Link>
                    </div>
                    <div>
                    </div>
                </div>
            </Grid>
        </div>

    );

};