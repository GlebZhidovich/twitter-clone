import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles: () => {} = makeStyles({
    home: {

    },
});

export default function Home(): React.ReactElement {
    const classes = useStyles();

    return <div>
        Home
    </div>;
}
