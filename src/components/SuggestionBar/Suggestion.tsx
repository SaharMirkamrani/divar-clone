import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useContext, useEffect, useState } from 'react';
import { DivarContext } from '../../DivarProvider';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: '5px',
      border: '1px solid #a62626',
      color: '#a62626',
      fontFamily: 'Vazir',
      borderRadius: '30px',
      '&:hover': {
        backgroundColor: '#be3737',
        color: 'white',
        curser: 'pointer',
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    sugBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'cneter',
      margin: '3.4rem 23px 0 3rem',
    },
  })
);

const Suggestion: React.FC = () => {
  const classes = useStyles();
  const { apiData } = useContext(DivarContext);
  const suggestion_list =
    'suggestion_list' in apiData ? apiData.suggestion_list : [];

  return (
    <div>
      <Box className={classes.sugBar}>
        {/* @ts-ignore */}
        {suggestion_list.map((suggestion: any) => (
          <Link
            style={{ textDecoration: 'none' }}
            to={`/${suggestion.value.category.value}`}
          >
            <Button variant="outlined" size="small" className={classes.button}>
              {suggestion.displayed_text}
            </Button>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default Suggestion;
