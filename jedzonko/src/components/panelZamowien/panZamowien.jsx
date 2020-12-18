import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

  return (
    <div className={classes.root}>
        <Typography className={classes.napis} variant="h4" display="block" gutterBottom> Panel Zamówień </Typography>
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
            label="Zamowienie 1 "
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            Zamówienie:
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography color="textSecondary">
            Adres klienta:
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography color="textSecondary">
            Forma płatności oraz cena:
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}