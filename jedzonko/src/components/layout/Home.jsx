import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
import Głownastrona from "../restauracja/restauracje"
import apiClient from '../../api/apiClient';
import { Link } from "react-router-dom";


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
        padding: "3px",
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
    const[data,setData] = React.useState();
    const[miasto,setMiasto] = React.useState("");
    const[nazwa,setNazwa] =  React.useState("");
    

    useEffect(() => {
        const TypyRestauracji = async () => {
            const response = await apiClient.get(`http://127.0.0.1:8000/typrestauracji/`);
            console.log("Odpowiedz", response.data);
            setData(response.data);
            return response.data;
        }
        const restauracje = TypyRestauracji();
    }, []);

   const TypRestauracjiFiltr = async(nazwa) =>{
       const response = await apiClient.get(`http://127.0.0.1:8000/typrestauracji/?nazwa=${nazwa}`);
       console.log("response: ", response.data);
   };


   const handleTypChange = (event) => {
    setNazwa(event.target.value);
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
                                placeholder="Miasto"
                                // value={miasto} 
                                // onChange={handleMiastoChange}
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
                            <Select className={classes.select}  autoWidth>
                                {data?.map((typ) => (
                                        <MenuItem key={typ.id} value={typ.id}  onChange={handleTypChange}>{typ.nazwa}</MenuItem>
                                    ))}
                            </Select>
                        </FormControl>
                    </Paper>
                </Grid>
                <Grid item xs={0}>
                    <Paper className={classes.paper}>
                        <Link to={`/wszystkierestauracje`}>
                        <Button className={classes.button}  onClick={() => TypRestauracjiFiltr(nazwa)}>
                            Wyszukaj
                        </Button>
                        </Link>
                    </Paper>
                </Grid>

            </Grid>
        <Grid className={classes.grid} container spacing={1}>
              <Głownastrona></Głownastrona>                      

        </Grid>
        </div>
    );
}