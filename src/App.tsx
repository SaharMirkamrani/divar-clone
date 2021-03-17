import React, { useEffect, useState } from "react";
import { api } from "./api_types";
import BannerList from "./BannerList";
import styles from "./styles/App.module.scss";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import VerticalNavbar from "./VerticalNavbar";

function App() {
  const [apiData, setApiData] = useState<api | {}>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.divar.ir/v8/web-search/tehran"
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
    <Router>
      <div className={styles.app}>
        <Navbar />
        {"widget_list" in apiData ? (
          <BannerList widget_list={apiData.widget_list} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <VerticalNavbar />
    </Router>
  );
}

export default App;
