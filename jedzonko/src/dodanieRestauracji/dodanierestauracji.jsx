import React, { useState, useEffect } from 'react';
import { Grid, TextField, Paper, Button, Typography, InputLabel, MenuItem, Select } from '@material-ui/core';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useForm } from "react-hook-form";
import apiClient from '../api/apiClient';
import Tabela from './tabela';
import { generate } from "shortid";

export default function DodanieRestauracji() {
    const classes = useStyles();
    const [nazwa, setNazwa] = useState("");
    const [miasto, setMiasto] = useState("");
    const [typ, setTyp] = useState("");
    const [opis, setOpis] = useState("");
    const [data, setData] = useState();
    const[nazwadania,setDanie] = useState("");
    const[cena,setCena] = useState("");
    const[sklad, setSkladniki] = useState("");
    const [restauracje, TypyRestauracji] = React.useState('');
    const[rows,setRows]=useState();
    const handleChangers = (event) => {
        TypyRestauracji(event.target.value);
    };

    const { handleSubmit} = useForm(
        {
            mode: 'onSubmit',
        },
    );


    const DodanieRestauracji = async (form) => {
        await apiClient.post(`http://127.0.0.1:8000/restauracja/`, form);
    };

    const DodanieMenu = async (form) => {
        await apiClient.post(`http://127.0.0.1:8000/pozycja/`, form);
    };

    useEffect(() => {
        const TypyRestauracji = async () => {
            const response = await apiClient.get(`http://127.0.0.1:8000/typrestauracji/`);
            console.log("Odpowiedz", response.data);
            setData(response.data);
            return response.data;
        }
        const restauracje = TypyRestauracji();
    }, []);
    const handleChange = (form) => {
        form.nazwa = nazwa;
        form.miasto = miasto;
        form.typ = typ;
        form.opis = opis;
        DodanieRestauracji(form);
    }

    const handleChange1 = (form) =>{
        form.nazwadania = nazwadania;
        form.cena = cena;
        form.sklad = sklad;
        DodanieMenu(form);
        console.log("form",form)
    }


    return (
        <Grid container spacing={3}>
            <div className={classes.root}>
                <form onSubmit={handleSubmit(handleChange)} >
                    <div className={classes.napis}>Dodanie restauracji</div>
                    <Paper outlined={3}>
                        <div align="center">
                            <Grid item xs={12} sm={6} spacing={3}>
                                <TextField required
                                    id="standard-basic"
                                    label="Nazwa restauracji"
                                    name="nazwa"
                                    value={nazwa}
                                    onChange={(e) => setNazwa(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} spacing={3}>
                                <TextField
                                    required id="standard-basic"
                                    label="Miasto"
                                    name="miasto"
                                    defaultValue=''
                                    value={miasto}
                                    onChange={(e) => setMiasto(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} spacing={2}>
                                <InputLabel required id="demo-simple-select-label" defaultValue=''>Typ Restauracji</InputLabel>
                                <div>
                                    <Select
                                        defaultValue=''
                                        style={{ minWidth: 165 }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={typ}
                                        onChange={(e) => setTyp(e.target.value)}
                                    >
                                        {data?.map((restauracje) => (
                                            <MenuItem key={restauracje.id} value={restauracje.id} >{restauracje.nazwa}</MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </Grid>
                            <div className={classes.rot}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="standard-multiline-flexible"
                                        label="Opis restauracji"
                                        multiline
                                        rowsMax={4}
                                        name="opisrestauracji"
                                        defaultValue=''
                                        value={opis}
                                        onChange={(e) => setOpis(e.target.value)}
                                    />
                                </Grid>
                            </div>
                            <div align='center'>
                                <Button variant="contained" className={classes.button} type="submit"> Dodaj  </Button>
                            </div>
                        </div>
                    </Paper>
                    </form>
                    <form onSubmit={handleSubmit(handleChange1)}>                      
                    <div className={classes.napis}>Dodanie MENU</div>
                    <div align="center">
                        <Paper outlined={3}>
                        <TextField
                            required id="standard-basic"
                            label="Nazwa dania"
                            name="nazwadania"
                            value={nazwadania}
                            className={classes.spejsing}
                            onChange={(e) => setDanie(e.target.value)}
                        />
                        <TextField
                            required id="standard-basic"
                            label="Cena"
                            name="Cena"
                            value={cena}
                            className={classes.spejsing}
                            onChange={(e) => setCena(e.target.value)}
                        />
                        <TextField
                            id="standard-multiline-static"
                            label="Składniki"
                            multiline
                            rows={4}
                            name="sklad"
                            value={sklad}
                            className={classes.spejsing}
                            onChange={(e) => setSkladniki(e.target.value)}
                        />
                           <div align='center'>
                        <Button variant="contained" className={classes.button} type="submit" onSubmit={data => {
          setRows(currentRows => [
            {
              id: generate(),
              ...data
            },
            ...currentRows
          ])}}> Dodaj  </Button>
                    </div>
                    <Tabela rows={[{nazwadania, cena,sklad}]}/>
                        </Paper>
                    <div>
                    </div>
                    </div>
                    </form> 
                    <div align='center'>
                        <Button variant="contained" className={classes.button} type="submit"> Dodaj  </Button>
                    </div>
            </div>
        </Grid>
    );
};