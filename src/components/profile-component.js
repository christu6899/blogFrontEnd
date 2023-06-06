import React, { useEffect, useState } from "react";
const ProfileComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>You must login first before getting your profile.</div>
      )}
      {currentUser && (
        <div>
          <h1>In profile page.</h1>
          <header className="jumbotron">
            <h3>
              <strong>{currentUser.foundUser.username}</strong>
            </h3>
          </header>
          <p>
            <strong>Token: {currentUser.token}</strong>
          </p>
          <p>
            <strong>ID: {currentUser.foundUser.id}</strong>
          </p>
          <p>
            <strong>email: {currentUser.foundUser.email}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
