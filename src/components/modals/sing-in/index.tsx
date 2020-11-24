import { Button, Modal, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useState } from 'react';

const useStyles: () => {modal: string, content: string, icon: string } = makeStyles({
	modal: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: 300,
		padding: 20,
		background: '#fff',
		outline: 'none',
	},
	icon: {
		width: 40,
		height: 40,
	},
});

export function SingIn(): React.ReactElement {
	const classes: {modal: string, content: string, icon: string } = useStyles();

	const [open, setOpen]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);

	const handleOpen: () => void = (): void => {
		setOpen(true);
	};

	const handleClose: () => void = (): void => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleOpen} variant='outlined' color='primary'>Войти</Button>
			<Modal
				className={classes.modal}
				open={open}
				onClose={handleClose}
			>
				<div className={classes.content}>
					<TwitterIcon className={classes.icon} color='primary'/>
					<p>Войти</p>
					<TextField required id='email' label='Email'/>
					<br/>
					<TextField required id='password' label='Password'/>
					<br/>
					<Button variant='contained' color='primary'>Войти</Button>
				</div>
			</Modal>
		</div>);
}
