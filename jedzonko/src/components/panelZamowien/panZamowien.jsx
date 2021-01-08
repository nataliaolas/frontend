import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import apiClient from '../../api/apiClient';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  napis: {
    textAlign: 'center',
    color:'#ffa733',  
},
});

export default function PanelZamowien() {
  const classes = useStyles();
  const[data,setData] = React.useState();
  useEffect(() => {
    const ListaZamowien = async () => {
        const response = await apiClient.get(`http://127.0.0.1:8000/zamowienie/`);
        console.log("Odpowiedz", response.data);
        setData(response.data);
        return response.data; 
    }
    const zamowienia= ListaZamowien();

}, []);

  return (
    <div className={classes.root}>
        <Typography className={classes.napis} variant="h4" display="block" gutterBottom> Panel Zamówień </Typography>
        {data ? data.map((zamowienia) => (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            key={zamowienia.id}
           value={zamowienia}
            label="Zamowienie 1"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.napis}>
            Zamówienie:
          </Typography>
          <Typography color="textSecondary" variant="h6">
           {zamowienia.pozycje}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.napis}>
            Adres klienta:
          </Typography>
          <Typography color="textSecondary" variant="h6">
           {zamowienia.klient}
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className={classes.napis}>
            Forma płatności oraz cena:
          </Typography>
          <Typography color="textSecondary" variant="h6">
            {zamowienia.cena_zamowienia} zł
          </Typography>
        </AccordionDetails>
      </Accordion>
       )): "ładowanie"};
    </div>
  );
}