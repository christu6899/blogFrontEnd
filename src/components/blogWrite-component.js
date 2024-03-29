import React, { useState } from "react";
import { useNavigate } from "react-router";
import blogService from "../services/blog.service";
const BlogWriteComponent = (props) => {
  let navigate = useNavigate();
  let [message, setMessage] = useState("");
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");

  //取得使用者輸入的blog title
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  //取定使用者輸入的blog content
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  //提交按鈕call api新增blog
  const handleSubmit = () => {
    blogService
      .post(title, content)
      .then(() => {
        window.alert("新文章建立成功");
        navigate("/blogs", { replace: true });
      })
      .catch((error) => {
        console.log(error.response);
        setMessage(error.response.data);
      });
  };

  //blog wirte 頁面
  return (
    <div>
      {message && <div className="alert alert-danger">{message}</div>}

      <div
        style={{ padding: "3rem" }}
        className="d-flex flex-wrap justify-content-center"
      >
        <div className="col-lg-6">
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
              style={{ height: "200px", fontSize: "16px" }}
              className="form-control "
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
