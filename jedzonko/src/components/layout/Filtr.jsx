import React, { useEffect, useState } from 'react';
import {
  TextField,
  Grid,
  Paper,
  FormControl,
  Container,
  Button
} from "@material-ui/core";
import apiClient from '../../api/apiClient';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 505,
    align: 'center',
    margin:theme.spacing(2),
  },
  media: {
    height: 140,
  },
  buttonw:{
    backgroundColor:'#ffa733'
  }
}));


function Filtr(props) {
  const [nazwa, setNazwa] = React.useState("");
  const [miasto, setMiasto] = React.useState("");
  const classes=useStyles();



  const NazwaFiltr = async (nazwa) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/?nazwa=${nazwa}`);
    console.log("response: ", response.data);
    props.parentCallBack(response.data);
  };

  // const MiastoFiltr = async (miasto) => {
  //   const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/?miasto=${miasto}`);
  //   console.log("response:",response.data);
  //   props.parentCallBack(response.data);
  // };
  const handleNazwaChange = (event) => {
    setNazwa(event.target.value);
  };
  // const handleMiastoChange = (event) => {
  //   setMiasto(event.target.value);
  // };
  return (
    <FormControl
    >
      <Grid >
        <Container component="main" maxWidth="lg">
          <Grid item xs={6}>
          <TextField id="standard-search" label="Nazwa" type="search" name="nazwa"
             value={nazwa} onChange={handleNazwaChange} />
             <Button onClick={() => NazwaFiltr(nazwa)} className={classes.buttonw} > Wyszukaj</Button> 
             </Grid>
             {/* <Grid item xs={6}>
           <TextField id="standard-search" label="Miasto" type="search" name="miasto"
             value={miasto} onChange={handleMiastoChange}/>
           <Button onClick={() => MiastoFiltr(miasto)} className={classes.buttonw}> Wyszukaj </Button> 
           </Grid> */}
        </Container>
      </Grid>
    </FormControl>

  )
};
export default Filtr;