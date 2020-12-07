import React, { useState, useEffect } from 'react';
import { Grid, TextField, Paper, Button, Typography, InputLabel, MenuItem, Select } from '@material-ui/core';
import useStyles from './styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import { useForm } from "react-hook-form";

export default function DodanieRestauracji() {
    const classes = useStyles();
    const { handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form >
            <Grid container spacing={3}>
                <Paper className={classes.root}>
                <form >
                    <div className={classes.napis}>Dodanie restauracji</div>
                    <Paper outlined={3}>
                        <div align="center">
                            <Grid item xs={12} sm={6} spacing={3}>
                                <TextField required
                                    id="standard-basic"
                                    label="Nazwa restauracji"
                                    name="nazwa"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} spacing={3}>
                                <TextField
                                    required id="standard-basic"
                                    label="Miasto"
                                    name="miasto"
                                    defaultValue=''
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
                                    >
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
                                    />
                                </Grid>
                            </div>
                        </div>
                    </Paper>
                    <div className={classes.napis}>Dodanie MENU</div>
                    <Paper outlined={3}>
                        <div align="center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid direction="row" xs={12}>
                        <Grid item xs={3} spacing={2}>
                            <TextField
                                required id="standard-basic"
                                label="Nazwa dania"
                                name="Nazwa"
                                defaultValue=''
                            />
                        </Grid>
                        <Grid item xs={3}  spacing={2}>
                            <TextField
                                required id="standard-basic"
                                label="Cena"
                                name="Cena"
                                defaultValue=''
                            />
                        </Grid>
                        <Grid item xs={3} spacing={2}>
                            <TextField
                                id="standard-multiline-static"
                                label="Składniki"
                                multiline
                                rows={4}
                            />
                        </Grid>
                        <div>
                            <Tooltip title="Dodaj" aria-label="add">
                                <Fab color="default" size="small" type="submit">
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                        </Grid>
                        </form>
                        </div>
                    </Paper>
                    <div align='center'>
                        <Button variant="contained" className={classes.button} type="submit"> Dodaj  </Button>
                    </div>
                    </form>
                </Paper>
            </Grid>
        </form>
    );
};