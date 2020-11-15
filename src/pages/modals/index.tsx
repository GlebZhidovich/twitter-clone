import { Button, Modal, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    modal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        outline: 'none'
    }
})

export default function CustomModel(props: { children: React.ReactElement, name: string, type: 'text' | 'outlined' | 'contained'}) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (<div>
        <Button onClick={handleOpen} variant={props.type} color="primary">{props.name}</Button>
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
        >
            {
                props.children
            }
        </Modal>
    </div>);
}
