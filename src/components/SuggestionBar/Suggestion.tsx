import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useContext } from 'react';
import { DivarContext } from '../../Divar/DivarProvider';
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

const categories = [
  ['خودروسواری', 'car'],
  ['فروش آپارتمان', 'buy-apartment'],
  ['اجاره آپارتمان', 'rent-apartment'],
  ['موبایل', 'mobile-phones'],
  ['مبلمان', 'sofa-armchair'],
  ['حیوانات', 'pets-animals'],
  ['وسایل شخصی', 'personal-goods'],
  ['خدمات', 'services'],
  ['استخدام', 'jobs'],
  ['تلویزیون', 'tv-projector'],
];

interface propsTypes {
  setCategory: Function,
}

const Suggestion: React.FC <propsTypes> = ({ setCategory }) => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.sugBar}>
        {/* @ts-ignore */}
        {categories.map((suggestion: any) => (
          // <Link
          //   style={{ textDecoration: 'none' }}
          //   to={`/${city}/${suggestion[1]}`}
          // >
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={() => setCategory(suggestion[1])}
            >
              {suggestion[0]}
            </Button>
          // </Link>
        ))}
      </Box>
    </div>
  );
};

export default Suggestion;
