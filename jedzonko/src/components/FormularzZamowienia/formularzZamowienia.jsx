import React from 'react';
import { useForm } from "react-hook-form";
import { Grid, TextField, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import apiClient from '../../api/apiClient';

// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const schema = yup.object().shape({
//     miejscowosc: yup.string().required(),
//     ulica: yup.string().required(),
//     nrbudynku: yup.number().required(),
//     nrtelefonu: yup.number().required()
// });

export default function Formularz() {
    const classes = useStyles();

    const DaneKlienta = async (form) => {
        await apiClient.post(`http://127.0.0.1:8000/klient/`, form);
    };


    const { register, handleSubmit } = useForm({
        //  resolver: yupResolver(schema),
    })
    return (
        <form onSubmit={handleSubmit(d => console.log(d))}>
            <Grid container className={classes.calykomponent}>
                <Paper elevation={3} >
                    <Grid className={classes.napis}>
                        <Typography variant="h4" variant="overline" gutterBottom>Adres dostawy:</Typography>
                    </Grid>
                    <Grid className={classes.poszczegolnegridy}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Miejscowosc"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Ulica"
                            variant="outlined"
                            ref={register}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Nr budynku"
                            variant="outlined"
                            ref={register}
                        />
                        <TextField
                            id="outlined"
                            label="Nr lokalu"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid className={classes.poszczegolnegridy1}>
                        <TextField
                            id="outlined"
                            label="E-mail"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Numer telefonu"
                            variant="outlined"
                            ref={register}
                        />
                    </Grid>
                </Paper>
            </Grid>
        </form>
    )
}