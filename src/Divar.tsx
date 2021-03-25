import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import DivarProvider, { DivarContext } from './DivarProvider';
import Home from './Home';
import Layout from './Layout';
import { bannerDetailPath } from './routePath';
import { useContext } from 'react';

const Divar = () => {
  const {city} = useContext(DivarContext);
  console.log(city)
  return (
    <Router>
      <DivarProvider>
        <Layout>
          <Switch>
            <Route
              path={`${bannerDetailPath}/:token`}
              component={ProductPage}
            />
            <Route exact path={`/${city}`} component={Home} >
            {/* <Redirect to="/tehran" /> */}
            </Route >
          </Switch>
        </Layout>
      </DivarProvider>
    </Router>
  );
};

export default Divar;
