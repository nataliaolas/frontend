import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        width: '80ch',
        margin: 'auto',
        position: 'relative',
        align:'center',
        top:'150px'
    },
    napis:
    {
      color: '#feb236',
      margin: theme.spacing(2),
      width: '25ch',
      margin: 'auto',
      fontSize: '25px',
      fontFamily: 'Open Sans',
      textAlign: 'center'
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(2),
      margin:theme.spacing(3),
      width: 200,
      textAlign: 'center'
    },
    button: {
      backgroundColor: '#feb236',
      position:'abolute',
      left:'200px',
      margin: theme.spacing(2),
      fontSize: '20px',
      align:'center'
    },
}));

export default useStyles;