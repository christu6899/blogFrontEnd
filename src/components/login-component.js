import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/auth.service";
const LoginComponent = (props) => {
  let navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    AuthService.login(email, password)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        window.alert(
          "Login successfully, you are now redirected to the profile page."
        );
        setCurrentUser(AuthService.getCurrentUser());
        navigate("/blogs", { replace: true });
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div style={{ padding: "3rem" }} className=" d-flex justify-content-center">
      {message && <div className="alert alert-danger">{message}</div>}
      <div>
        <div className="form-group">
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
          <label htmlFor="password">Password</label>
          <input
            onChange={passwordHandler}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            <span>Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
