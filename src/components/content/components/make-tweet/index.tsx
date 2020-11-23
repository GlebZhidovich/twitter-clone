import { Avatar, Button, CircularProgress, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import photo from '../../../../assets/img/8BFfB3MjuyU.jpg';

type Style = {frame: string, controls: string, makeTweet: string, iconWrap: string, makeTweetInput: string, input: string};

const useStyles: () => Style = makeStyles({
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
    controls: {
        display: 'flex',
    },
});

export function MakeTweet(): React.ReactElement {
    const classes: Style = useStyles();

    return (
        <div className={`${classes.makeTweet} ${classes.frame}`}>
            <div className={classes.iconWrap}>
                <Avatar src={photo}/>
            </div>
            <div className={classes.makeTweetInput}>
                <TextField multiline className={classes.input} label='Что происходит?'/>
                <div className={classes.controls}>
                    <Button variant='contained' color='primary'>Твитнуть</Button>
                    <CircularProgress variant='static' value={25} />
                </div>
            </div>
        </div>
    );
}
