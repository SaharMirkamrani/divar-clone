import React, { useState, useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { ProductContext } from '../../ProductContext/ProductProvider';

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

export default function CustomSeparator() {
  const { pageData } = useContext(ProductContext);
  const classes = useStyles();
  const [navigationIcon, setNavigationIcon] = useState({
    toggleIcon: () => <NavigateBeforeIcon fontSize="small" />,
  });

  const mouseEnterHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateNextIcon fontSize="small" />,
    });
  };

  const mouseLeaveHandler = () => {
    setNavigationIcon({
      toggleIcon: () => <NavigateBeforeIcon fontSize="small" />,
    });
  };

  return (
    <div
      className={classes.root}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {'widgets' in pageData ? (
        <Breadcrumbs
          className={classes.breadcrumbs}
          separator={navigationIcon.toggleIcon()}
          aria-label="breadcrumb"
        >
          {pageData.widgets.breadcrumb.categories
            .map(
              // @ts-ignore
              (item) => (
                // @ts-ignore
                <Link style={{ color: 'gray' }} to={`${item.relative_url}`}>
                  {item.title}
                </Link>
              )
            )
            .reverse()
            }
          {'data' in pageData ? (
            <Typography
              className={classes.breadcrumbs}
              style={{ color: 'lightgray' }}
            >
              {pageData.data.share.title}
            </Typography>
          ) : null}
        </Breadcrumbs>
      ) : null}
    </div>
  );
}
