import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./Blog.tsx";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PostDetail from "./components/blog/PostDetail.tsx";
import posts from "./Posts.tsx";
import { generalData } from "./Config.tsx";

// Set Favicon (Website logo for browser Tab) from config
const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
if (favicon) {
  favicon.href = generalData.logo;
} else {
  const newFavicon = document.createElement("link");
  newFavicon.rel = "icon";
  newFavicon.type = "image/png";
  newFavicon.href = generalData.logo;
  document.head.appendChild(newFavicon);
}

// Set General Website Title (for browser Tab) from Config
document.title = generalData.pageTitle;

// Set General Typo from Config
const link = document.createElement("link");
link.href = generalData.typography.fontLink;
link.rel = "stylesheet";
document.head.appendChild(link);

// Set CSS Properties from Config
const rootElement = document.documentElement;
rootElement.style.setProperty(
  "--typography",
  generalData.typography.fontFamily,
);
rootElement.style.setProperty("--color-dark", generalData.colors.colorDark);
rootElement.style.setProperty(
  "--color-primary",
  generalData.colors.colorPrimary,
);
rootElement.style.setProperty(
  "--color-secondary",
  generalData.colors.colorSecondary,
);
rootElement.style.setProperty(
  "--color-highlight",
  generalData.colors.colorHighlight,
);
rootElement.style.setProperty("--transparent", generalData.colors.transparent);
rootElement.style.setProperty("--color-gray", generalData.colors.colorGray);
rootElement.style.setProperty("--color-white", generalData.colors.colorWhite);

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
