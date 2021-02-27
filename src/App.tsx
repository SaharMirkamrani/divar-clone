import React from 'react';
import logo from './logo/logo.svg';
// import styles from './styles/styles.module.scss'
import styles from './styles/App.module.scss'
import './styles/variables.module.scss';


function App() {
  return (
    <div className="App">
      <header>
        {/* <img src={logo} alt="logo" /> */}
        <p className={styles.test}>
          این یک تست برای امتحان کردن فونت است.
        </p>
      </header>
    </div>
  );
}

export default App;
