import { getUser, getUsers } from '../service/service';

/*
 * action types
 */
export const SET_USERS = 'SET_USERS';
export const GET_USER = 'GET_USER';
export const SET_SORT_TYPE = 'SET_SORT_TYPE';
export const TOOGLE_IS_LOADING = 'TOOGLE_IS_LOADING';
/*
 * other constants
 */
export const sortTypes = {
	ID_ASC: 'ID_ASC',
	AGE_DESC: 'AGE_DESC',
	AGE_ASC: 'AGE_ASC'
};
/*
 * action creators
 */
export const setUsers = users => ({ type: SET_USERS, users });
export const getUserDetail = user => ({ type: GET_USER, user });
export const toggleIsLoading = isLoading => ({
	type: TOOGLE_IS_LOADING,
	isLoading
});
export const setSortType = sort => ({ type: SET_SORT_TYPE, sort });
/*
 * thunk creators
 */
export const getUsersThunkCreator = (currentUsersCount = 0) => dispatch => {
	dispatch(toggleIsLoading(true));
	getUsers().then(users => {
		dispatch(toggleIsLoading(false));
		dispatch(setUsers(users.slice(currentUsersCount, currentUsersCount + 3)));
		dispatch(setSortType(null));
	});
};
export const getUserThunkCreator = id => dispatch => {
	dispatch(toggleIsLoading(true));
	getUser(id).then(user => {
		dispatch(toggleIsLoading(false));
		dispatch(getUserDetail(user));
	});
};
