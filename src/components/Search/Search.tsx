import Box from '@material-ui/core/Box';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MegaMenu from '../MegaMenu/MegaMenu';
import { useState } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    searchBar: {
      margin: '1.75rem',
      position: 'relative',
      top: '50px',
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '600px',
      },
    },
    resize: {
      fontFamily: 'Vazir',
    },
  })
);

interface propsType {
  setSearch: Function;
}

const Search: React.FC<propsType> = ({ setSearch }) => {
  const classes = useStyles();
  const [searchV, setSearchV] = useState('');

  const submitHandler = (e: any) => {
    e.preventDefault();
    setSearch(searchV);
    setSearchV('');
  };

  return (
    <div className={classes.searchBar}>
      <Box className={classes.root}>
        <MegaMenu />
        <Box>
          <form className={classes.form} onSubmit={(e) => submitHandler(e)}>
            <TextField
              value={searchV}
              onChange={(e) => setSearchV(e.target.value)}
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
};

export default Search;
