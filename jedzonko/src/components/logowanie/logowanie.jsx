import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, LockOpenRounded } from '@material-ui/icons';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";
import AuthService from '../api/auth';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Home } from '../../paths/Routs';


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
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let history = useHistory();

    const { handleSubmit } = useForm(
        {
            mode: 'onSubmit',
        },
    );

    const handleChange = (form) => {
        form.username = username;
        form.password = password
        AuthService.login(form.username, form.password);
        console.log("CURRENT USER",AuthService.getCurrentUser());
        if(AuthService.getCurrentUser())
        {
            console.log("TRUEE");
            return history.push("/");
        }
    //    console.log("FORMA: ", form);
    }


    return (

        <div>
            <Grid container className={classes.grid}>
                <form onSubmit={handleSubmit(handleChange)}>
                    <div className={classes.column}>
                        <TextField label="Nazwa użytkownika" name="username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" InputProps={{ startAdornment: <InputAdornment><AccountCircle /></InputAdornment> }} />
                        <TextField label="hasło" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" InputProps={{ startAdornment: <InputAdornment><LockOpenRounded /></InputAdornment> }} />
                        <div style={{ height: 30 }} />
                        <Button className={classes.butttton} variant="contained" type="submit">
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
                </form>
            </Grid>
        </div>

    );

};