import { Button, TextField } from '@material-ui/core';
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

export default function SingUp() {
    const classes = useStyles();

    return (<div className={classes.content}>
        <TwitterIcon className={classes.icon} color="primary" />
        <p>Зарегистрироваться</p>
        <TextField required id="email" label="Email"/>
        <br/>
        <TextField required id="Name" label="Имя"/>
        <br/>
        <TextField required id="password" label="Пароль"/>
        <br/>
        <Button variant="contained" color="primary">Зарегистрироваться</Button>
    </div>);
}
