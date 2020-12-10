import React,{useState} from 'react';
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


export default function PodgladRestauracji(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <Container>
        <Grid align="center" className={classes.gridy}>
        <TextField id="standard-search" label="Wyszukaj restauracje" type="search" />
        <Button className={classes.buttonss}>Wyszukaj</Button>
        </Grid>
        <Grid item xs={12} className={classes.gridy}>
            <Typography variant="h4">Nazwa restauracji</Typography>
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
        </Container>
        
    );
}