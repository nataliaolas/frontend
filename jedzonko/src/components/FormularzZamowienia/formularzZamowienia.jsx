import React from 'react';
import { useForm } from "react-hook-form";
import { Grid, TextField, Paper, Typography } from '@material-ui/core';
import useStyles from './styles';
import apiClient from '../../api/apiClient';
import Button from '@material-ui/core/Button';

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
    const[miasto,setMiasto]=React.useState("");
    const[ulica,setUlica] = React.useState("");
    const[nr_budynku,setBudynek]= React.useState("");
    const[nr_mieszkania,setLokal] = React.useState("");
    const[mail,setMail] = React.useState("");
    const[nr_telefonu,setTelefon] = React.useState("");

    const DaneKlienta = async (form) => {
        var adres ={
            "miasto": form.miasto,
            "ulica": form.ulica,
            "nr_budynku": form.nr_budynku,
            "nr_mieszkania": form.nr_mieszkania
        }
        var data = {
            "adres": adres,
            "mail": form.mail,
            "nr_telefonu": form.nr_telefonu
        }
        await apiClient.post(`http://127.0.0.1:8000/klient/`, data);       
    };

    const { register, handleSubmit } = useForm({
        //  resolver: yupResolver(schema),
            mode: 'onSubmit',
    });

    const handleChange = (form) =>{
        
        form.miasto = miasto;
        form.ulica = ulica;
        form.nr_budynku = nr_budynku;
        form.nr_mieszkania = nr_mieszkania;
        form.mail = mail;
        form.nr_telefonu = nr_telefonu;
        DaneKlienta(form);
    };
    return (
        <form onSubmit={handleSubmit(handleChange)}>
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
                            name="miasto"
                            value={miasto}
                            onChange={(e) => setMiasto(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Ulica"
                            variant="outlined"
                            name="ulica"
                            value={ulica}
                            ref={register}
                            onChange={(e) => setUlica(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Nr budynku"
                            name="nr_budynku"
                            variant="outlined"
                            value={nr_budynku}
                            ref={register}
                            onChange={(e) => setBudynek(e.target.value)}
                        />
                        <TextField
                            id="outlined"
                            label="Nr lokalu"
                            variant="outlined"
                            name="nr_mieszkania"
                            value={nr_mieszkania}
                            onChange={(e) => setLokal(e.target.value)}
                        />
                    </Grid>
                    <Grid className={classes.poszczegolnegridy1}>
                        <TextField
                            id="outlined"
                            label="E-mail"
                            variant="outlined"
                            name="mail"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Numer telefonu"
                            variant="outlined"
                            name="nr_telefonu"
                            value={nr_telefonu}
                            ref={register}
                            onChange={(e) => setTelefon(e.target.value)}
                        />
                        <Button className={classes.buton} type="submit">Dodaj adres </Button>
                    </Grid>
                </Paper>
            </Grid>
        </form>
    )
}