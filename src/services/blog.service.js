import axios from "axios";
const API_URL = "https://api.christu6899.com/api/blogs";

class BlogService {
  //create new blog
  post(title, content) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.post(
      API_URL,
      { title, content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  //edit blog
  edit(blog_id, title, content) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.put(
      API_URL + "/" + blog_id,
      { title, content },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  // get all blogs by user id
  get(user_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/user/" + user_id, {
      headers: { Authorization: token },
    });
  }

  //get blog by blog id
  getBYId(blog_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    return axios.get(API_URL + "/" + blog_id, {
      headers: { Authorization: token },
    });
  }

  //delete blog by blog id
  delete(blog_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    console.log(token, blog_id);
    return axios.delete(API_URL + "/" + blog_id, {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
export default new BlogService();
