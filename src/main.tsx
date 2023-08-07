import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Blog.tsx";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostDetail from "./components/blog/PostDetail.tsx";
import posts from "./components/blog/Posts";

//TODO: update to REACT 18
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog/:postId" element={<PostDetail posts={posts} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
