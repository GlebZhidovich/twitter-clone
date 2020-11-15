import { Button, TextField, FormGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';

const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexDirection: 'column',
        width: 300,
        padding: 20,
        background: '#fff'
    },
    icon: {
        width: 40,
        height: 40
    }
})

export default function SingIn() {
    const classes = useStyles();

    return (<div className={classes.content}>
                <TwitterIcon className={classes.icon} color="primary" />
                <p>Войти</p>
                <TextField required id="email" label="Email"/>
                <br/>
                <TextField required id="password" label="Password"/>
                <br/>
                <Button variant="contained" color="primary">Войти</Button>
            </div>);
}
