import { Button } from '@material-ui/core';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonMain: {
      color: 'white',
      margin: '30px auto',
      backgroundColor: '#a62626',
      padding: '5px 10px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      '&:hover': {
        backgroundColor: '#be3737',
      },
    },
  })
);

const LoadMore = () => {
  const classes = useStyles();
  return (
    <div style={{ margin: 'auto' }}>
      <Button className={classes.buttonMain}>بارگذاری بیشتر </Button>
    </div>
  );
};

export default LoadMore;
