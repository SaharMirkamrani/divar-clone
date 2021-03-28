import { Box, Button, createStyles, Theme } from '@material-ui/core';
import React, {useState, useEffect, useContext} from 'react';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import MapLocation from '../MapLocation/MapLocation';
import SimilarProducts from '../SimilarProducts/SimilarProducts';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';
import Description from '../Description/Description';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import Footer from '../Footer/Footer';
import {useParams} from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ProductProvider, {ProductContext} from '../../ProductContext/ProductProvider'

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
  const [loading, setLoading] = useState(true);
  const { token } = useParams<{ token: string }>();
  const { pageData, getPageData } = useContext(ProductContext);
  const classes = useStyles();
  
  console.log(token);

  useEffect(() => {
    (async () => {
      setLoading(!(await getPageData(token)));
    })();
  }, [getPageData, token]);

  if (loading) return <LoadingSpinner />;

  return (
    <Box>
      <Container maxWidth="md" style={{ marginTop: '90px' }}>
        <CustomSeparator />
        <Box className={classes.content}>
          <Description />
          <DetailsSlider />
        </Box>
        <SimilarProducts />
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductPage;
