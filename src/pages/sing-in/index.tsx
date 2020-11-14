import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        height: '100%'
    },
    section: {
        flex: '0 0 50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info: {
        background: '#1da1f3'
    },
    infoListWrap: {
        
    },
    infoList: {
        width: 380,
        '& p': {
            display: 'flex',
            marginBottom: 20,
            color: '#fff'
        }
    },
    infoItem: {
        color: '#fff',
        fontSize: 30
    },
    singIn: {
        background: '#fff'
    },
    singInWrap: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 380
    },
    singInIcon: {
        height: 40,
        width: 40
    }
});

export default function Index() {
    const classes = useStyles();

    return <div className={classes.wrapper}>
        <section className={`${classes.info} ${classes.section}`}>
            <div className={classes.infoListWrap}>
                <ul className={classes.infoList}>
                    <li className={classes.infoList}>
                        <Typography> <SearchIcon/> Читайте о том, что вам интересно.</Typography>
                    </li>
                    <li className={classes.infoList}>
                        <Typography> <PeopleIcon/> Узнайте, о чем говорят в мире.</Typography>
                    </li>
                    <li className={classes.infoList}>
                        <Typography> <ChatBubbleOutlineIcon/> Присоединяйтесь к общению.</Typography>
                    </li>
                </ul>
            </div>
        </section>
        <section className={`${classes.singIn} ${classes.section}`}>
            <div className={classes.singInWrap}>
                <TwitterIcon className={classes.singInIcon} color="primary" />
                <br/>
                <Typography variant="h4" gutterBottom>Узнайте, что происходит в мире прямо сейчас</Typography>
                <Typography variant="subtitle2" gutterBottom>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                <br/>
                <Button variant="contained" color="primary">Зарегисстрироваться</Button>
                <br/>
                <Button variant="outlined" color="primary">Войти</Button>
            </div>
        </section>
    </div>
}
