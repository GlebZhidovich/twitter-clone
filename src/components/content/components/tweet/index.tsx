import { Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import RepeatIcon from '@material-ui/icons/Repeat';
import React from 'react';
import photo from '../../../../assets/img/8BFfB3MjuyU.jpg';

type Styles = {
    root: string,
    iconWrap: string,
    header: string,
    body: string,
    footer: string,
    frame: string,
    info: string,
    name: string,
    title: string,
    tag: string,
    time: string,
};

const useStyles: () => Styles = makeStyles({
	root: {
		display: 'flex',
		marginTop: 10,
		padding: 10,
	},
	iconWrap: {
		padding: 20,
	},
	frame: {
		border: '1px solid rgb(230, 236, 240)',
	},
	info: {
		width: '100%',
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		marginRight: 10,
		fontWeight: 500,
	},
	title: {},
	tag: {
		marginRight: 10,
	},
	time: {},
	body: {},
	footer: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

export function Tweet(): React.ReactElement {
	const classes: Styles = useStyles();

	return <div className={`${classes.root} ${classes.frame}`}>
		<div>
			<div className={classes.iconWrap}>
				<Avatar src={photo}/>
			</div>
		</div>
		<div className={classes.info}>
			<header className={classes.header}>
				<div className={classes.title}>
					<span className={classes.name}>{'Gleb'}</span>
					<span className={classes.tag}>{'@Gleb'}</span>
					<span className={classes.time}>{'20c'}</span>
				</div>
				<div className='setting'>
					<IconButton>
						<MoreHorizIcon color='primary' fontSize='large'/>
					</IconButton>
				</div>
			</header>
			<main className={classes.body}>
				<div className='postText'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis, expedita id laboriosam laudantium molestiae quas reiciendis!
                    Dolorum eveniet illum totam.
				</div>
			</main>
			<footer className={classes.footer}>
				<IconButton>
					<ChatBubbleOutlineIcon color='primary' fontSize='small'/>
				</IconButton>
				<IconButton>
					<RepeatIcon color='primary' fontSize='small'/>
				</IconButton>
				<IconButton>
					<FavoriteBorderIcon color='primary' fontSize='small'/>
				</IconButton>
				<IconButton>
					<PresentToAllIcon color='primary' fontSize='small'/>
				</IconButton>
				<IconButton>
					<EqualizerIcon color='primary' fontSize='small'/>
				</IconButton>
			</footer>
		</div>
	</div>;
}
