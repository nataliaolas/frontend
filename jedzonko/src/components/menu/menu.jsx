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
        bottom: 70
    },
}));

export default function SimpleMenu() {
    const classes = useStyles();
    const { restauracjaid } = useParams();
    const [data, setData] = React.useState();

    const getMenu = async (restauracjaid) => {
        const response = await apiClient.get(`http://127.0.0.1:8000/menu/${restauracjaid}`);
        return response.data;
    };

    useEffect(() => {
        async function fetchData() {
            const response = await getMenu(restauracjaid);
            setData(response);
        }
        fetchData();
    }, []);

    return (
        <div className={classes.root}>
            <Paper>
                <Typography className={classes.menutitle} component="h1"> Menu restauracji</Typography>
                {data ? data.pozycje.map((pozycja) => (
                    <Card className={classes.root} value={pozycja} key={pozycja.id}>
                        <CardContent>
                            <Typography className={classes.title} variant="subtitle2">
                                {pozycja.nazwa}
                            </Typography>
                            <Typography className={classes.title} name="cena" variant="h7">
                                {pozycja.cena}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {pozycja.sklad}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.koszyk} size="small">Dodaj do koszyka</Button>
                        </CardActions>
                    </Card>
                )) : "ładowanie"}
            </Paper>
        </div>
    );
}
