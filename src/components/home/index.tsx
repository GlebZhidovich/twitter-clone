import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Content } from '../content';
import { Nav } from '../nav';
import { Search } from '../search';

const useStyles: () => {home: string, homeColumn: string} = makeStyles({
	home: {
		display: 'flex',
	},
	homeColumn: {
		flex: 1,
		textAlign: 'center',
	},
});

export function Home(): React.ReactElement {
	const classes: {home: string, homeColumn: string} = useStyles();

	return <div className={classes.home}>
		<div className={classes.homeColumn}>
			<Nav/>
		</div>
		<div className={classes.homeColumn}>
			<Content/>
		</div>
		<div className={classes.homeColumn}>
			<Search/>
		</div>
	</div>;
}
