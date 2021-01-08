import React, { useState } from 'react';
import useStyles from './styles';
import { Grid, Paper, TextField,Button } from '@material-ui/core';
import AuthService from '../components/api/auth';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Rejestracja() {
    const classes = useStyles();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [password2, setPassword2] = useState();
    let history = useHistory();

    const { handleSubmit } = useForm(
        {
            mode: 'onSubmit',
        },
    );

    const handleChange = (form) => {
        form.first_name = first_name;
        form.last_name = last_name;
        form.email = email;
        form.username = username;
        form.password = password;
        form.password2 = password2;
        AuthService.register(form.email, form.username, form.password, form.password2, form.first_name, form.last_name)
        AuthService.login(form.username, form.password);
        if(localStorage.getItem('user'))
        {
            return history.push("/");
        }
        //AuthService.login(form.username, form.password)
        //console.log("FORMA: ", form);
    }


    return (
        <form className={classes.root} onSubmit={handleSubmit(handleChange)}>
            <Grid container>
                <Paper>
                    <div className={classes.napis}> Rejestracja konta </div>
                    <div >
                        <TextField required id="standard-basic" className={classes.textField} label="Imię" name="first_name" onChange={(e) => setFirstName(e.target.value)} />
                        <TextField required id="standard-basic" className={classes.textField} label="Nazwisko" name="last_name" onChange={(e) => setLastName(e.target.value)} />
                        <TextField required id="standard-basic" className={classes.textField} label="E-mail" name="email" onChange={(e) => setEmail(e.target.value)} />
                        <TextField required id="standard-basic" className={classes.textField} label="Nazwa użytkownika" name="username" onChange={(e) => setUsername(e.target.value)} />
                        <TextField required id="standard-basic" className={classes.textField} label="Hasło" type="password"  name="password" onChange={(e) => setPassword(e.target.value)} />
                        <TextField required id="standard-basic" className={classes.textField} label="Powtórz Hasło" type="password"  name="password2" onChange={(e) => setPassword2(e.target.value)} />
                    </div>
                    <div>
                        <Button variant="contained"  type="submit" align="center" className={classes.button}> Zarejestruj konto </Button>
                    </div>
                </Paper>
            </Grid>
        </form>
    );
}