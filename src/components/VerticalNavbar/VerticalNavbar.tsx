import React, { useContext, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from './accordion';
import categories from './categories';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import enamadLogo from './images/enamad.jpg';
import majaziLogo from './images/majazi.png';
import samandehiLogo from './images/samandehi.jpg';
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { DivarContext } from '../../Divar/DivarProvider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'sticky',
      top: '-50vh',
      marginTop: '4rem',
      display: 'flex',
    },
    drawer: {
      width: '90%',
      paddingRight: 8,
      flexShrink: 0,
    },
    drawerPaper: {
      width: '100%',
    },
    // necessary for content to be below app bar
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    listItem: {
      textAlign: 'right',
    },
    heading: {
      fontFamily: 'Vazir',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    formControl: {
      width: '100%',
      marginTop: -20,
    },
    category: {
      padding: '20px 15px 0',
      fontFamily: 'Vazir',
    },
    listItemText: {
      fontSize: '14px',
      fontFamily: 'Vazir',
      color: '#5b5b5b',
    },
    formControlLabel: {
      width: '100%',
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'space-around',
    },
    formControlLabelText: {
      width: '130px',
      fontSize: '12px',
      fontWeight: 'bold',
      color: '#4c4c4c',
    },
    inputLabel: {
      fontFamily: 'Vazir',
    },
    navbarFooter: {
      listStyle: 'none',
      color: 'gray',
      fontFamily: 'Vazir',
      fontSize: '14px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: '80%',
      height: '10vh',
      marginBottom: '20px',
      paddingRight: 5,
      '& li': {
        paddingLeft: '5px',
      },
      '& li:hover': {
        color: 'black',
        cursor: 'pointer',
      },
    },
  })
);

interface propsTypes {
  setCategory: Function;
  redText: boolean;
  setRedText: Function;
  photo: boolean;
  setPhoto: Function;
}

const VerticalNavbar: React.FC<propsTypes> = ({ setCategory, redText, setRedText, photo, setPhoto}) => {
  const classes = useStyles();
  const [age, setAge] = useState('');
  const { city } = useContext(DivarContext);

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Divider />
        <List>
          <Typography className={classes.category}>دسته بندی ها</Typography>
          {categories.map((category) => (
            // @ts-ignore
            <Link
              style={{ textDecoration: 'none' }}
              to={`/${city}/${category.url}`}
            >
              <ListItem
                onClick={() => setCategory(category.url)}
                button
                key={category.name}
                className={classes.listItem}
              >
                <ListItemIcon>{category.icon()}</ListItemIcon>
                <ListItemText
                  style={{ marginRight: '-30px' }}
                  classes={{ primary: classes.listItemText }}
                  primary={category.name}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <FormControlLabel
          control={
            <Switch
              checked={redText}
              onChange={(e) => setRedText(e.target.checked)}
              name="checkedA"
            />
          }
          classes={{ label: classes.formControlLabelText }}
          className={classes.formControlLabel}
          label="آگهی های فروشکاه یا فوری"
          labelPlacement="start"
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>محل</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>
                همه محله ها
              </InputLabel>
              <Select
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setAge(event.target.value as string);
                }}
              >
                <MenuItem>آبشار</MenuItem>
                <MenuItem>آبشار</MenuItem>
                <MenuItem>آبشار</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>قیمت</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl className={classes.formControl}>
              <InputLabel className={classes.inputLabel}>Age</InputLabel>
              <Select
                value={age}
                onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
                  setAge(event.target.value as string);
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Divider />
        <FormControlLabel
          control={
            <Switch
              checked={photo}
              onChange={(e) => setPhoto(e.target.checked)}
              name="checkedA"
            />
          }
          className={classes.formControlLabel}
          classes={{ label: classes.formControlLabelText }}
          label="فقط عکس دار"
          labelPlacement="start"
        />
        <Divider />
        <Box p={1}>
          <ul className={classes.navbarFooter}>
            <li>درباره دیوار</li>
            <li>دریافت برنامه</li>
            <li>پشتیبانی</li>
            <li>بلاگ دیوار</li>
          </ul>
          <Box>
            <img
              style={{ width: '55px', height: 'auto' }}
              src={enamadLogo}
              alt="enamadLogo"
            />
            <img
              style={{ width: '88px', height: 'auto', marginRight: '10px' }}
              src={majaziLogo}
              alt="majaziLogo"
            />
            <img
              style={{ width: '95px', height: 'auto' }}
              src={samandehiLogo}
              alt="samandehiLogo"
            />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default VerticalNavbar;
