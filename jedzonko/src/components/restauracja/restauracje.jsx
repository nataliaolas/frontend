import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import food from '../../images/food.jpg';
import food2 from '../../images/food2.jpg';
import food3 from '../../images/food3.jpg';
import food4 from '../../images/food4.jpg';
import food5 from '../../images/food5.jpg';
import food6 from '../../images/food6.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: food,
   title: 'Pizzeria La Bomba',
   cols: 2,
  },
  {
   img: food2,
   title: 'Chicken Dinner House',
   cols: 2,   
  },
  {
   img: food3,
   title: 'Burger Queen',
   cols: 2,   
  },
  {
    img: food4,
    title: 'Sushimi',
    cols: 2,   
   },
   {
    img: food5,
    title: 'Thai Woking',
    cols: 2,   
   },
   {
    img: food6,
    title: 'Tortilla Party',
    cols: 2,   
   },
  

];
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}