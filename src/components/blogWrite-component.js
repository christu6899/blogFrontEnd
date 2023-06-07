import React, { useState } from "react";
import { useNavigate } from "react-router";
import blogService from "../services/blog.service";
const BlogWriteComponent = (props) => {
  let navigate = useNavigate();
  let { currentUser, setCurrentUser } = props;
  let [message, setMessage] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = () => {
    blogService
      .post(title, content)
      .then(() => {
        window.alert("New blog has been created.");
        navigate("/blogs", { replace: true });
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };
  return (
    <div>
      {message && <div className="alert alert-danger">{message}</div>}

      <div
        style={{ padding: "3rem" }}
        className=" d-flex flex-wrap justify-content-center "
      >
        <div>
          <h1>Write Page</h1>

          <div className="form-group">
            <label htmlFor="Title">標題</label>
            <input
              onChange={titleHandler}
              type="text"
              className="form-control"
              name="email"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password">內容</label>
            <textarea
              className="form-control"
              id="exampleforContent"
              name="content"
              onChange={contentHandler}
            />
          </div>
          <br />
          <div className="form-group">
            <button
              onClick={handleSubmit}
              className="btn btn-primary btn-block"
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWriteComponent;
