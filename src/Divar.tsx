import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import DivarProvider from './DivarProvider';
import Home from './Home';
import Layout from './Layout';
import { bannerDetailPath } from './routePath';

const Divar = () => {
  return (
    <Router>
      <DivarProvider>
        <Layout>
          <Switch>
            <Route
              path={`${bannerDetailPath}/:title`}
              component={ProductPage}
            />
            <Route path="/" component={Home} />
          </Switch>
        </Layout>
      </DivarProvider>
    </Router>
  );
};

export default Divar;
