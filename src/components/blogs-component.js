import React, { useState, useEffect } from "react";
import blogService from "../services/blog.service";
import { useNavigate } from "react-router";

const BlogsComponent = (props) => {
  let navigate = useNavigate();
  let { currentUser, setEditBlogId } = props;
  let [blogData, setBlogData] = useState([]);
  useEffect(() => {
    console.log("Using effect.");
    let id;
    if (currentUser) {
      id = currentUser.foundUser.id;
    } else {
      id = "";
    }
    blogService
      .get(id)
      .then((data) => {
        console.log(data);
        setBlogData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const blogEdit = (blog_id) => {
    setEditBlogId(blog_id);
    navigate("/editBlog", { replace: true });
  };
  const blogDelete = (blog_id) => {
    blogService
      .delete(blog_id)
      .then(() => {
        alert("delete seccessfully");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="d-flex  justify-content-center py-3 mb-4">
      {currentUser && blogData.length == 0 && (
        <div>
          <h3>趕快來寫第一篇部落格吧!</h3>
        </div>
      )}
      {currentUser && blogData && blogData.length !== 0 && (
        <div className="container">
          <div className="row">
            {blogData.map((blog) => (
              <div key={blog.id} className=" col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.content}</p>
                    <div className="d-flex  justify-content-end">
                      <button
                        onClick={() => {
                          blogEdit(blog.id);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          blogDelete(blog.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsComponent;
