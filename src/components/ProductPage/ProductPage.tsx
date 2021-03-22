import { Box } from '@material-ui/core';
import React from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import SimilarProducts from '../SimilarProducts/SimilarProducts';

const ProductPage = () => {
  return (
    <Box>
      <CustomSeparator />
      <SimilarProducts />
    </Box>
  );
};

export default ProductPage;
