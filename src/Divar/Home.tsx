import React, { useContext, useState, useEffect } from 'react';
import { DivarContext } from './DivarProvider';
import BannerList from '../components/Banner/BannerList';
import VerticalNavbar from '../components/VerticalNavbar/VerticalNavbar';
import Search from '../components/Search/Search';
import Suggestion from '../components/SuggestionBar/Suggestion';
import { Grid } from '@material-ui/core';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { widget } from '../api/api_types';

const Home = () => {
  const [search, setSearch] = useState('');
  const { apiData, getData, city } = useContext(DivarContext);
  const [widgetList, setWidgetList] = useState<widget[]>([]);

  const fetchMore = () => {
    getData();
    if ('widget_list' in apiData) {
      setWidgetList(widgetList.concat(apiData.widget_list));
    }
  };

  useEffect(() => {
    getData();
    setWidgetList([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <VerticalNavbar />
        </Grid>
        <Grid xs={9}>
          <Search />
          {'suggestion_list' in apiData && <Suggestion />}

          {'widget_list' in apiData ? (
            <>
              <InfiniteScroll
                dataLength={widgetList.length}
                next={fetchMore}
                hasMore={true}
                loader={<LoadingSpinner />}
              >
                <BannerList
                  widget_list={
                    widgetList.length === 0 ? apiData.widget_list : widgetList
                  }
                />
              </InfiniteScroll>
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
