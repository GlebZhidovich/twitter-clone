import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import TwitterIcon from '@material-ui/icons/Twitter';
import React, { useState, ChangeEvent, Dispatch, Fragment } from 'react';

const useStyles: () => {navList: string, navIcon: string, navItem: string} = makeStyles({
    navList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
    },
    navIcon: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        marginRight: 10,
    },
    navItem: {
        'maxWidth': 250,
        '& span': {
           flexDirection: 'row',
           fontSize: 20,
        },
        '& span .MuiBottomNavigationAction-label.Mui-selected': {
            fontSize: 20,
        },
    },
});

export function Nav(): React.ReactElement {
    const classes: {navList: string, navIcon: string, navItem: string} = useStyles();

    const [value, setValue]: [number, Dispatch<React.SetStateAction<number>>] = useState<number>(0);
    const handleToggle: (event: ChangeEvent<{}>, newValue: number) => void =
        (event: ChangeEvent<{}>, newValue: number): void => {
        setValue(newValue);
    };

    return (
        <Fragment>
            <TwitterIcon color='primary' className={classes.navIcon}/>
            <BottomNavigation
                value={value}
                onChange={handleToggle}
                showLabels
                className={classes.navList}
            >
                <BottomNavigationAction className={classes.navItem} label='Главная' icon={<HomeIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem} label='Поиск' icon={<SearchIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem}
                                        label='Уведомления' icon={<NotificationsIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem} label='Сообщения' icon={<EmailIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem} label='Закладки' icon={<BookmarkIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem} label='Списки' icon={<ListAltIcon className={classes.navIcon}/>}/>
                <BottomNavigationAction className={classes.navItem} label='Профиль' icon={<PersonIcon className={classes.navIcon}/>}/>
            </BottomNavigation>
        </Fragment>
    );
}
