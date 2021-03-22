import React, { useEffect, useState } from 'react';
import { api } from './api/api_types';
import BannerList from './components/Banner/BannerList';
import styles from './styles/App.module.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import VerticalNavbar from './components/VerticalNavbar/VerticalNavbar';
import Search from './components/Search/Search';
import Suggestion from './components/SuggestionBar/Suggestion';
import SimilarProducts from './components/SimilarProducts/SimilarProducts';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  const [apiData, setApiData] = useState<api | {}>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.divar.ir/v8/web-search/tehran'
        );
        const data = await response.json();
        setApiData(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <Router>
        <Navbar />
        <ProductPage />
      </Router>
    </div>
  );

  // return (
  //   <Router>
  //     <div className={styles.app}>
  //       <Navbar />
  //       <Search />
  //       {'suggestion_list' in apiData && (
  //         <Suggestion suggestion_list={apiData.suggestion_list} />
  //       )}

  //       {'widget_list' in apiData ? (
  //         <BannerList widget_list={apiData.widget_list} />
  //       ) : (
  //         <h2>Loading...</h2>
  //       )}
  //       <VerticalNavbar />
  //     </div>
  //   </Router>
  // );
}

export default App;
