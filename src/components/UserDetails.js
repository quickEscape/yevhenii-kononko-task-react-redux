import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserThunkCreator } from '../redux/actions';
import { makeStyles } from '@material-ui/core/styles';
import {
	Typography,
	Button,
	Grid,
	Box,
	Link,
	CircularProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		paddingBottom: theme.spacing(1),
		'& img': {
			display: 'block',
			maxWidth: 250,
			width: '100%'
		}
	},
	link: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline'
		}
	},
	text: {
		paddingBottom: theme.spacing(2)
	}
}));

const UserDetails = props => {
	const classes = useStyles();
	const { userId, user, getUser, isLoading } = props;

	useEffect(() => {
		getUser(userId);
	}, []);

	const loader = isLoading ? (
		<CircularProgress style={{ margin: 'auto' }} />
	) : null;
	const content = user && !isLoading ? <UserContent user={user} /> : null;

	return (
		<Box p={{ xs: 0, sm: 4 }} className={classes.root}>
			{loader}
			{content}
		</Box>
	);
};

const UserContent = props => {
	const classes = useStyles();
	const { image, first_name, last_name, age, phone, desc } = props.user;
	return (
		<>
			<Grid container spacing={2}>
				<Grid item md={3} xs={5}>
					<img src={image} alt="user" />
				</Grid>
				<Grid
					item
					container
					direction="column"
					justify="space-between"
					md={9}
					xs={7}
					spacing={2}
				>
					<Grid item xs>
						<Typography variant="h5" noWrap>
							{first_name}
						</Typography>
						<Typography variant="h5" noWrap>
							{last_name}
						</Typography>
						<Typography variant="caption">{`Age: ${age}`}</Typography>
					</Grid>
					<Grid item xs>
						<Link href={`tel:${phone}`} className={classes.link}>
							Phone
						</Link>
					</Grid>
				</Grid>
			</Grid>
			<Typography variant="body1" className={classes.text}>
				{desc}
			</Typography>
			<Grid container justify="center">
				<Grid item>
					<Button variant="contained" to="/" component={RouterLink}>
						Back
					</Button>
				</Grid>
			</Grid>
		</>
	);
};

const mapStateToProps = state => ({
	user: state.user,
	isLoading: state.isLoading
});

export default connect(mapStateToProps, { getUser: getUserThunkCreator })(
	UserDetails
);
