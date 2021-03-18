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
  { name: 'املاک', icon: () => <HomeWorkOutlinedIcon fontSize='small' /> },
  {
    name: 'وسایل نقلیه',
    icon: () => <DriveEtaOutlinedIcon fontSize='small' />,
  },
  {
    name: 'لوازم الکترونیکی',
    icon: () => <PhoneIphoneOutlinedIcon fontSize='small' />,
  },
  {
    name: 'مربوط به خانه',
    icon: () => <WeekendOutlinedIcon fontSize='small' />,
  },
  { name: 'خدمات', icon: () => <LocalShippingOutlinedIcon fontSize='small' /> },
  {
    name: 'وسایل شخصی',
    icon: () => <WatchOutlinedIcon fontSize='small' />,
  },
  {
    name: 'سرگرمی و فراغت',
    icon: () => <CasinoOutlinedIcon fontSize='small' />,
  },
  {
    name: 'اجتماعی',
    icon: () => <PeopleAltOutlinedIcon fontSize='small' />,
  },
  {
    name: 'برای کسب و کار',
    icon: () => <EventSeatOutlinedIcon fontSize='small' />,
  },
  {
    name: 'استخدام و کاریابی',
    icon: () => <BusinessCenterOutlinedIcon fontSize='small' />,
  },
];

export default categories;
