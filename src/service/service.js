import axios from 'axios';

const apiBase =
	'https://my-json-server.typicode.com/quickEscape/typicode-json-server';

const getResource = async url => {
	try {
		const res = await axios.get(`${apiBase}${url}`);
		return res.data;
	} catch (err) {
		// here we handle the error if need it
		console.error(`Could not get ${apiBase}${url}`);
	}
};

export const getUsers = async () => {
	return getResource(`/users`);
};
export const getUser = async id => {
	return getResource(`/users/${id}`);
};
