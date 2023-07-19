import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
const RegisterComponent = () => {
  let navigate = useNavigate();
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState("");

  //取得使用者輸入的email
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  //取得使用者輸入的使用者名稱
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  //取得用戶輸入的密碼
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  //註冊按鈕 call api 註冊使用者
  const handleRegister = () => {
    AuthService.register(username, email, password)
      .then(() => {
        window.alert("成功註冊");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err.response);
        setMessage(err.response.data);
      });
  };
  return (
    <div style={{ padding: "3rem" }} className="d-flex justify-content-center">
      <div>
        {message && <div className="alert alert-danger">{message}</div>}
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={emailHandler}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            onChange={usernameHandler}
            type="text"
            className="form-control"
            name="username"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={passwordHandler}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <button onClick={handleRegister} className="btn btn-primary">
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterComponent;
