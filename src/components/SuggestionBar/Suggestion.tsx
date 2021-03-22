import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { suggestion } from '../../api/api_types';

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

interface propsType {
  suggestion_list: suggestion[];
}

const Suggestion: React.FC<propsType> = ({ suggestion_list }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.sugBar}>
        {suggestion_list.map((suggestion) => (
          <ButtonSug
            key={suggestion.displayed_text}
            text={suggestion.displayed_text}
          />
        ))}
      </Box>
    </div>
  );
};

interface buttonPropsType {
  text: string;
}

const ButtonSug: React.FC<buttonPropsType> = ({ text }) => {
  const classes = useStyles();
  return (
    <>
      <Button variant='outlined' size='small' className={classes.button}>
        {text}
      </Button>
    </>
  );
};

export default Suggestion;
