import React, { createContext, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../api/api_types';
import Cookies from 'js-cookie';

export const DivarContext = createContext<{ apiData: api | {}; getData: any; city: any ; setCity: any}>({
  apiData: {},
  getData: () => {},
  city: '',
  setCity: "",
});

interface propsType {
  children: JSX.Element;
}

const DivarProvider : React.FC<propsType> =  ({ children }) => {
  Cookies.set('city', 'tehran')
  const [apiData, setApiData] = useState([]);
  const [city, setCity] = useState(() => Cookies.get('city')); 
  console.log(city)
  const url = `https://api.divar.ir/v8/web-search/${city}`;

  const getData = useCallback(async () => {
    try {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
		// @ts-ignore
    <DivarContext.Provider value={{ apiData, getData, city, setCity }}>
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
