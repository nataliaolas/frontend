import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import Rejestracja from '../../rejestracja/rejestracja';
import WszystkieRestauracje from "../wszystkierestauracje/wszystkierest";
import KrokiZamowienia from "../FormularzZamowienia/krokiZamowienia";
import MainPage from "./Home"; 
import WidokRestauracji from "../restauracja/restauracje"
import LoginView from "../logowanie/logowanie";
import PanelZamowien from '../panelZamowien/panZamowien';
import { Home,Wszystkie,Restauracja,Login,Restauracji,Kroki,panel,Zarejestrowanie} from "../../paths/Routs";
import PodgladRestauracji from "../podglądRestauracji/podgladrestauracji";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    left: '-575px',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  appbar: {
    backgroundColor: '#ffa733',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FastfoodIcon />
            Jedzonko.pl
          </Typography>  
         <Link to="/zamowieniapanel"><Button color="inherit" >Zamowienia</Button> </Link>         
          <Link to="/logowanie"> <Button color="inherit">Login</Button> </Link>  
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <Route path={Zarejestrowanie} component={Rejestracja}/>
            <Route path={Wszystkie} component={WszystkieRestauracje}/>
            <Route path={Kroki} component={KrokiZamowienia} />
            <Route path={ Restauracja } component = { WidokRestauracji } />
            <Route path={ Login } component = { LoginView }/>
            <Route path={panel}  component={PanelZamowien} />          
            <Route path={Restauracji} component={PodgladRestauracji}/>
            <Route path={ Home } component = { MainPage }/>
          </Switch>
        </Container>        
      </div>
    </Router>
  );
}