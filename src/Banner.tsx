import React from 'react';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import noImage from './no-image.png';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { widget as widgetType } from './api_types';

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

  icon: {
    alignSelf: 'flex-end',
    marginLeft: 5,
  },
});
const Banner: React.FC<widgetType> = (widget) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent className={classes.content}>
        <Typography variant='h5'>{widget.data.title}</Typography>
        <div>
          <Typography className={classes.price} color='textSecondary'>
            {widget.data.description}
          </Typography>
          <Typography className={classes.time} color='textSecondary'>
            time
          </Typography>
        </div>
      </CardContent>
      <Box display='flex' flexDirection='row-reverse'>
        <CardMedia
          className={classes.cover}
          image={widget.data.image || noImage}
        />
        {widget.data.has_chat ? (
          <ChatBubbleOutlineIcon fontSize='small' className={classes.icon} />
        ) : null}
      </Box>
    </Card>
  );
};

export default Banner;
