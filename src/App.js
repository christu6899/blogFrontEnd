import NavComponent from "./components/nav-component";
import { Routes, Route } from "react-router-dom";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import BlogsComponent from "./components/blogs-component";
import BlogWriteComponent from "./components/blogWrite-component";
import AuthService from "./services/auth.service";
import BlogEditComponent from "./components/blogedit-component";
import { useState } from "react";
function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  let [editBlogId, setEditBlogId] = useState(null);
  return (
    <div className="App">
      <NavComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Routes>
        <Route
          path="/register"
          element={
            <RegisterComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfileComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/blogs"
          element={
            <BlogsComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              editBlogId={editBlogId}
              setEditBlogId={setEditBlogId}
            />
          }
        />
        <Route
          path="/blogWrite"
          element={
            <BlogWriteComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/editBlog"
          element={
            <BlogEditComponent
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              editBlogId={editBlogId}
              setEditBlogId={setEditBlogId}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
