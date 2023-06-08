import axios from "axios";
const API_URL =
  "http://blog-616945270.ap-northeast-1.elb.amazonaws.com/api/user";

class AuthService {
  logout() {
    localStorage.removeItem("user");
  }

  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }

  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
