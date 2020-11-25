import { CircularProgress, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';


type Style = {
	root: string,
	separator: string,
	maxLength: string,
};

const useStyles: () => Style = makeStyles({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
	separator: {
		width: 2,
		height: 30,
		marginLeft: 12,
		background: '#000',
	},
	maxLength: {
		color: '#ff0000',
	}
});

const MAX_MESSAGE_LENGTH = 280;

export function MessageInfo(props: {len: number}): React.ReactElement {
	const classes: Style = useStyles();
	const progress = props.len / MAX_MESSAGE_LENGTH * 100;
	const isMaxLength = props.len === MAX_MESSAGE_LENGTH;

	return <div className={classes.root}>
		<CircularProgress className={isMaxLength ? classes.maxLength : undefined} size={20} variant="static" value={progress} />
		<div className={classes.separator}></div>
		<IconButton size="medium">
			<AddIcon fontSize="inherit" />
		</IconButton>
	</div>;
}
