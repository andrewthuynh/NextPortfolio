import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import NavButtons from '../components/NavButtons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  fab: {
    position: 'fixed',
    marginTop: 20
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 5,
  },
  title: {
    flexGrow: 1,
    color: '#ff9679',
    marginLeft: '10%',
    cursor: 'pointer'
  },
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

    <div className={classes.root}>
      <AppBar position="static" color="inherit" style={{boxShadow: "none"}}>
        <Toolbar>
        <Link href="/">
          <Typography variant="h4" className={classes.title}>
            ANDREW HUYNH
          </Typography>
          </Link>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleDrawer('top', true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
    </div>

  );
}