import { IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

const useStyles: () => {root: string} = makeStyles({
	root: {
		padding: 20,
	},
});

export function Search(): React.ReactElement {
	const classes: {root: string} = useStyles();

	return <div className={classes.root}>
		<TextField label='Search' variant='outlined' InputProps={{
			endAdornment: (
				<IconButton size='medium'>
					<SearchIcon fontSize='inherit' />
				</IconButton>
			),
		}}/>
	</div>;
}
