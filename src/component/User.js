import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const users = require('../Data.json');

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 1,
      overflowX: 'auto',
    },
    table: {
    },
    card: {   
        width: '100%',
    },
    container: {
    },
    center: {
        display:'flex',
        justifyContent: 'center'
    },
    list: {
        width:'100%'
    }
  });
  
  const titles = [
    {
        value: '',
        label: ''
    },
    {
        value: 'Mr',
        label: 'Mr',
    },
    {
        value: 'Ms',
        label: 'Ms',
    },
    {
        value: 'Mrs',
        label: 'Mrs',
    },
    {
        value: 'Miss',
        label: 'Miss',
    },
  ];


class User extends React.Component{

    state = {
        open: false,
        users: users,
        title:'',
        firstName: '',
        lastName: '',
        email:''
    };
    
    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };
    
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleCreate = () => {
        if(this.state.firstName != '' || this.state.lastName != '' || this.state.email != '' || this.state.title){
            let u = {
                id: this.state.users.length + 1,
                title: this.state.title,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email
            }
    
            users.push(u);
    
            this.setState({ 
                users: users,
                open: false,
                firstName: '',
                lastName: '',
                email: '',
                title: ''
            });
        }
    }

    handleItemClick = (u) => {
        this.props.history.push('/user/' + u.id);
    }

    render() {
        const { classes, theme } = this.props;
          
        return (
            <div className={classes.center}>
                <Paper className={classes.card}>
                <List dense className={classes.list}>
                    {this.state.users.map(u => (
                    <ListItem key={u.id} button onClick={() =>this.handleItemClick(u)}>
                        <ListItemAvatar>
                        <Avatar
                            alt={`${u.firstName + ' ' + u.lastName}`}
                            src={(u.image) ? process.env.PUBLIC_URL + `/images/${u.image}` : process.env.PUBLIC_URL + `/images/default.jpg`}
                        />
                        </ListItemAvatar>
                        <ListItemText primary={`${u.firstName + ' ' + u.lastName}`} />
                        <ListItemSecondaryAction>
                        </ListItemSecondaryAction>
                    </ListItem>
                    ))}
                </List>
                </Paper>
            </div>
        );
    } 
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default withStyles(styles)(User);