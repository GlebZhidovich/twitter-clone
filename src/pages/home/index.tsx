import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Nav } from '../nav';

const useStyles: (props?: any) => Record<'paper' | 'home' | 'homeNav', string> = makeStyles({
    home: {
        display: 'flex',
    },
    homeNav: {
        display: 'flex',
        flexDirection: 'column',
    },
    paper: {
        padding: 20,
        textAlign: 'center',
        color: '#fff',
    },
});

export function Home(): React.ReactElement {
    const classes: Record<'paper' | 'home' | 'homeNav', string> = useStyles();

    return <div className={classes.home}>
        <div className={classes.homeNav}>
            <Nav/>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>;
}
