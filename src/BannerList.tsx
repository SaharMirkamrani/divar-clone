import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banner from './Banner';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '80%',
    },
    spacing: {
      padding: theme.spacing(1),
    },
  })
);

export default function BannerList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {Array(8)
          .fill(1)
          .map(() => (
            <Grid className={classes.spacing} item xs={12} md={6}>
              <Banner />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
