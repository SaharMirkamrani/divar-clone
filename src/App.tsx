import React, { useEffect, useState } from 'react';
import { api } from './api_types';
import BannerList from './BannerList';
import styles from './styles/App.module.scss';
import './styles/variables.module.scss';

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
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <p className={styles.test}>این یک تست برای امتحان کردن فونت است.</p>
      </header>
      {'widget_list' in apiData ? (
        <BannerList widget_list={apiData.widget_list} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default App;
