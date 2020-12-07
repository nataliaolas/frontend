import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: '30px',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(50),
        marginLeft: 0,
        width: '100%',

    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    grid: {
        position: 'relative',
        justifyContent: 'center',
        top: '100px',
    },
    select: {
        position: 'relative',
        width: '100%',
    },
    button: {
        position: 'relative',
        textAlign: 'center',  
    }
}));


export default function MainPage() {

    const classes = useStyles();

    const [cuisine, setCuisine] = React.useState('');

    const handleChange = (event) => {
        setCuisine(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid className={classes.grid} container spacing={1} >
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Miasto, np. Częstochowa"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <FormControl className={classes.margin}>
                            <Select className={classes.select} value={cuisine} onChange={handleChange} autoWidth>
                                <MenuItem value=""><em>Wszystkie Kuchnie</em></MenuItem>
                                <MenuItem value={"Kuchnia Polska"}>Kuchnia Polska</MenuItem>
                                <MenuItem value={"Kuchnia Azjatycka"}>Kuchnia Azjatycka</MenuItem>
                                <MenuItem value={"Kuchnia Włoska"}>Kuchnia Włoska</MenuItem>
                                <MenuItem value={"Kuchnia DŁUGICH NAZW DAN"}>Kuchnia DŁUGICH NAZW DAN</MenuItem>
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={0}>
                    <Paper className={classes.paper}>
                        <Button className={classes.button}>
                            Wyszukaj
                        </Button>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}