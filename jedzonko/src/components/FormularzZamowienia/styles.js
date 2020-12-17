import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    calykomponent: {
        margin: theme.spacing(4),
        margin: 'auto',
        position: 'relative',
        left: '260px',
        height:'150px',
        widht:'300px'
    },
    poszczegolnegridy: {
        margin: theme.spacing(2)
    },
    poszczegolnegridy1: {
        margin: theme.spacing(2),
        margin: 'auto',
        position: 'relative',
        left: '110px'
    },
    napis: {
        textAlign: 'center',
        color:'#ffa733'
    },
}));
export default useStyles;