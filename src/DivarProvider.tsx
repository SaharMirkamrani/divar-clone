import React, { createContext, useCallback, useEffect, useState } from 'react';
import { api } from './api/api_types';

const url = 'https://api.divar.ir/v8/web-search/tehran';

export const DivarContext = createContext<{ apiData: api | {}; getData: Function }>({
  apiData: {},
  getData: () => {},
});

interface propsType {
  children: JSX.Element;
}

const AppProvider : React.FC<propsType> =  ({ children }) => {
  const [apiData, setApiData] = useState([]);

  const getData = useCallback(async (search) => {
    try {
      const res = await fetch(`${url}${search}`);
      const data = await res.json();
      setApiData(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData('');
  }, [getData]);

  return (
		// @ts-ignore
    <DivarContext.Provider value={{ apiData, getData }}>
      {children}
    </DivarContext.Provider>
  );
};

export default AppProvider;
