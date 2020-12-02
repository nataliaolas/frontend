import React, { useState, useEffect } from 'react';
import { Grid, TextField, Paper, Button,  Typography, InputLabel,MenuItem,Select } from '@material-ui/core';
import useStyles from './styles';



export default function DodanieRestauracji() {
    const classes = useStyles();
   

    return (
        <form >
            <Grid container spacing={3}>
                <Paper className={classes.root}>
                    <div className={classes.napis}>Dodanie restauracji</div>
                    <div align="center">
                        <Grid item xs={12} sm={6}>
                            <TextField required
                                id="standard-basic"
                                label="Nazwa restauracji"
                                name="nazwa"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required id="standard-basic"
                                label="Miasto"
                                name="miasto"
                                defaultValue=''
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
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
                        <div className={classes.napis}>Dodanie MENU</div>         

                    </div>                
                    <div align='center'>
                        <Button variant="contained" className={classes.button} type="submit"> Dodaj  </Button>
                    </div>
                </Paper>
            </Grid>
        </form>
    );
};