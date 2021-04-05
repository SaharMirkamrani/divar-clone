import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import DivarProvider from './Divar/DivarProvider';
import Home from './Divar/Home';
import Layout from './Divar/Layout';
import ProductProvider from './ProductContext/ProductProvider';
import NotFoundPage from './components/Error/NotFoundPage';

const App = () => {
  return (
    <Router>
      <DivarProvider>
        <Main />
      </DivarProvider>
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  return (
    <Layout>
      <Switch>
        <Route path={`/ProductPage/:token`}>
          <ProductProvider>
            <ProductPage />
          </ProductProvider>
        </Route>
        {location.pathname === '/' && <Redirect to="/tehran" />}
        <Route path="/:city" component={Home} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  );
};

export default App;
