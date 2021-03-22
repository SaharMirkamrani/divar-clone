import { Box, Button, createStyles, Theme } from '@material-ui/core';
import React from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import MapLocation from '../MapLocation/MapLocation';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Description from '../Description/Description';
import DetailsSlide from '../DetailsSlider/DetailsSlider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '50px 10px 20px',
    },
    slider: {
      width: '50%',
    },
  })
);

const ProductPage = () => {
  const classes = useStyles();
  return (
    <Box>
      <Container maxWidth="md" style={{ marginTop: '90px' }}>
        <CustomSeparator />
        <Box className={classes.content}>
          <Description />
          <DetailsSlide />
        </Box>

        {/* <Box width="500px" height="200px">
          <MapLocation />
        </Box> */}
        <SimilarProducts />
      </Container>
    </Box>
  );
};

export default ProductPage;
