import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import ProductPage from '../components/ProductPage/ProductPage';
import DivarProvider, { DivarContext } from './DivarProvider';
import Home from './Home';
import Layout from './Layout';
import { bannerDetailPath } from './routePath';
import { useContext } from 'react';

const Divar = () => {
  return (
    <Router>
      <DivarProvider>
        <Main />
      </DivarProvider>
    </Router>
  );
};

const Main = () => {
  const { city } = useContext(DivarContext);
  const location = useLocation();
  console.log(location);
  return (
    <Layout>
      <Switch>
        <Route path={`${bannerDetailPath}/:token`} component={ProductPage} />
        {location.pathname === '/' && <Redirect to="/tehran" />}
        <Route exact path={`/${city}`} component={Home} />
      </Switch>
    </Layout>
  );
};

export default Divar;
