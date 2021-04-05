import { useContext, useState, useEffect } from 'react';
import { DivarContext } from './DivarProvider';
import BannerList from '../components/Banner/BannerList';
import VerticalNavbar from '../components/VerticalNavbar/VerticalNavbar';
import Search from '../components/Search/Search';
import Suggestion from '../components/SuggestionBar/Suggestion';
import { Grid } from '@material-ui/core';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useParams } from 'react-router';
import Cookies from 'js-cookie';

const Home = () => {
  const {
    apiData,
    getData,
    city,
    setCity,
    category,
    setCategory,
    navbarSwitch,
    widgetList,
    setWidgetList,
  } = useContext(DivarContext);
  const [search, setSearch] = useState('');

  const cityParam: { city: string } = useParams();
  const location = useLocation();

  const fetchMore = () => {
    getData(search, true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setCity(cityParam.city);
    if (location.search) setSearch(location.search.split('=')[1]);
    else setSearch('');
    const pathNameSplit = location.pathname.split('/');
    if (pathNameSplit.length === 3) setCategory(pathNameSplit[2]);
    else setCategory('');
    Cookies.set('city', cityParam.city);
    setWidgetList([]);
    getData(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, city, navbarSwitch]);

  return (
    <div>
      <Grid container>
        <Grid xs={3}>
          <VerticalNavbar />
        </Grid>
        <Grid xs={9}>
          <Search setSearch={setSearch} />
          <Suggestion setCategory={setCategory} />
          {'widget_list' in apiData ? (
            <>
              <InfiniteScroll
                dataLength={widgetList.length}
                next={fetchMore}
                hasMore={true}
                loader={<LoadingSpinner />}
              >
                <BannerList widget_list={widgetList} />
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
