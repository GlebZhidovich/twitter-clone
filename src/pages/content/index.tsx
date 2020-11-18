import { Avatar, Button, IconButton, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import React from 'react';
import photo from '../../assets/img/8BFfB3MjuyU.jpg';

type Style = {root: string, main: string, frame: string, makeTweet: string, iconWrap: string, makeTweetInput: string, input: string};

const useStyles: () => Style = makeStyles({
    root: {
        maxWidth: 600,
        paddingTop: 20,
        textAlign: 'start',
    },
    main: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 15px',
    },
    makeTweet: {
        display: 'flex',
        padding: 10,
    },
    makeTweetInput: {
        flex: 1,
    },
    input: {
        width: '100%',
        paddingBottom : 20,
    },
    iconWrap: {
        padding: 20,
    },
    frame: {
        border: '1px solid rgb(230, 236, 240)',
    },
});

export function Content(): React.ReactElement {
    const classes: Style = useStyles();

    return <div className={classes.root}>
        <div className={`${classes.main} ${classes.frame}`}>
            <Typography variant='h6'>Главная</Typography>
            <IconButton size='medium'>
                <StarIcon fontSize='large'/>
            </IconButton>
        </div>
        <div className={`${classes.makeTweet} ${classes.frame}`}>
            <div className={classes.iconWrap}>
                <Avatar src={photo}/>
            </div>
            <div className={classes.makeTweetInput}>
                <TextField className={classes.input} label='Что происходит?'/>
                <Button variant='contained' color='primary'>Твитнуть</Button>
            </div>
        </div>
    </div>;
}
