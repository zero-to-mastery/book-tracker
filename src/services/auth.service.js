import jwtDecode from 'jwt-decode';

const auth = {
	getCurrentUser() {
		try {
			const jwt = localStorage.getItem('token');
			return jwtDecode(jwt);
		} catch (error) {
			return null;
		}
	},
};

export default auth;
