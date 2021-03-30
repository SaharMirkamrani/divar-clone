import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import WatchOutlinedIcon from '@material-ui/icons/WatchOutlined';
import CasinoOutlinedIcon from '@material-ui/icons/CasinoOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import EventSeatOutlinedIcon from '@material-ui/icons/EventSeatOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';

const categories = [
  {
    name: 'املاک',
    url: 'real-estate',
    icon: () => <HomeWorkOutlinedIcon fontSize="small" />,
  },
  {
    name: 'وسایل نقلیه',
    url: 'vehicles',
    icon: () => <DriveEtaOutlinedIcon fontSize="small" />,
  },
  {
    name: 'لوازم الکترونیکی',
    url: 'electronic-devices',
    icon: () => <PhoneIphoneOutlinedIcon fontSize="small" />,
  },
  {
    name: 'مربوط به خانه',
    url: 'home-and-kitchen',
    icon: () => <WeekendOutlinedIcon fontSize="small" />,
  },
  {
    name: 'خدمات',
    url: 'services',
    icon: () => <LocalShippingOutlinedIcon fontSize="small" />,
  },
  {
    name: 'وسایل شخصی',
    url: 'personal-goods',
    icon: () => <WatchOutlinedIcon fontSize="small" />,
  },
  {
    name: 'سرگرمی و فراغت',
    url: 'entertainment',
    icon: () => <CasinoOutlinedIcon fontSize="small" />,
  },
  {
    name: 'اجتماعی',
    url: 'social-services',
    icon: () => <PeopleAltOutlinedIcon fontSize="small" />,
  },
  {
    name: 'برای کسب و کار',
    url: 'businesses',
    icon: () => <EventSeatOutlinedIcon fontSize="small" />,
  },
  {
    name: 'استخدام و کاریابی',
    url: 'jobs',
    icon: () => <BusinessCenterOutlinedIcon fontSize="small" />,
  },
];

export default categories;
