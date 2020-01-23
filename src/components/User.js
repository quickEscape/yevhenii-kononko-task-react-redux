import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		border: '1px solid black',
		'&:not(:first-child)': {
			marginTop: theme.spacing(4)
		},
		'& img': {
			display: 'block',
			maxWidth: 150,
			width: '100%'
		}
	},
	avatar: {
		margin: 'auto'
	},
	link: {
		color: 'inherit',
		textDecoration: 'none',
		[theme.breakpoints.up('sm')]: {
			flexWrap: 'nowrap'
		}
	},
	userInfo: {
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
			justifyContent: 'space-between'
		}
	}
}));

const User = props => {
	const { id, first_name, last_name, desc, image, age } = props.user;
	const classes = useStyles();
	return (
		<Box p={2} className={classes.root}>
			<Grid
				container
				spacing={2}
				to={`/${id}`}
				component={RouterLink}
				className={classes.link}
			>
				<Grid item className={classes.avatar}>
					<img src={image} alt="avatar" />
				</Grid>
				<Grid item container direction="column">
					<Grid
						item
						container
						alignItems="baseline"
						spacing={1}
						className={classes.userInfo}
					>
						<Grid item xs>
							<Typography
								variant="h5"
								noWrap
							>{`${first_name} ${last_name}`}</Typography>
						</Grid>
						<Grid item>
							<Typography variant="caption">{`Age: ${age}`}</Typography>
						</Grid>
					</Grid>
					<Grid item>
						<Typography variant="body1">{`${desc.slice(0, 90)}...`}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default User;
