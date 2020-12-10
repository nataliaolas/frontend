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

export default function PodgladRestauracji() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const { restauracjaid } = useParams();

  const getRestauracja = async (restauracjaid) => {
    const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/${restauracjaid}`);
    return response.data;
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
        const response = await getRestauracja(restauracjaid);
        setData(response);
    }
    fetchData();
}, []);
console.log("nazwa",data ? data.nazwa : "ładowanie");
console.log("nazwa",data ? data.opis : "ładowanie");
  return (
    <Container>
      <Grid align="center" className={classes.gridy}>
        <TextField id="standard-search" label="Wyszukaj danie" type="search" />
        <Button className={classes.buttonss}>Wyszukaj</Button>
      </Grid>
      <Grid item xs={12} className={classes.gridy}>
        <Typography variant="h4" name="nazwa">{data ? data.nazwa : "ładowanie"}</Typography>
        <Typography variant="body2" gutterBottom>{data ? data.opis : "ładowanie"}</Typography>
        <Rating name="read-only" value={4} readOnly />
        <Button onClick={handleClickOpen}>Zobacz Opinie</Button>
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
          <Typography className={classes.menutitle} component="h1"> Menu restauracji</Typography>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Pizza
    </Typography>
              <Typography className={classes.title} variant="overline" display="block" gutterBottom>
               25 zł
    </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Szynka 200g, ser 300g
    </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} gutterBottom>
                Burger
    </Typography>
    <Typography className={classes.title} variant="overline" display="block" gutterBottom>
               30 zł
    </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Mieso wołowe 200g, ser 300g
    </Typography>
            </CardContent>
          </Card>
        </Paper>
      </div>
    </Container>

  );
}