import { BottomNavigation, BottomNavigationAction, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useState, ChangeEvent, Dispatch } from 'react';

type Style = {root: string, navList: string, navIcon: string, navItem: string};

const useStyles: () => Style = makeStyles({
	root: {
		display: 'inline-block',
		padding: 20,
	},
	navList: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
	},
	navIcon: {
	},
	navItem: {
		'maxWidth': 250,
		'borderRadius': 9999,
		'& span': {
			flexDirection: 'row',
			fontSize: 20,
		},
		'& span .MuiBottomNavigationAction-label.Mui-selected': {
			fontSize: 20,
		},
		'&:hover': {
			background: 'rgba(0, 114, 254, 0.3);',
		},
	},
});

export function Nav(): React.ReactElement {
	const classes: Style = useStyles();

	const [value, setValue]: [number, Dispatch<React.SetStateAction<number>>] = useState<number>(0);
	const handleToggle: (event: ChangeEvent<any>, newValue: number) => void = (event: ChangeEvent<any>, newValue: number): void => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<div className={classes.navIcon}>
				<IconButton>
					<TwitterIcon color='primary' fontSize='large'/>
				</IconButton>
			</div>
			<BottomNavigation
				value={value}
				onChange={handleToggle}
				showLabels
				className={classes.navList}
			>
				<BottomNavigationAction className={classes.navItem} label='Главная' icon={<HomeIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem} label='Поиск' icon={<SearchIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem}
					label='Уведомления' icon={<NotificationsIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem} label='Сообщения' icon={<EmailIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem} label='Закладки' icon={<BookmarkIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem} label='Списки' icon={<ListAltIcon fontSize='large'/>}/>
				<BottomNavigationAction className={classes.navItem} label='Профиль' icon={<PersonIcon fontSize='large'/>}/>
			</BottomNavigation>
		</div>
	);
}
