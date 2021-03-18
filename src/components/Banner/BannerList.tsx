import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banner from './BannerItem';
import { widget } from '../../api/api_types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "70px",
      marginRight: 290,
      flexGrow: 1,
      width: '78%',
    },
    spacing: {
      padding: theme.spacing(1),
    },
  })
);

interface propsType {
  widget_list: widget[];
}

const BannerList: React.FC<propsType> = ({ widget_list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        {widget_list.map((widget) => (
          <Grid
            key={widget.data.token}
            className={classes.spacing}
            item
            xs={12}
            md={6}
          >
            <Banner {...widget} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BannerList;
