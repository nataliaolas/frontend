import { makeStyles } from "@material-ui/core";
import food from '../api/apiClient';

 const useStyles = makeStyles((theme) => ({
    napis:
    {
        color: '#ffa733',
        margin: theme.spacing(6),
        width: '25ch',
        margin: 'auto',
        fontSize: '25px',
        fontFamily: 'Open Sans',
        align: 'center',

    },
    root: {
        margin: 'auto',
        position: 'relative',
        top:'100px',
        width: '900px',
        height: '800px',
        backgroundImage: `url(${food})`
    },
    button: {
        backgroundColor: '#ffa733',
        margin: theme.spacing(2),
        align: 'center',
        fontSize: '18px',
        color: 'white'
    },
    button1: {
        backgroundColor: '#ffa733',
        margin: theme.spacing(2),
        align: 'center',

    },
    glownydiv: {
        textAlign: 'center'
    },
    rot: {
        padding: theme.spacing(4),
        color:'#ffa733'

    },
    rotx: {
        padding: theme.spacing(2),
        color:'#ffa733'
    },
    fab:{
        margin: theme.spacing(2),
         color:'#ffa733',
        align:'right'
    },
    spejsing:{
        margin:theme.spacing(4)
    }
}));
 export default useStyles;