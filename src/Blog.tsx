import "./App.css";
import BlogSection from "./components/blog/BlogSection";
import CustomNavbar from "./components/navbar/CustomNavbar";
import Footer from "./components/footer/Footer";
import posts from "./components/blog/Posts";
import "bootstrap/dist/css/bootstrap.min.css";

function Blog() {
  const sections = [
    { id: "welcome", title: "Home", href: "/" },
    { id: "blog", title: "Blog", href: "/blog" },
    // Add more sections as needed
  ];

  return (
    <div className="App">
      <CustomNavbar sections={sections} />
      <BlogSection posts={posts} />
      <Footer sectionsFooter={sections} />
    </div>
  );
}

export default Blog;
