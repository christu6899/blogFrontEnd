import axios from "axios";
const API_URL = "https://api.christu6899.com/api/user";

class AuthService {
  //使用者登出清localstorage
  logout() {
    localStorage.removeItem("user");
  }
  //call登入api登入api
  login(email, password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    });
  }

  //call註冊api
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
    });
  }
  //取得user jwt token
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
