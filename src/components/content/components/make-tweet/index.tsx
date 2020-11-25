import {
	Avatar, Button, InputLabel, TextField, FormControl, MenuItem, Select, FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useState } from 'react';
import photo from '../../../../assets/img/8BFfB3MjuyU.jpg';
import { Actions } from './actions';
import { MessageInfo } from './massage-info';

enum TweetOption {
	ALL= 1,
	READERS,
	MENTIONED
}

type Style = {
    frame: string,
    controls: string,
    makeTweet: string,
    iconWrap: string,
    makeTweetInput: string,
    input: string,
	bntInfoWrap: string,
	formControl: string,
};

const useStyles: () => Style = makeStyles({
	makeTweet: {
		display: 'flex',
		padding: 10,
	},
	makeTweetInput: {
		flex: 1,
	},
	input: {
		width: '100%',
		paddingBottom: 20,
	},
	iconWrap: {
		padding: 20,
	},
	frame: {
		border: '1px solid rgb(230, 236, 240)',
	},
	controls: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	bntInfoWrap: {
		display: 'flex',
		alignItems: 'center',
	},
	formControl: {
		margin: 10,
		minWidth: 120,
	},
});

const MAX_MESSAGE_LENGTH = 280;

export function MakeTweet(): React.ReactElement {
	const wrap = useRef(null);
	const classes: Style = useStyles();
	const [isFocus, setFocus]: [boolean, React.Dispatch<React.SetStateAction<boolean>>]  = useState<boolean>(false);
	const [tweetText, setTweetText]: [string, React.Dispatch<React.SetStateAction<string>>]  = useState<string>('');
	const [readers, setReaders]: [number, React.Dispatch<React.SetStateAction<number>>]  = useState<number>(1);

	const handleFocus: () => void = (): void => {
		if (!isFocus) {
			setFocus(true);
		}
	};

	const handleChangeTweet: (e: React.ChangeEvent<{ value: unknown }>) => void = (e): void => {
		let { value }: { value: string } = (e.target as HTMLInputElement);
		if (value.length > MAX_MESSAGE_LENGTH) {
			value = value.slice(0 , MAX_MESSAGE_LENGTH);
		}
		if (value.length !== tweetText.length) {
			setTweetText(value);
		}
		e.preventDefault();
	};

	const handleChangeTweetOption: (e: React.ChangeEvent<{ value: unknown }>) => void = (e): void => {
		setReaders((e.target.value) as number);
	};

	return (
		<div
			ref={wrap}
			className={`${classes.makeTweet} 
			${classes.frame}`}>
			<div className={classes.iconWrap}>
				<Avatar src={photo} />
			</div>
			<div className={classes.makeTweetInput}>
				<TextField
					onChange={handleChangeTweet}
				    value={tweetText}
				    onFocus={handleFocus}
				    multiline
				    className={classes.input}
				    label="Что происходит?" />
				{
					isFocus && <FormControl className={classes.formControl}>
						<FormHelperText>Кто може читать?</FormHelperText>
						<Select
							id="readers"
							value={readers}
							onChange={handleChangeTweetOption}
							label="Readers"
						>
							<MenuItem value={TweetOption.ALL}>Все</MenuItem>
							<MenuItem value={TweetOption.READERS}>Люди которых вы читаете</MenuItem>
							<MenuItem value={TweetOption.MENTIONED}>Упомянутые вами пользовате</MenuItem>
						</Select>
					</FormControl>
				}
				<div className={classes.controls}>
					<Actions />
					<div className={classes.bntInfoWrap}>
						{ tweetText.length > 0 && <MessageInfo len={tweetText.length} /> }
						<Button
							size="small"
							variant="contained"
							color="primary"
						>
							Твитнуть</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
