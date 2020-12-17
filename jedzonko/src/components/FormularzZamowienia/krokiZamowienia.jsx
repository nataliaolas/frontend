import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Formularz from './formularzZamowienia';
import { Paper } from '@material-ui/core';
import SimpleMenu from '../menu/menu';
import MainPage from '../layout/Home';
import Platnosc from './Platnosc';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Zamowienie from './Zamowienie';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor:'#ffa733'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button1:
  {
    backgroundColor:'#ffa733'
  },
  napisyczycos:{
    color:'#ffa733'
  }
}));

function getSteps() {
  return ['Stwórz zamówienie', 'Dodaj adres', 'Zapłać za zamówienie'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <SimpleMenu/>;
    case 1:
      return <Formularz/>;
    case 2:
      return <Platnosc/>;
    default:
      return <MainPage/>;
  }
}

export default function KrokiZamowienia() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
            <Button color="secondary" onClick={() => history.goBack()} className={classes.back}> <ArrowBackIcon > </ArrowBackIcon>Wróć do widoku restauracji </Button>
      <Paper elevation={3}>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}><Zamowienie/> </Typography>
            <Button onClick={handleReset} className={classes.napisyczycos}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                type="submit"
              >
                Powrót
              </Button>
              <Button variant="contained" className={classes.button1} onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Koniec' : 'Następny'}
              </Button>
            </div>
          </div>
        )}
      </div>
      </Paper>
    </div>
  );
}