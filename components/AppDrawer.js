import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import NavButtons from '../components/NavButtons';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  fab:{
      position: 'fixed',
      marginTop: 20
  }
});

export default function AppDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <NavButtons />
    </div>
  );

  return (
    <div>
     
      <Fab onClick={toggleDrawer('top', true)} variant="extended" size="large" color="secondary" className={classes.fab}><MenuIcon /> MENU</Fab>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>

    </div>
  );
}