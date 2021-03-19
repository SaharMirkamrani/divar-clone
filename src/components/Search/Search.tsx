import React, { useRef, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from '@material-ui/core';
import { Menu, MenuItem } from '@material-ui/core';
import NestedMenuItem from 'material-ui-nested-menu-item';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/App.module.scss';

const menuItems: string[] = [
  'همه آگهی ها',
  'املاک',
  'وسایل نقلیه',
  'لوازم الکترونیکی',
  'مربوط به خانه',
  'خدمات',
  'وسایل شخصی',
  'سرگرمی و فراغت',
  'اجتماعی',
  'برای کسب و کار',
  'استخدام و کاریابی',
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchBar: {
      margin: '1.75rem 350px 0 1.75rem',
      position: 'relative',
      top: '50px',
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '600px',
      },
    },
    searchDropdown: {},
    dropdownBtn: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '160px',
      height: '55px',
      fontFamily: 'Vazir',
      '&:hover': {
        boxShadow: 'none',
      },
    },
    menu: {
      // position: 'relative',
    },
    submenu: {
      padding: '10px',
      left: 0,
    },
    textField: {},
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

export default function Search() {
  const classes = useStyles();
  const tablet = useMediaQuery('(max-width: 1200px)');
  const [menuPosition, setMenuPosition] = useState<any>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: any) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: dropdownBtnRef.current?.getBoundingClientRect().bottom,
      left: dropdownBtnRef.current?.getBoundingClientRect().left,
    });
  };
  const handleItemClick = (event: React.MouseEvent) => {
    setMenuPosition(null);
  };

  return (
    <div className={classes.searchBar}>
      <Box className={classes.root}>
        <Box className={classes.searchDropdown}>
          <div onClick={handleClick}>
            <Button
              ref={dropdownBtnRef}
              variant='contained'
              className={classes.dropdownBtn}
            >
              <p>همه آگهی ها</p> <ArrowDropDownOutlinedIcon />
            </Button>
            <Menu
              open={!!menuPosition}
              onClose={() => setMenuPosition(null)}
              anchorReference='anchorPosition'
              anchorPosition={menuPosition}
            >
              {menuItems.map((item) => {
                return (
                  <NestedMenuItem
                    rightIcon={<ArrowLeftIcon />}
                    key={item}
                    label={item}
                    parentMenuOpen={!!menuPosition}
                    onClick={handleItemClick}
                    component='section'
                  >
                    <Paper className={classes.submenu}>
                      <MenuItem onClick={handleItemClick}>تست یک</MenuItem>
                    </Paper>
                  </NestedMenuItem>
                );
              })}
            </Menu>
          </div>
        </Box>
        <Box>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              id='outlined-basic'
              variant='outlined'
              placeholder='جستجو در همه آگهی ها'
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </form>
        </Box>
      </Box>
    </div>
  );
}
