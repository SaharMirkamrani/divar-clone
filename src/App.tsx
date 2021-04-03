import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import DivarProvider, { DivarContext } from './Divar/DivarProvider';
import ProductProvider, {
  ProductContext,
} from './ProductContext/ProductProvider';
import Home from './Divar/Home';
import Layout from './Divar/Layout';
import { useContext } from 'react';
import Cookies from 'js-cookie';

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
  const { city, setCity } = useContext(DivarContext);
  const location = useLocation();
  // if (location.pathname.startsWith(`/${city}`)) {
    // const path = location.pathname.split('/')[1];
    // Cookies.set('city', path);
    // console.log(city)
    // setCity(() => Cookies.get('city'));
  // }
  // if (location.pathname.startsWith(`/${city}`)) {
  // const path = location.pathname.split('/')[1];
  // setCity(path)
// }
  return (
    <Layout>
      <Switch>
        <Route path={`/ProductPage/:token`}>
          <ProductProvider>
            <ProductPage />
          </ProductProvider>
        </Route>
        {location.pathname === '/' && <Redirect to="/tehran" />}
        <Route path={`/${city}`} component={Home} />
      </Switch>
    </Layout>
  );
};


export default App;
