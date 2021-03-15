import React from 'react';
import BannerList from './BannerList';
import styles from './styles/App.module.scss';
import './styles/variables.module.scss';

function App() {
  return (
    <div className='App'>
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <p className={styles.test}>این یک تست برای امتحان کردن فونت است.</p>
      </header>
      <BannerList />
    </div>
  );
}

export default App;