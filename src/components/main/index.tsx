import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PeopleIcon from '@material-ui/icons/People';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import { SingIn } from '../modals/sing-in';
import { SingUp } from '../modals/sing-up';

type Style = {
    wrapper: string,
    section: string,
    info: string,
    infoList: string,
    infoListWrap: string,
    infoIcon: string
    singIn: string,
    singInWrap: string,
    singInIcon: string
};

const useStyles: () => Style = makeStyles({
	wrapper: {
		display: 'flex',
		height: '100%',
	},
	section: {
		flex: '0 0 50%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	info: {
		background: '#1da1f3',
	},
	infoListWrap: {},
	infoList: {
		'width': 380,
		'& p': {
			display: 'flex',
			alignItems: 'center',
			marginBottom: 20,
			color: '#fff',
		},
	},
	infoIcon: {
		width: 30,
		height: 30,
		marginRight: 20,
	},
	singIn: {
		background: '#fff',
	},
	singInWrap: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		width: 380,
	},
	singInIcon: {
		height: 40,
		width: 40,
	},
});

export function Main(): React.ReactElement {
	const classes: Style = useStyles();

	return <div className={classes.wrapper}>
		<section className={`${classes.info} ${classes.section}`}>
			<div className={classes.infoListWrap}>
				<ul className={classes.infoList}>
					<li className={classes.infoList}>
						<Typography> <SearchIcon className={classes.infoIcon}/> Читайте о том, что вам интересно.</Typography>
					</li>
					<li className={classes.infoList}>
						<Typography> <PeopleIcon className={classes.infoIcon}/> Узнайте, о чем говорят в мире.</Typography>
					</li>
					<li className={classes.infoList}>
						<Typography> <ChatBubbleOutlineIcon className={classes.infoIcon}/> Присоединяйтесь к общению.</Typography>
					</li>
				</ul>
			</div>
		</section>
		<section className={`${classes.singIn} ${classes.section}`}>
			<div className={classes.singInWrap}>
				<TwitterIcon className={classes.singInIcon} color='primary' />
				<br/>
				<Typography variant='h4' gutterBottom>Узнайте, что происходит в мире прямо сейчас</Typography>
				<Typography variant='subtitle2' gutterBottom>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
				<SingUp/>
				<br/>
				<SingIn/>
			</div>
		</section>
	</div>;
}
