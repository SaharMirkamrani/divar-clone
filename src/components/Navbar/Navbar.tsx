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
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../../styles/App.module.scss';

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
        color: '#444',
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
  })
);

export default function Navbar() {
  const classes = useStyles();
  const desktop = useMediaQuery('(min-width: 947px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <Button className={classes.cityButton}>
              <LocationOnIcon></LocationOnIcon> تهران
            </Button>
          </Link>
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
                onClose={handleClose}
              >
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleClose}
                >
                  دیوار من
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleClose}
                >
                  چت
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleClose}
                >
                  درباره دیوار
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleClose}
                >
                  بلاگ
                </MenuItem>
                <MenuItem
                  className={classes.menuDropdown}
                  onClick={handleClose}
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
