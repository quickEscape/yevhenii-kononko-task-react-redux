import { sortTypes, SET_USERS, SET_SORT_TYPE, GET_USER } from './actions';

const MAX_USERS = 20;

const initialState = {
	users: [],
	user: null,
	loadMoreButton: true,
	isLoading: false,
	sortType: sortTypes.ID_ASC
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return {
				...state,
				user: action.user
			};
		case SET_USERS:
			const newUsers = [...state.users, ...action.users];
			return {
				...state,
				users: newUsers,
				loadMoreButton: newUsers.length < MAX_USERS
			};
		case SET_SORT_TYPE:
			const sortedUsers = state.users
				.slice()
				.sort((a, b) =>
					action.sort === sortTypes.AGE_ASC ? a.age - b.age : b.age - a.age
				);
			return { ...state, sortType: action.sort, users: sortedUsers };
		default:
			return state;
	}
}

export default userReducer;
