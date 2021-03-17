import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchBar: {
      margin: '1.75rem 300px 0 1.75rem',
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
    textField: {},
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

export default function Search() {
  const classes = useStyles();
  const tablet = useMediaQuery('(max-width: 1200px)');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.searchBar}>
      <Box className={classes.root}>
        <Box className={classes.searchDropdown}>
          <Button
            variant="contained"
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.dropdownBtn}
          >
            <p>همه آگهی ها</p> <ArrowDropDownOutlinedIcon />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Box>
        <Box>
          <form className={classes.form}>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              variant="outlined"
              placeholder="جستجو در همه آگهی ها"
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
