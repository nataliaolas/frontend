import React from 'react';
import useStyles from './styles';
import { Grid, Paper, TextField,Button } from '@material-ui/core';

export default function Rejestracja() {
    const classes = useStyles();
    return (
        <form className={classes.root}>
            <Grid container>
                <Paper>
                    <div className={classes.napis}> Rejestracja konta </div>
                    <div textAlign="center">
                        <TextField required id="standard-basic" className={classes.textField} label="Imię" name="imie" />
                        <TextField required id="standard-basic" className={classes.textField} label="Nazwisko" name="nazwisko" />
                        <TextField required id="standard-basic" className={classes.textField} label="E-mail" name="email" />
                        <TextField required id="standard-basic" className={classes.textField} label="Hasło" name="haslo" />
                        <TextField required id="standard-basic" className={classes.textField} label="Licencja sanepidu" name="licencjasanepidu" />
                        <TextField required id="standard-basic" className={classes.textField} label="Numer telefonu" name="numertelefonu" />
                    </div>
                    <div>
                        <Button variant="contained"  type="submit" textAlign="center"> Zarejestruj konto </Button>
                    </div>
                </Paper>
            </Grid>
        </form>
    );
}