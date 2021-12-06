import jwtDecode from "jwt-decode";

const tokenKey = "token;";

const auth = {
  logout() {
    localStorage.removeItem(tokenKey);
  },
  getCurrentUser() {
    try {
      const jwt = localStorage.getItem(tokenKey);
      return jwtDecode(jwt);
    } catch (error) {
      return null;
    }
  },
};

export default auth;
