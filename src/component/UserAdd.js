import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const users = require('../Data.json');

const styles = theme => ({
    paper: {
        padding: 20,
        marginBottom:10,
        paddingBottom:20,
        maxWidth: 500
    },
    center: {
        display: 'flex', 
        justifyContent: 'center' 
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

class UserAdd extends React.Component{

    state = {
        open: false,
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        title:'',
        firstName: '',
        lastName: '',
        email:''

    };
    
    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleCreate = () => {
        if(this.state.firstName != '' && this.state.lastName != '' && this.state.email != '' && this.state.title){
            let u = {
                id: users.length + 1,
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

            this.props.history.push('/user');
        }
    }

    render(){
        const { classes, theme } = this.props;
        return (
            <div>
                <div className={classes.center}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={24}>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    ref="txtFirstName"
                                    autoFocus
                                    margin="dense"
                                    id="firstName"
                                    label="First Name"
                                    type="text"
                                    fullWidth
                                    value={this.state.firstName}
                                    onChange={e => this.setState({ firstName: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="lastName"
                                    label="Last Name"
                                    type="text"
                                    fullWidth
                                    value={this.state.lastName}
                                    onChange={e => this.setState({ lastName: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    required
                                    ref="inpTitle"
                                    fullWidth
                                    select
                                    margin="dense"
                                    label="Title"
                                    value={this.state.title}
                                    onChange={this.handleChange('title')}
                                    >
                                    {titles.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    type="text"
                                    fullWidth
                                    value={this.state.email}
                                    onChange={e => this.setState({ email: e.target.value})}
                                />
                            </Grid>
                            <Grid item xs={12} style={{ textAlign:"right"}}>
                                <Button variant="contained" color="primary" className={classes.button}  onClick={this.handleCreate}>
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </div>
        )
    }
}

UserAdd.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAdd);