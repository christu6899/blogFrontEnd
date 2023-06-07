import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import AuthService from "../services/auth.service";
const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  let navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("登出成功，重新導向登入介面");
    setCurrentUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-end py-3 mb-4 border-bottom">
        <a
          href="/blogs"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span class="fs-4">BLOG</span>{" "}
        </a>
        <ul className="nav nav-pills ">
          {currentUser && (
            <li className="nav-item">
              <Link to="/blogs" className="nav-link">
                Home
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to="/blogWrite" className="nav-link">
                Write
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link onClick={handleLogout} to="/" className="nav-link">
                Logout
              </Link>
            </li>
          )}
          {!currentUser && (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                login
              </Link>
            </li>
          )}
          {!currentUser && (
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                sign-up
              </Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default NavComponent;
