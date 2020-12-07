import { makeStyles } from "@material-ui/core";
import food from '../api/apiClient';

 const useStyles = makeStyles((theme) => ({
    napis:
    {
        color: '#f09559',
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
        backgroundColor: '#f09559',
        margin: theme.spacing(2),
        align: 'center',
        fontSize: '18px',
        color: 'white'
    },
    button1: {
        backgroundColor: '#502664',
        margin: theme.spacing(2),
        align: 'center',

    },
    glownydiv: {
        textAlign: 'center'
    },
    rot: {
        padding: theme.spacing(4),
        color: '#f09559',

    },
    rotx: {
        padding: theme.spacing(2),
        color: '#f09559',
    },
    fab:{
        margin: theme.spacing(2),
        color: '#f09559',
        align:'right'
    },
    spejsing:{
        margin:theme.spacing(4)
    }
}));
 export default useStyles;