import React from "react";
const ProfileComponent = (props) => {
  let { currentUser } = props;
  return (
    <div style={{ padding: "3rem" }} className="container">
      {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && (
        <div style={{ padding: "3rem" }} className="d-flex ">
          <div className="col-lg-6 ">
            <h1>In profile page.</h1>
            <header className="jumbotron">
              <h3>
                <strong>{currentUser.foundUser.username}</strong>
              </h3>
            </header>
            <p>
              <strong>
                Token:
                {currentUser.token}
              </strong>
            </p>
            <p>
              <strong>ID: {currentUser.foundUser.id}</strong>
            </p>
            <p>
              <strong>email: {currentUser.foundUser.email}</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
