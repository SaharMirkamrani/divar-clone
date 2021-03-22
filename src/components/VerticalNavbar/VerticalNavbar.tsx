import React from 'react';
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
import {
  Box,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '4rem',
      display: 'flex',
    },
    drawer: {
      width: '90%',
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
      backgroundColor: 'red',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      fontSize: '12px',
      width: '100px',
      height: '50vh',
    },
  })
);

export default function VerticalNavbar() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <div className={classes.drawer}>
        <Divider />
        <List>
          <Typography className={classes.category}>دسته بندی ها</Typography>
          {categories.map((category, index) => (
            <ListItem button key={category.name} className={classes.listItem}>
              <ListItemIcon>{category.icon()}</ListItemIcon>
              <ListItemText
                style={{ marginRight: '-30px' }}
                classes={{ primary: classes.listItemText }}
                primary={category.name}
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <FormControlLabel
          control={
            <Switch checked={checked} onChange={handleChange} name='checkedA' />
          }
          classes={{ label: classes.formControlLabelText }}
          className={classes.formControlLabel}
          label='فقط آگهی های فروشگاه'
          labelPlacement='start'
        />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
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
            aria-controls='panel1a-content'
            id='panel1a-header'
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
            <Switch checked={checked} onChange={handleChange} name='checkedA' />
          }
          className={classes.formControlLabel}
          classes={{ label: classes.formControlLabelText }}
          label='فقط عکس دار'
          labelPlacement='start'
        />
        <Divider />
        <FormControlLabel
          control={
            <Switch checked={checked} onChange={handleChange} name='checkedA' />
          }
          className={classes.formControlLabel}
          classes={{ label: classes.formControlLabelText }}
          label='فقط فوری'
          labelPlacement='start'
        />
        <Divider />
      </div>
    </div>
  );
}
