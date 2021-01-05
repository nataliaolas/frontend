import React,{useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import apiClient from '../api/apiClient';
import { useParams } from 'react-router-dom';

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
  const {restauracjaid} = useParams();
  const[data,setData] = React.useState();


  const getZamowienie = async(restauracjaid) =>{
    const response = await apiClient.get(`http://127.0.0.1:8000/zamowienie/${restauracjaid}`);
    return response.data;
  };

  useEffect(() => {
    async function fetchData() {
        const response = await getZamowienie(restauracjaid);
        setData(response);
    }
    fetchData();
}, []);

  return (
    <Grid className={classes.tableCellTextPadding} item xs={12} container>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>CENA ZAMÓWIENIA</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>{data ? data.cena_zamowienia:"ładowanie"} </Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>ZAMÓWIONE DANIA</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>{data ? data.pozycje:"ładowanie"}</Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>ADRES DOSTAWY</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>adres adres adres</Typography> </Grid>
    <Grid item xs={6}><Typography color="textSecondary" className={classes.zamowienie1}>CZAS DOSTAWY</Typography> </Grid>
    <Grid item xs={6}> <Typography gutterBottom className={classes.child}>{ data ? data.przyblizony_czas_dostawy:"ładowanie"} </Typography> </Grid>
</Grid>
  );
}