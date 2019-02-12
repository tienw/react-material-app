import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';
import AppRoute from './AppRoute';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    avatar: {
      marginTop: 40,
      width: 60,
      height: 60,
    },
    toolbarButtons: {
      marginLeft: 'auto',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 0,
            flexShrink: 0,
        },
    },
    appBar: {
      flexGrow: 1,
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    grow: {
      flexGrow: 1,
    },
    button: {
      color: theme.palette.common.white
    }
});

class App extends Component {
  state = {
    mobileOpen: false,
  };
  

  handleDrawerToggle = () => {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
 
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
              Contact List
            </Typography>
            <IconButton 
              component={Link}  
              to={`/user`}
              aria-owns='menu-appbar'
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
            <HomeIcon />
            </IconButton>
            <IconButton 
              component={Link}  
              to={`/user/add`}
              aria-owns='menu-appbar'
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
            <AddIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AppRoute />
        </main>
      </div>
    );
  }
  
}

export default withStyles(styles, { withTheme: true })(App);