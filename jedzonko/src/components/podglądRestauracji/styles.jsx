import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    buttonss:{
        top:'50px',
        right:'70px'
    },
    gridy:{
        margin:theme.spacing(4)
    },
    root: {
        width: '100%',
        minWidth: 275,
        marginBottom: 12,
    },
}));


export default useStyles;
