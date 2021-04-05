import { Box, createStyles, makeStyles, Theme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from '../../ProductContext/ProductProvider';
import CustomSeparator from '../Breadcrumbs/CustomSeparator';
import Description from '../Description/Description';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import SimilarProducts from '../SimilarProducts/SimilarProducts';

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
  const [loading, setLoading] = useState(true);
  const { token } = useParams<{ token: string }>();
  const { pageData, getPageData } = useContext(ProductContext);


  const showLoading = useCallback(async ()=> {
    setLoading(!(await getPageData(token)));
  },[getPageData, token])

  useEffect(() => {
    showLoading();
  }, [showLoading]);

  if (loading) return <LoadingSpinner />;

  return (
    <Box>
      <Container maxWidth="md" style={{ marginTop: '90px' }}>
        <CustomSeparator />
        <Box className={classes.content}>
          <Description />
          <DetailsSlider />
        </Box>
        {'widgets' in pageData &&
        pageData.widgets.suggestions.suggestion_available && (
          <SimilarProducts />
        )}
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductPage;
