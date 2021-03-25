import { Box } from '@material-ui/core';
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/App.module.scss';

interface propsType {
  children: JSX.Element;
}

const Layout: React.FC<propsType> = ({ children }) => {
  return (
    <>
      <div className={styles.app}>
        <Navbar />
        <Box>{children}</Box>
      </div>
    </>
  );
};

export default Layout;
