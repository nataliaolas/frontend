import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        width: '80ch',
        margin: 'auto',
        position: 'absolute',
    },
    napis:
    {
      color: '#190423',
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
      backgroundColor: '#190423',
      margin: theme.spacing(2),
      color: 'white',
      fontSize: '18px',
      textAlign:'center'
    },
}));

export default useStyles;