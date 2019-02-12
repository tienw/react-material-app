import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

const users = require('../Data.json');

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 1,
      overflowX: 'auto',
    },
    table: {
      minWidth:240,
    },
    avatar: {
        width:120,
        height:120,
        margin:10,
    },
    card: {
        marginBottom:10,
        paddingBottom:20,
        maxWidth: 500
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 210,
    },
    center: {
        display: 'flex', 
        justifyContent: 'center' 
    }
    
  });
  

class UserDetail extends React.Component{
    state = {
        firstName : '',
        lastname : '',
        title: '',
        email: '',
        image: 'default.jpg'
    };

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let u = users.find(x => x.id == this.props.match.params.id);
        this.setState({
            firstName: u.firstName,
            lastName: u.lastName,
            title: u.title,
            email: u.email,
            image: u.image
        })
    }

    render(){
        const { classes, theme } = this.props;
        return (
            <div >
                <div className={classes.center}>
                    <Avatar alt={this.state.firstName + this.state.lastName} src={(this.state.image) ? require(`../images/${this.state.image}`) : require(`../images/default.jpg`)} className={classes.avatar} />
                </div>
                <div className={classes.center}>
                    <h3>{this.state.title}. {this.state.firstName} {this.state.lastName}</h3>
                </div>
                <div className={classes.center}>
                    <Card className={classes.card}>
                        <CardContent>
                        <form className={classes.container} noValidate autoComplete="off">
                        <TextField
                            id="standard-read-only-input"
                            label="First Name"
                            defaultValue={this.state.firstName}
                            value={this.state.firstName}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Last Name"
                            InputLabelProps={{ shrink: true }}
                            defaultValue={this.state.firstName}
                            value={this.state.lastName}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Email"
                            value={this.state.email}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="standard-read-only-input"
                            label="Title"
                            value={this.state.title}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

UserDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserDetail);