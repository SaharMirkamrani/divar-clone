import React from 'react';
import {
  Theme,
  createStyles,
  makeStyles,
  withStyles,
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

const drawerWidth = 290;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      marginTop: 64,
      width: drawerWidth,
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
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    formControl: {
      minWidth: 180,
      marginTop: -40,
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

  const categories = [
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

  const Accordion = withStyles({
    root: {
      width: '100%',
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='right'
      >
        <Divider />
        <List>
          <Typography>دسته بندی ها</Typography>
          {categories.map((text, index) => (
            <ListItem button key={text} className={classes.listItem}>
              <ListItemText primary={text} />
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
        <Divider />
        <FormControlLabel
          control={
            <Switch checked={checked} onChange={handleChange} name='checkedA' />
          }
          label='فقط آگهی های فروش'
          labelPlacement='start'
        />
        <Divider />
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
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
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
              <InputLabel id='demo-simple-select-label'>Age</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
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
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          dolorem sequi sed nisi quasi. Ratione facere, numquam itaque dolorum
          provident incidunt! Blanditiis ea repellendus nam explicabo. Expedita
          aliquid doloremque facilis.
        </Typography>
      </Drawer>
    </div>
  );
}
