import React from 'react';
import { IconButton } from '@material-ui/core';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import EventIcon from '@material-ui/icons/Event';

export function Actions(): React.ReactElement {
	return (
		<div>
			<IconButton size="medium">
				<CropOriginalIcon fontSize="inherit" />
			</IconButton>
			<IconButton size="medium">
				<GifIcon fontSize="inherit" />
			</IconButton>
			<IconButton size="medium">
				<BarChartIcon fontSize="inherit" />
			</IconButton>
			<IconButton size="medium">
				<InsertEmoticonIcon fontSize="inherit" />
			</IconButton>
			<IconButton size="medium">
				<EventIcon fontSize="inherit" />
			</IconButton>
		</div>
	);
}
