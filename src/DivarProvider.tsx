import React, { createContext, useCallback, useEffect, useState } from 'react';
import { api } from './api/api_types';

export const DivarContext = createContext<{ apiData: api | {}; getData: any; city: any ; setCity: any}>({
  apiData: {},
  getData: () => {},
  city: '',
  setCity: "",
});

interface propsType {
  children: JSX.Element;
}

const AppProvider : React.FC<propsType> =  ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [city, setCity] = useState('tehran'); 
  const url = `https://api.divar.ir/v8/web-search/${city}`;

  const getData = useCallback(async (search) => {
    try {
      const res = await fetch(`${url}?q=${search}`);
      const data = await res.json();
      setApiData(data);
      setCity(city)
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  useEffect(() => {
    getData('');
  }, [getData]);

  return (
		// @ts-ignore
    <DivarContext.Provider value={{ apiData, getData, city, setCity }}>
      {children}
    </DivarContext.Provider>
  );
};

export default AppProvider;
