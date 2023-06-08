import axios from "axios";
import "dotenv/config.js";
const API_URL = process.env.BACKEND_HOST + "/api/user";

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
