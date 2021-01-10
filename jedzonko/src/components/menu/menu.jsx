import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory, useParams } from 'react-router-dom';
import apiClient from '../../api/apiClient';
import { LensTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: 275,
        marginBottom: 12,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    menutitle: {
        fontSize: 24,
        textAlign: 'center',
        color:'#ffa733'
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 0,
    },

    koszyk: {
        backgroundColor:'#ffa733',
        left: '70%',
        [theme.breakpoints.between('sm', 'md')]: {
            left: '40%'
        },
        [theme.breakpoints.down('sm')]: {
            left: '30%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            left: '40%'
        },
        bottom: 120
    },
    but:{
        backgroundColor:'#ffa733',
    }
}));

export default function SimpleMenu() {
    const classes = useStyles();
    const { restauracjaid } = useParams();
    const [data, setData] = React.useState();
    const [count, setCount] = useState(0);
    const [koszyk, setKoszyk] = useState([])

    const getMenu = async (restauracjaid) => {
        const response = await apiClient.get(`http://127.0.0.1:8000/menu/?restauracja=${restauracjaid}`);
        
        return response.data;
    };

    const dodajPozycje = async() =>{
        const response = await apiClient.post(`http://127.0.0.1:8000/zamowienie/`);
    };

    useEffect(() => {
        async function fetchData() {
            const response = await getMenu(restauracjaid);
            console.log("LOG FROM FETCH");
            console.log("DATA FROM FETCH", response);
            setData(response);
            
        }
        fetchData();
    }, []);

    const DodajDoKoszyka = (nazwadania, cena, sklad) =>{
        const pozycja = {
            'nazwadania': nazwadania,
            'cena': cena,
            'sklad': sklad
        }
        setKoszyk(koszyk.concat(pozycja));
        setCount(count+1);
    }
    const UsunZKoszyka = (nazwa, cena, sklad) =>{
        let tmp = koszyk.filter(koszyk => { return koszyk.nazwadania === nazwa});
        tmp.pop();
        console.log("TMP PO POPIE", tmp);
        if (tmp.length >= 0)
        {
            console.log("KOSZYK PRZED FILTREM", koszyk);
            let tmp_length = 1;
            if(tmp.length>1)
            {
                tmp_length = tmp.length-1;
            }
            console.log("TMP LENGTH", tmp_length);
            let new_koszyk = koszyk.filter(koszyk => { return koszyk.nazwadania !== nazwa});
            console.log("NOWY KKOSZYK", new_koszyk);
            for(let i =0; i<tmp_length; i++)
              {
                new_koszyk.push(tmp[i]);
                // setKoszyk(
                //         koszyk.filter(koszyk => { return koszyk.nazwadania !== nazwa})
                // );
                
                console.log("TMP W FORZE", tmp[i]);
              }
              setKoszyk(new_koszyk);

            // setKoszyk(
            //     koszyk.filter(koszyk => { return koszyk.nazwadania !== nazwa})
            //   );
            //    console.log("KOSZYK PO FILTRZE", koszyk);
               
            //   for(let i =0; i<tmp.length; i++)
            //   {
            //     const pozycja = {
            //         'nazwadania': nazwa,
            //         'cena': cena,
            //         'sklad': sklad
            //     }
            //     setKoszyk(koszyk.concat(pozycja));
            //   }
            // for (let pozycja of tmp)
            // {
            //     setKoszyk(koszyk.concat(pozycja));
            // }
            //  console.log("KOSZYK PO DODANIU TMP", koszyk.filter(koszyk => { return koszyk.nazwadania === nazwa}).length);
              setCount(count-1);            
        }

    }

    return (
        <div className={classes.root}>
            <Paper>
                <Typography className={classes.menutitle} component="h1"> Menu restauracji</Typography>
                {console.log("DATA NA STRONIE", data ? data[0].pozycje : 0)}
                {data ? data[0].pozycje?.map((pozycja) => (
                    <Card className={classes.root} value={pozycja} key={pozycja.id}>
                        <CardContent>
                            <Typography className={classes.title} variant="subtitle2">
                                {pozycja.nazwadania}
                            </Typography>
                            <Typography className={classes.title} name="cena" variant="h7">
                               Cena: {pozycja.cena} zł
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {pozycja.sklad}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Paper elevation={3}>
                 <p>{
                 console.log("KOSZYK W P", koszyk ? koszyk : 0)}
                 {(koszyk === undefined)
                  ? 0
                  : koszyk.filter(koszyk => { return koszyk?.nazwadania === pozycja.nazwadania}).length}</p>
                 {/* <p>{ count}</p> */}
                 <Button onClick={() => DodajDoKoszyka(pozycja.nazwadania,pozycja.cena, pozycja.sklad)} className={classes.but}>
                Dodaj do koszyka
                 </Button>
                 <Button onClick={() => UsunZKoszyka(pozycja.nazwadania,pozycja.cena, pozycja.sklad)} className={classes.but}>
                Usuń z koszyka
                 </Button>
                 </Paper>
                        </CardActions>
                    </Card>
                )) : "ładowanie"}
            </Paper>
        </div>
    );
}
