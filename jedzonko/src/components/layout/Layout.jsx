import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from '@material-ui/core';
import DodanieRestauracji from "../../dodanieRestauracji/dodanierestauracji";
import Rejestracja from '../../rejestracja/rejestracja';
import WszystkieRestauracje from "../wszystkierestauracje/wszystkierest";
import KrokiZamowienia from "../FormularzZamowienia/krokiZamowienia";
import MainPage from "./Home"; 
import WidokRestauracji from "../restauracja/restauracje"
import LoginView from "../logowanie/logowanie";
import PanelZamowien from '../panelZamowien/panZamowien';
import { Home,Wszystkie,Restauracja,Login,Restauracji,Kroki,panel,Zarejestrowanie,addrest} from "../../paths/Routs";
import PodgladRestauracji from "../podglądRestauracji/podgladrestauracji";
import logo from '../../images/loggo.png'
import PrivateRoute from "../../privateRouter/PrivateRoute";
import AuthService from "../api/auth";
import { useHistory } from "react-router-dom";

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
  const [reload, setReload] = useState(false);
 // let history = useHistory();



  const HandleWyloguj = () =>{
    AuthService.logout()
    window.location.reload();
  }

  


  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FastfoodIcon />
              {/* <Link to="/Home" style={{ textDecoration: 'none' ,color: '#FFF'}}><Button color="inherit"  style={{fontSize: 'large'}}>Jedzonko.pl</Button> </Link>          */}
              <Link to="/Home" style={{ textDecoration: 'none'}}> <img src={logo} alt="logo" width="150" height="25" padding='5'/></Link>
             
          </Typography>  
         <Link to="/zamowieniapanel"style={{ textDecoration: 'none' ,color: '#FFF'}}><Button color="inherit"  style={{textTransform: 'capitalize', fontSize: 'large'}}>Zamówienia</Button> </Link>
         {console.log("AUTH USER",AuthService.getCurrentUser())}
         { 
         (AuthService.getCurrentUser())
        ?
        <Link to="/" style={{ textDecoration: 'none' ,color: '#FFF'}}> <Button onClick={() => HandleWyloguj()} color="inherit" style={{textTransform: 'capitalize', fontSize: 'large'}}>Wyloguj sie</Button> </Link> 
        :
        <Link to="/logowanie"style={{ textDecoration: 'none' ,color: '#FFF'}}> <Button color="inherit" style={{textTransform: 'capitalize', fontSize: 'large'}}>Zaloguj się</Button> </Link>  
         }
          {/* <Link to="/logowanie"style={{ textDecoration: 'none' ,color: '#FFF'}}> <Button color="inherit" style={{textTransform: 'capitalize', fontSize: 'large'}}>{AuthService.getCurrentUser() ? "Logout": "Login"}</Button> </Link>   */}
          </Toolbar>
        </AppBar>
        <Container>
          <Switch>
            <PrivateRoute path={addrest} component={DodanieRestauracji} />
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