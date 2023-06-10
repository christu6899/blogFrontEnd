import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import blogService from "../services/blog.service";
const BlogEditComponent = (props) => {
  let navigate = useNavigate();
  let { currentUser, setCurrentUser, editBlogId, setEditBlogId } = props;
  let [blogData, setBlogData] = useState([]);
  let [message, setMessage] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    console.log(editBlogId);
    blogService
      .getBYId(editBlogId)
      .then((data) => {
        setBlogData(data.data);
        setTitle(data.data.title);
        setContent(data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = () => {
    blogService
      .edit(editBlogId, title, content)
      .then(() => {
        alert("文章更新成功");
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
        className=" d-flex flex-wrap justify-content-center"
      >
        <div className="col-lg-6">
          <h1>Edit Page</h1>
          <div className="form-group">
            <label htmlFor="Title">標題</label>
            <input
              onChange={titleHandler}
              type="text"
              className="form-control"
              name="email"
              defaultValue={blogData.title}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="password">內容</label>
            <textarea
              style={{ height: "200px", fontSize: "16px" }}
              className="form-control"
              id="exampleforContent"
              name="content"
              onChange={contentHandler}
              defaultValue={blogData.content}
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

export default BlogEditComponent;
