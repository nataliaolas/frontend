import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Typography';
import useStyles from './styles';
import Rating from '@material-ui/lab/Rating';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import apiClient from '../../api/apiClient';
import { useHistory, useParams } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function PodgladRestauracji() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [data1, setData1] = React.useState();
  const { restauracjaid } = useParams();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getRestauracja = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/${restauracjaid}`);
    return response.data;
  };
  
  const getMenu = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/menu/${restauracjaid}`);
    return response.data;
  };

  useEffect(() => {
    async function fetchData() {
        const response = await getRestauracja(restauracjaid);
        setData(response);
    }
    // async function fetchData1() {
    //   const response = await getMenu(restauracjaid);
    //   setData1(response);
  // }
    fetchData();
    // fetchData1();
}, []);

useEffect(() => {
  async function fetchData1() {
      const response = await getMenu(restauracjaid);
      setData1(response);
  }
  fetchData1();
}, []);

console.log("nazwa",data ? data.nazwa : "ładowanie");
console.log("nazwa",data ? data.opis : "ładowanie");
console.log("----------------");
console.log("data1: ", data1);
console.log("----------------");
  return (
    <Container>
      <Button color="secondary" onClick={() => history.goBack()} className={classes.back}> <ArrowBackIcon > </ArrowBackIcon>Wróć do widoku wszystkich restauracji </Button>
      <Grid align="center" className={classes.gridy}>
        <TextField id="standard-search" label="Wyszukaj danie" type="search" />
        <Button className={classes.buttonss}>Wyszukaj</Button>
      </Grid>
      <Grid item xs={12} className={classes.gridy}>
        <Typography variant="h4" name="nazwa">{data ? data.nazwa : "ładowanie"}</Typography>
        <Typography variant="body2" gutterBottom>{data ? data.opis : "ładowanie"}</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Button onClick={handleClickOpen} className={classes.buton}>Zobacz Opinie</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Opinie o restauracji:"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid>
                <Rating name="read-only" value={4} readOnly />
                <Typography>super </Typography>
              </Grid>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
              Wyjdź
          </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <div className={classes.root}>
        <Paper>
          <Typography component="h1" variant="h6" className={classes.napis}> Menu restauracji</Typography>
          {data1 ? data1.pozycje.map((pozycja) => (
          <Card className={classes.root} key={pozycja.id} value={pozycja}>
            <CardContent>
              <Typography className={classes.title} name="nazwa" gutterBottom>
              {pozycja.nazwa}
    </Typography>
              <Typography className={classes.title} variant="overline" display="block" name="cena" gutterBottom>
               {pozycja.cena}
    </Typography>
              <Typography className={classes.pos} name="pozycja" color="textSecondary">
                {pozycja.sklad}
    </Typography>
            </CardContent>
          </Card>
          )):"ładowanie"}
          <Link to={`/zamowienie/${restauracjaid}`}>
          <IconButton aria-label="add" size="large" className={classes.napis}>
            Przejdź do złożenia zamówienia
          <AddShoppingCartIcon fontSize="inherit" />
        </IconButton>
        </Link>
        </Paper>
      </div>
    </Container>

  );
}