import React, { useContext, useEffect, useState } from 'react';
import { DivarContext } from './DivarProvider';
import BannerList from './components/Banner/BannerList';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import Search from './components/Search/Search';
import Suggestion from './components/SuggestionBar/Suggestion';
import { Grid } from '@material-ui/core';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import LoadMore from './components/LoadMore/LoadMore';

const Home = () => {
  const [search, setSearch] = useState('');
  const { apiData, getData } = useContext(DivarContext);

  useEffect(() => {
    // @ts-ignore
    getData(search);
  }, [getData, search]);

  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <VerticalNavbar />
        </Grid>
        <Grid xs={9}>
          <Search />
          {'suggestion_list' in apiData && (
            <Suggestion />
          )}
					
          {'widget_list' in apiData ? (
            <>
              <BannerList />
              <LoadMore />
            </>
          ) : (
            <LoadingSpinner />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
