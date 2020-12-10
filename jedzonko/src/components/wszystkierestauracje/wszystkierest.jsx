import React,{ useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import apiClient from '../api/apiClient';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 505,
    align: 'center',
    margin:theme.spacing(2),
  },
  media: {
    height: 140,
  },
}));

export default function WszystkieRestauracje() {
  const classes = useStyles();
  const [data, setData] = useState();

  useEffect(() => {
    const ListaRestauracji = async () => {
        const response = await apiClient.get(`http://127.0.0.1:8000/restauracja/`);
        console.log("Odpowiedz", response.data);
        setData(response.data);
        return response.data; 
    }
    const restauracje = ListaRestauracji();

}, []);



console.log("zdjecie odpowiedzi: ", data ? data[0].zdjecie : "trollo");
  return (
      <Grid container>
    {data ? data.map((restauracja) => (
    <Grid item xs={6} key={restauracja.id} value={restauracja} className={classes.root}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          src={data ? restauracja.zdjecie : ""}
          name="zdjecie"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" >
            {restauracja.nazwa}
          </Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="customized-empty"
          defaultValue={3.5}
          precision={0.5}
          readOnly
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>
          <Typography variant="body2" color="textSecondary" component="p">
           {restauracja.opis}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
         Zobacz ofertę
        </Button>
      </CardActions>
    </Card>
    </Grid>
       )): "ładowanie"}
       </Grid>
  );

}