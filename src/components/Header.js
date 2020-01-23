import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		color: 'white'
	}
});

const Header = () => {
	const classes = useStyles();
	return (
		<Box
			component="header"
			p={2}
			bgcolor="primary.dark"
			className={classes.root}
		>
			<Typography variant="h4">Header</Typography>
		</Box>
	);
};

export default Header;
