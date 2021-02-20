import jwtDecode from 'jwt-decode';

const tokenKey = 'token;';

const auth = {
<<<<<<< HEAD
	logout() {
		localStorage.removeItem(tokenKey);
	},
	getCurrtentUser() {
=======
	getCurrentUser() {
>>>>>>> upstream/master
		try {
			const jwt = localStorage.getItem(tokenKey);
			return jwtDecode(jwt);
		} catch (error) {
			return null;
		}
	},
};

export default auth;
