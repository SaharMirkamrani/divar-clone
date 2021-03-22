import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  useMediaQuery,
} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from '../../logo/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../styles/App.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { preLoad } from '../../api/preLoadData';

const topCities = [
  ['تهران', 'tehran'],
  ['مشهد', 'mashhad'],
  ['کرج', 'karaj'],
  ['شیراز', 'shiraz'],
  ['اصفهان', 'isfahan'],
  ['اهواز', 'ahvaz'],
  ['تبریز', 'tabriz'],
  ['کرمانشاه', 'kermanshah'],
  ['قم', 'qom'],
  ['رشت', 'rasht'],
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: 'absolute',
      top: '0px',
    },
    cityButton: {
      color: '#555',
      margin: '0px 5px',
      backgroundColor: 'white',
      fontFamily: 'Vazir',
      padding: '7px 16px',
      '&:hover': {
        backgroundColor: '#hhh',
        color: 'black',
      },
    },
    appbar: {
      direction: 'rtl',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      boxShadow: '1px 1px 2px #eee',
      borderBottom: '1px solid #eee',
      height: '65px',
      position: 'fixed',
      margin: 0,
    },
    toolbar: {
      position: 'absolute',
      left: '0px',
    },
    rightMenu: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      right: '20px',
      alignItems: 'center',
    },
    button: {
      color: 'black',
      backgroundColor: 'white',
      fontFamily: 'Vazir',
      '&:hover': {
        backgroundColor: '#fff',
        color: '#777',
        curser: 'pointer',
      },
    },
    buttonMain: {
      color: 'white',
      marginRight: '20px',
      backgroundColor: '#a62626',
      padding: '5px 10px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      '&:hover': {
        backgroundColor: '#be3737',
      },
    },
    hamburger: {
      width: '50px',
      padding: '0px',
      '&:hover': {
        backgroundColor: '#fff',
      },
    },
    menuHamburger: {
      height: '360px',
    },
    menuDropdown: {
      fontFamily: 'Vazir',
    },
    modal: {
      display: 'block',
      overflow: 'scroll',
      position: 'absolute',
      top: '10%',
      left: '10%',
      height: '100%',
      marginTop: '30px',
      border: 'none',
    },
    paper: {
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 1, 3),
      backgroundColor: 'white',
      width: '790px',
      margin: 'auto',
      border: 'none',
      borderRadius: '10px',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
    activeCityBtn: {
      color: 'white',
      margin: '12px',
      backgroundColor: '#a62626',
      padding: '5px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      width: '130px',
      '&:hover': {
        backgroundColor: '#be3737',
      },
    },
    cityBtn: {
      color: '#a62626',
      margin: '12px',
      backgroundColor: 'white',
      textDecoration: 'none',
      padding: '5px',
      fontSize: '16px',
      fontFamily: 'Vazir',
      width: '130px',
      borderColor: '#a62626',
      '&:hover': {
        backgroundColor: 'rgba(166,38,38,.04)',
      },
    },
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const desktop = useMediaQuery('(min-width: 947px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleHamburgerClose = () => {
    setAnchorEl(null);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Box className={classes.rightMenu}>
          <Link className={styles.link} to="/tehran">
            <img
              style={{ width: '40px', height: '40px' }}
              alt="logo"
              src={Logo}
            />
          </Link>
          <Link className={styles.link} to="/tehran">
            <Button className={classes.cityButton} onClick={handleModalOpen}>
              <LocationOnIcon /> تهران
            </Button>
          </Link>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <h3
                  style={{ fontFamily: 'Vazir', margin: '0px 5px 20px 5px' }}
                  id="transition-modal-title"
                >
                  انتخاب شهر
                </h3>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 0 }}
                  placeholder="جستجوی سریع نام شهر..."
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    classes: {
                      input: classes.resize,
                    },
                  }}
                  variant="outlined"
                />
                <p
                  style={{ fontFamily: 'Vazir', margin: '30px 10px 10px' }}
                  id="transition-modal-description"
                >
                  شهر های پر بازدید
                </p>
                <Box>
                  {/* @ts-ignore */}
                  {topCities.map((city) => (
                    <Link style={{ textDecoration: 'none' }} to={`/${city[1]}`}>
                      {location.pathname === `/${city[1]}` ? (
                        <Button className={classes.activeCityBtn}>
                          {city[0]}
                        </Button>
                      ) : (
                        <Button variant="outlined" className={classes.cityBtn}>
                          {city[0]}
                        </Button>
                      )}
                    </Link>
                  ))}
                </Box>
                <p
                  style={{ fontFamily: 'Vazir', margin: '30px 10px 10px' }}
                  id="transition-modal-description"
                >
                  همه شهر ها
                </p>
                {/* @ts-ignore */}
                {preLoad.city.compressedData.map((city) => (
                  <Link style={{ textDecoration: 'none' }} to={`/${city[2]}`}>
                    {location.pathname === `/${city[2]}` ? (
                      <Button className={classes.activeCityBtn}>
                        {city[1]}
                      </Button>
                    ) : (
                      <Button variant="outlined" className={classes.cityBtn}>
                        {city[1]}
                      </Button>
                    )}
                  </Link>
                ))}
              </div>
            </Fade>
          </Modal>
        </Box>
        <Toolbar className={classes.toolbar}>
          {desktop && (
            <div>
              <Link className={styles.link} to="/my-divar/my-posts">
                <Button className={classes.button}>دیوار من</Button>
              </Link>
              <Link className={styles.link} to="/chat">
                <Button className={classes.button}>چت</Button>
              </Link>
              <Link className={styles.link} to="/about">
                <Button className={classes.button}>درباره دیوار</Button>
              </Link>
              <Link className={styles.link} to="/blog">
                <Button className={classes.button}>بلاگ</Button>
              </Link>
              <Link className={styles.link} to="/support">
                <Button className={classes.button}>پشتیبانی</Button>
              </Link>
            </div>
          )}
          <Button className={classes.buttonMain}>ثبت آگهی</Button>
          {!desktop && (
            <div>
              <IconButton
                className={classes.hamburger}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className={classes.menuHamburger}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleHamburgerClose}
              >
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleHamburgerClose}
                >
                  دیوار من
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleHamburgerClose}
                >
                  چت
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleHamburgerClose}
                >
                  درباره دیوار
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleHamburgerClose}
                >
                  بلاگ
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleHamburgerClose}
                >
                  پشتیبانی
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
