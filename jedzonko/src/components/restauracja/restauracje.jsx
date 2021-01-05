import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import food from '../../images/food.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';
import food4 from '../../images/food4.jpg';
import food5 from '../../images/food5.jpg';
import food6 from '../../images/food6.jpg';
import czewa from '../../images/czewa.jpg';
import wawa from '../../images/wawa.jpg';
import kato from '../../images/kato.jpg';
import krk from '../../images/krk.jpg';
import wro from '../../images/wro.jpg';
import gdak from '../../images/gdak.jpg';
import { Typography,Grid } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  napis:{
    color:'#ffa733'
},
}));

const tile = [
  {
    img: food,
   title: 'Kuchnia włoska',
   cols: 2,
  },
  {
   img: food2,
   title: 'Kuchnia polska',
   cols: 2,   
  },
  {
   img: food3,
   title: 'Kuchnia Amerykańska',
   cols: 2,   
  },
  {
    img: food4,
    title: 'Sushi',
    cols: 2,   
   },
   {
    img: food5,
    title: 'Kuchnia Japońska',
    cols: 2,   
   },
   {
    img: food6,
    title: 'Kuchnia meksykańska',
    cols: 2,   
   },
  

];
const miasta = [

  {
    img: czewa,
   title: 'Częstochowa',
   cols: 2,
  },
  {
   img: wawa,
   title: 'Warszawa',
   cols: 2,   
  },
  {
   img: kato,
   title: 'Katowice',
   cols: 2,   
  },
  {
    img: krk,
    title: 'Kraków',
    cols: 2,   
   },
   {
    img: wro,
    title: 'Wrocław',
    cols: 2,   
   },
   {
    img: gdak,
    title: 'Gdańsk',
    cols: 2,   
   },
]

export default function Głownastrona() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid justify="space-between">
      <Typography variant="h5" className={classes.napis}>Każdy rodzaj restauracji na jaki masz ochotę </Typography>
      </Grid>
      <GridList className={classes.gridList} cols={2.5}>
        {tile.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Typography variant="h5"  className={classes.napis}>Wszystkie miasta w jednym miejscu </Typography>
      <GridList className={classes.gridList} cols={2.5}>
        {miasta.map((miasta) => (
          <GridListTile key={miasta.img}>
            <img src={miasta.img} alt={miasta.title} />
            <GridListTileBar
              title={miasta.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <Link to={`/wszystkierestauracje`}> <Typography variant="h5"  className={classes.napis}>Przejdź do widoku wyboru restauracji!<FastfoodIcon></FastfoodIcon> </Typography></Link>
    </div>
  );
}

