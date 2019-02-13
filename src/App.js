import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';
import AppRoute from './AppRoute';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
        marginRight: 5,
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

    const drawer = (
      <div>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12}>
            <Avatar className={classes.avatar}>
              <AccountCircle size="large" />
            </Avatar>
          </Grid>
          <Grid item xs={12}>
          <h3>Welcome, user</h3>
          </Grid>
        </Grid>
        <Divider />
        <List>
          <Link to="/User" onClick={this.handleDrawerToggle} style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItem>
          </Link>
          <Link to="/User/Add" onClick={this.handleDrawerToggle} style={{ textDecoration: 'none'}}>
            <ListItem button>
              <ListItemIcon><InboxIcon /> </ListItemIcon>
              <ListItemText primary="Add User" />
            </ListItem>
          </Link>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow} noWrap>
              Contact List
            </Typography>
            <Hidden xsDown>
            <IconButton
                aria-owns='menu-appbar'
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Hidden>
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
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AppRoute />
        </main>
      </div>
    );
  }
  
}

export default withStyles(styles, { withTheme: true })(App);