import { Box } from '@material-ui/core';
import React from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import MapLocation from '../MapLocation/MapLocation';
import SimilarProducts from '../SimilarProducts/SimilarProducts';

const ProductPage = () => {
  return (
    <Box>
      <CustomSeparator />
      <Box width='500px' height='200px'>
        <MapLocation />
      </Box>
      <SimilarProducts />
    </Box>
  );
};

export default ProductPage;
