import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 170,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
  },
  content: {
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cover: {
    width: 150,
    height: 145,
    objectFit: 'contain',
    borderRadius: 4,
    marginLeft: 12,
  },
});
function Banner() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.content}>
        <Typography variant='h5'>title</Typography>
        <div>
          <Typography className={classes.price} color='textSecondary'>
            price
          </Typography>
          <Typography className={classes.time} color='textSecondary'>
            time
          </Typography>
        </div>
      </CardContent>
      <CardMedia
        className={classes.cover}
        image='https://s100.divarcdn.com/static/pictures/1614531970/wXNy5CSB.webp'
      />
    </Card>
  );
}

export default Banner;
