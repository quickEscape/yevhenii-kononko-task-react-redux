import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
	setSortType,
	sortTypes,
	getUsersThunkCreator
} from '../redux/actions';
import { Grid, Box, Button, CircularProgress } from '@material-ui/core';
import User from './User';

const UsersBlock = props => {
	const {
		isLoading,
		loadMoreButton,
		users,
		setSortType,
		getUsers,
		sortType
	} = props;

	useEffect(() => {
		!users.length && getUsers();
	}, []);

	return !users.length || isLoading ? (
		<CircularProgress style={{ margin: 'auto' }} />
	) : (
		<Box pb={2} width="100%">
			<SortButtons
				setSortType={setSortType}
				isLoading={isLoading}
				sortType={sortType}
			/>
			<Box mt={2} mb={2}>
				{users.map(user => (
					<User key={user.id} user={user} />
				))}
			</Box>
			{loadMoreButton && (
				<LoadMore
					getUsers={getUsers}
					usersCount={users.length}
					isLoading={isLoading}
				/>
			)}
		</Box>
	);
};

const SortButtons = props => {
	const { setSortType, isLoading, sortType } = props;
	return (
		<Grid container spacing={2} justify="flex-end">
			<Grid item>
				<Button
					variant="outlined"
					onClick={() => setSortType(sortTypes.AGE_ASC)}
					disabled={isLoading || sortType === sortTypes.AGE_ASC}
				>
					Age ASC
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant="outlined"
					onClick={() => setSortType(sortTypes.AGE_DESC)}
					disabled={isLoading || sortType === sortTypes.AGE_DESC}
				>
					Age DESC
				</Button>
			</Grid>
		</Grid>
	);
};

const LoadMore = props => {
	const { usersCount, getUsers, isLoading } = props;
	return (
		<Grid container justify="center">
			<Grid item>
				<Button
					variant="contained"
					color="primary"
					onClick={() => getUsers(usersCount)}
					disabled={isLoading && true}
				>
					Load More
				</Button>
			</Grid>
		</Grid>
	);
};

const mapStateToProps = state => ({
	users: state.users,
	isLoading: state.isLoading,
	loadMoreButton: state.loadMoreButton,
	sortType: state.sortType
});

export default connect(mapStateToProps, {
	setSortType,
	getUsers: getUsersThunkCreator
})(UsersBlock);
