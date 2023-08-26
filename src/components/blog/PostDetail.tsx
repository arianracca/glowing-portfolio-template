import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { Post } from "../../Posts";
import CustomNavbar from "../navbar/CustomNavbar";
import Footer from "../footer/Footer";

interface PostDetailProps {
  posts: Post[];
}

const sections = [
  { id: "welcome", title: "Home", href: "/" },
  { id: "blog", title: "Blog", href: "/blog" },
  // Add more sections as needed
];

const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const { postId } = useParams<{ postId: string }>();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const index = parseInt(postId);

  if (isNaN(index) || index < 0 || index >= posts.length) {
    // Manejo de caso cuando el índice no es válido
    return (
      <>
        <CustomNavbar sections={sections} />
        <div className={`${styles["post-detail"]} ${styles["post-section"]}`}>
          <div
            className={`${styles["container-width"]} ${styles["post-card"]}`}
          >
            <h2> Post not found </h2>
          </div>
        </div>
        <Footer sectionsFooter={sections} />
      </>
    );
  }

  const post = posts[index];

  return (
    <>
      <CustomNavbar sections={sections} />
      <div className={`${styles["post-detail"]} ${styles["post-section"]}`}>
        <div className={`${styles["container-width"]} ${styles["post-card"]}`}>
          <img
            src={post.image}
            alt={`Post ${index + 1}`}
            className={styles["post-image"]}
          />
          <h2 className={styles["post-title"]}>{post.title}</h2>
          <div
            className={styles["post-content"]}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
      <Footer sectionsFooter={sections} />
    </>
  );
};

export default PostDetail;
