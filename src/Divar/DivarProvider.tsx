import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { api, widget } from '../api/api_types';
import Cookies from 'js-cookie';

export enum SwitchNames {
  STORE = 'is-store=true',
  PHOTO = 'has-photo=true',
  URGENT = 'urgent=true',
}

export interface switchType {
  [SwitchNames.STORE]: boolean;
  [SwitchNames.PHOTO]: boolean;
  [SwitchNames.URGENT]: boolean;
}

export const DivarContext = createContext<{
  widgetList: widget[];
  setWidgetList: Dispatch<SetStateAction<widget[]>>;
  navbarSwitch: switchType;
  setNavbarSwitch: Dispatch<SetStateAction<switchType>>;
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  city: string | undefined;
  setCity: Dispatch<SetStateAction<string | undefined>>;
  apiData: api;
  getData: Function;
  url: string;
}>({
  widgetList: [],
  setWidgetList: () => {},
  navbarSwitch: {
    [SwitchNames.URGENT]: false,
    [SwitchNames.PHOTO]: false,
    [SwitchNames.STORE]: false,
  },
  setNavbarSwitch: () => {},
  category: '',
  setCategory: () => {},
  city: undefined,
  setCity: () => {},
  apiData: {},
  getData: () => {},
  url: '',
});

interface propsType {
  children: JSX.Element;
}

const DivarProvider: React.FC<propsType> = ({ children }) => {
  const [apiData, setApiData] = useState<api>({});
  Cookies.set('city', 'tehran');
  const [city, setCity] = useState(() => Cookies.get('city'));
  const [nextPage, setNextPage] = useState('');
  const [category, setCategory] = useState('');
  const [widgetList, setWidgetList] = useState<widget[]>([]);
  const [navbarSwitch, setNavbarSwitch] = useState<switchType>({
    [SwitchNames.URGENT]: false,
    [SwitchNames.PHOTO]: false,
    [SwitchNames.STORE]: false,
  });

  const url = `https://api.divar.ir/v8/web-search/${city}`;

  const getData = (search: string, next = false) => {
    let qSearch = search ? 'q=' + search : '';
    let qNext = next ? nextPage : '';
    let filter = '';
    Object.entries(navbarSwitch).forEach(([key, value]) => {
      if (value) {
        if (filter.length) filter += '&';
        filter += key;
      }
    });
    if (filter.length) {
      filter = '?' + filter;
      if (next) qNext = '&' + qNext;
    } else if (qNext.length) qNext = '?' + qNext;

    if (filter.length || qNext.length) qSearch = '&' + qSearch;
    else if (qSearch.length) qSearch = '?' + qSearch;

    const fetchUrl = category
      ? `${url}/${category}${filter}${qNext}${qSearch}`
      : `${url}${filter}${qNext}${qSearch}`;
    (async () => {
      try {
        const response = await fetch(fetchUrl);
        const data = await response.json();
        setApiData(data);
        setNextPage(data.seo_details.next.split('?')[1]);
        if (next) {
          setWidgetList((pre) => pre.concat(data.widget_list));
        } else {
          setWidgetList(data.widget_list);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  };
  return (
    <DivarContext.Provider
      value={{
        widgetList,
        setWidgetList,
        navbarSwitch,
        setNavbarSwitch,
        category,
        setCategory,
        city,
        setCity,
        apiData,
        getData,
        url,
      }}
    >
      {children}
    </DivarContext.Provider>
  );
};

export default DivarProvider;
