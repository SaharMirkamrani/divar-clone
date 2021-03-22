import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: '10px',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    breadcrumbs: {
      fontSize: '12px',
      fontFamily: 'Vazir',
    },
  })
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const classes = useStyles();
  const [navigationIcon, setNavigationIcon] = useState({
    toggleIcon: () => <NavigateBeforeIcon fontSize='small' />,
  });

  const mouseEnterHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateNextIcon fontSize='small' />,
    });
  };

  const mouseLeaveHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateBeforeIcon fontSize='small' />,
    });
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <Breadcrumbs
        className={classes.breadcrumbs}
        separator={navigationIcon.toggleIcon()}
        aria-label='breadcrumb'
      >
        <Link color='inherit' href='/' onClick={handleClick}>
          مربوط به خانه
        </Link>
        <Link
          color='inherit'
          href='/getting-started/installation/'
          onClick={handleClick}
        >
          وسایل و تزئینات خانه
        </Link>
        <Link color='inherit' href='' onClick={handleClick}>
          تخت و اتاق خواب
        </Link>
        <Typography
          className={classes.breadcrumbs}
          style={{ color: 'lightgray' }}
        >
          تخت و سرویس خواب چرم پارس
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
