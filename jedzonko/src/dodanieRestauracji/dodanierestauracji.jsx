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
    const [nazwadania, setDanie] = useState("");
    const [cena, setCena] = useState("");
    const [sklad, setSkladniki] = useState("");
    const [nr_budynku, setBudynek] = useState("");
    const [ulica, setUlica] = useState("");
    const [restauracje, TypyRestauracji] = React.useState('');
    const [restuaracja_id, setRestauracjaId] = useState();
    const [menu_id, setMenuId] = useState();
    const [rows, setRows] = useState([]);
    const [open, setOpen] = useState(false);
    const handleChangers = (event) => {
        TypyRestauracji(event.target.value);
    };

    const { handleSubmit } = useForm(
        {
            mode: 'onSubmit',
        },
    );

    const DodanieRestauracji = async (form) => {
        var adresy = {
            "miasto": form.miasto,
            "ulica": form.ulica,
            "nr_budynku": form.nr_budynku,
        }
        var data = {
            "nazwa": nazwa,
            "adresy": adresy,
            "typ": form.typ,
            "opis": form.opis,
        }
       // var response = 
       await apiClient.post(`http://127.0.0.1:8000/restauracja/`, data)
        .then(
            response => {
                console.log("RESTAURACJA RESPONSE: ", response);
           //     setRestauracjaId(response.data.id);
                console.log("RESTAURACJA ID: ", response.data.id);
                DodanieMenu(response.data.id);
            }
        )
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
        // console.log("RESTAURACJA RESPONSE: ", response);
        // setRestauracjaId(response.data.id);
        // console.log("RESTAURACJA ID: ", restuaracja_id);
        // DodanieMenu(restuaracja_id);

        setOpen(true);
    };

    // const DodanieRestauracji = async (form) => {
    //     await apiClient.post(`http://127.0.0.1:8000/restauracja/`, form);
    // };

    const DodaniePozycji = async (form) => {

    //    let response = 
       await apiClient.post(`http://127.0.0.1:8000/pozycja/`, form).then(response =>{
        console.log("POZYCJA RESPONSE", response.data);
       })
       .catch(err => {
        // Handle Error Here
        console.error(err);
    });
    };

    const DodanieMenu = async (form) => {
        var restaruacja_w_menu = {
            "restauracja": form
        }
        form = restaruacja_w_menu;
        // var response = 
        await apiClient.post(`http://127.0.0.1:8000/menu/`, form)
        .then(response => {
            console.log("MENU RESPONSE:", response);
            //setMenuId(response.data.id);
            console.log("MENU ID:", response.data.id);
            for (let pozycja of rows) {
                pozycja.menu = response.data.id;
                console.log("POZYCJA: ", pozycja);
                DodaniePozycji(pozycja);
    
            }
        })
        .catch(err => {
            // Handle Error Here
            console.error(err);
        });
        // console.log("MENU RESPONSE:", response);
        // setMenuId(response.data.id);
        // console.log("MENU ID:", menu_id);
        // for (let pozycja of rows) {
        //     pozycja.menu = menu_id;
        //     console.log("POZYCJA: ", pozycja);
        //     DodaniePozycji(pozycja);

        // }

    }

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
        form.ulica = ulica;
        form.nr_budynku = nr_budynku;
        form.typ = typ;
        form.opis = opis;
        DodanieRestauracji(form);
        // for (let pozycja of rows) {
        //     pozycja.menu = menu_id;
        //     console.log("POZYCJA: ", pozycja);
        //     DodaniePozycji(pozycja);

        // }
        // form.nazwadania = nazwadania;
        // form.cena = cena;
        // form.sklad = sklad;
        // DodaniePozycji(form);
        // console.log("ROWS PRZY WRZUCANIU DO API", rows);
    }

    // const handleChange1 = (form) =>{
    //     form.nazwadania = nazwadania;
    //     form.cena = cena;
    //     form.sklad = sklad;
    //     DodaniePozycji(form);
    //     console.log("form",form)
    // }

    const handleTable = (nazwadania, cena, sklad) => {
        console.log("W srodku clicka:", nazwadania, " ", cena, " ", sklad);
        const pozycja = {
            'id': generate(),
            'nazwadania': nazwadania,
            'cena': cena,
            'sklad': sklad
        }
        setRows(rows.concat(pozycja));

        setDanie("");
        setCena("");
        setSkladniki("");


    }

    return (
        <Grid container spacing={3}>
            <div className={classes.root}>
                <form onSubmit={handleSubmit(handleChange)} >
                    <div className={classes.napis}>Dodanie restauracji</div>
                    <Paper outlined={3}>
                        <div align="center">
                            <Grid item xs={12} sm={6} spacing={3}>
                                <input
                                    accept="image/*"
                                    defaultValue=''
                                    className={classes.rot}
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    backgroundColor="#190423"
                                    name="zdjecie"
                                />
                            </Grid>
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
                            <Grid item xs={12} sm={3} spacing={3}>
                                <TextField
                                    required id="standard-basic"
                                    label="Ulica"
                                    name="ulica"
                                    defaultValue=''
                                    value={ulica}
                                    onChange={(e) => setUlica(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={3} spacing={3}>
                                <TextField
                                    required id="standard-basic"
                                    label="Numer ulicy"
                                    name="nr_budynku"
                                    defaultValue=''
                                    value={nr_budynku}
                                    onChange={(e) => setBudynek(e.target.value)}
                                />
                            </Grid>
                            {/* <Grid item xs={12} sm={3} spacing={3}>
                                <TextField
                                    required id="standard-basic"
                                    label="Numer mieszkania"
                                    name="nr_mieszkania"
                                    defaultValue=''
                                    value={nr_mieszkania}
                                    onChange={(e) => setMieszkanie(e.target.value)}
                                />
                            </Grid> */}
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
                        </div>
                    </Paper>
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
                                <Button variant="contained" className={classes.button} onClick={
                                    (e) => handleTable(nazwadania, cena, sklad)
                                    //   () => setRows(currentRows => [
                                    //     {
                                    //       id: generate(),
                                    //       ...data
                                    //     },
                                    //     ...currentRows
                                    //   ])}
                                }> Dodaj  </Button>
                                {/* {console.log("ROWS PRZED TABELA:", rows)} */}
                            </div>
                            <Tabela rows={rows} setRows={setRows} /> {/* [{nazwadania, cena,sklad}] */}
                        </Paper>
                        <div>
                        </div>
                    </div>
                    <div align='center'>
                        <Button variant="contained" className={classes.button} type="submit" > Dodaj  </Button>
                    </div>
                </form>
            </div>
        </Grid>
    );
};