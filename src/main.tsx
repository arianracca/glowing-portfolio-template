import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Blog.tsx";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostDetail from "./components/blog/PostDetail.tsx";
import posts from "./Posts.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/blog/:postId" element={<PostDetail posts={posts} />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
