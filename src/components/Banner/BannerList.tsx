import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Banner from './BannerItem';
import { Box, Divider, Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { DivarContext } from '../../Divar/DivarProvider';
import { widget } from '../../api/api_types';
import { preLoad } from '../../api/preLoadData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: '70px',
      flexGrow: 1,
    },
    spacing: {
      padding: theme.spacing(1),
    },
    title: {
      fontSize: '13px',
      fontFamily: 'Vazir',
      color: 'gray',
      textAlign: 'left',
      paddingLeft: '11px',
      paddingBottom: '10px',
    },
  })
);

interface propsType {
  widget_list: widget[];
}

const BannerList: React.FC<propsType> = ({ widget_list }) => {
  const classes = useStyles();
  const { city } = useContext(DivarContext);
  const cityName = city
    ? preLoad.city.compressedData.find((x) => x[2] === city)![1]
    : '';
  return (
    <div className={classes.root}>
      <Box width="100%">
        <Typography className={classes.title}>
          {`دیوار ${cityName}: انواع آگهی ها و خدمات در ${cityName}`}
        </Typography>
        <Divider style={{ width: '98%', margin: '0 auto' }} />
      </Box>
      <Grid container>
        {/* @ts-ignore */}
        {widget_list.map((widget: any) => (
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
