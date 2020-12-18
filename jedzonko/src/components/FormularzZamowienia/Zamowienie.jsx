import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  zamowienie1:{
    color:'orange',
    fontSize: 18,
},
child: {
    textAlign: 'center',
    fontsize: 24,
    color:'red',
  },

  tableCellTextPadding: {
    padding: theme.spacing(0, 0, 0, 1),
    margin:'center',
    textAlign:'center'
  },
}));

export default function Zamowienie() {
  const classes = useStyles();

  return (
    <Grid className={classes.tableCellTextPadding} xs={12} container>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>CENA ZAMÓWIENIA</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>cena </Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>ZAMÓWIONE DANIA</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>lista pozycji </Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>ADRES DOSTAWY</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>adres  </Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>CZAS DOSTAWY</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>czas dostawy </Typography> </Grid>
</Grid>
  );
}