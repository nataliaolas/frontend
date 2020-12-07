import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


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
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
    },
    pos: {
        marginBottom: 0,
    },

    koszyk: {
        left: '90%',
        [theme.breakpoints.between('sm', 'md')]: {
            left: '70%'
        },
        [theme.breakpoints.down('sm')]: {
            left: '50%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            left: '60%'
        },
        bottom: 90
    },
}));

export default function SimpleMenu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper>
                <Typography className={classes.menutitle} component="h1"> Menu restauracji</Typography>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Pizza z przytupem
    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Szynka 200g, kokaina 5g, ser 300g
    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.koszyk} size="small">Dodaj do koszyka</Button>
                    </CardActions>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Pizza z przytupem
    </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Szynka 200g, kokaina 5g, ser 300g
    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.koszyk} size="small">Dodaj do koszyka</Button>
                    </CardActions>
                </Card>
            </Paper>
        </div>
    );
}
