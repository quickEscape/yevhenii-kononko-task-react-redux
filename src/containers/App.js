import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import Header from '../components/Header';
import UsersBlock from '../components/UsersBlock';
import UserDetails from '../components/UserDetails';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		padding: theme.spacing(2),
		backgroundColor: 'white',
		border: '2px solid black',
		minHeight: '60vh'
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<Router>
			<Header />
			<Box component="main" mt={2}>
				<Container maxWidth="md" className={classes.root}>
					<Switch>
						<Route
							path="/:id"
							render={({ match }) => {
								const { id } = match.params;
								return <UserDetails userId={id} />;
							}}
						/>
						<Route path="/" exact>
							<UsersBlock />
						</Route>
					</Switch>
				</Container>
			</Box>
		</Router>
	);
};

export default App;
