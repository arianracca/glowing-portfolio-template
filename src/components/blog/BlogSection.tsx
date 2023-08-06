import React from "react";
import styles from "./styles.module.css";

interface Post {
  title: string;
  content: string;
  image: string;
}

const BlogSection: React.FC = () => {
  // Ejemplo de datos de los posts
  const posts: Post[] = [
    {
      title: "Post 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, erat ut iaculis mattis, felis nisi tristique purus.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Post 2",
      content:
        "Praesent eget massa sapien. Cras venenatis lorem in orci varius euismod. Curabitur tincidunt neque id turpis bibendum eleifend.",
      image: "https://via.placeholder.com/300",
    },
    // Agregar más posts según sea necesario
  ];

  return (
    <section id="blog" className={styles["blog-section"]}>
      <div className={`container ${styles["blog-grid"]}`}>
        {posts.map((post, index) => (
          <div className={styles["blog-card"]} key={index}>
            <img
              src={post.image}
              alt={`Post ${index + 1}`}
              className={styles["blog-image"]}
            />
            <div className={styles["blog-content"]}>
              <h2 className={styles["blog-title"]}>{post.title}</h2>
              <p>{post.content}</p>
              <div className={styles["blog-buttons"]}>
                <button>
                  <span className={styles["blog-brackets"]}>[</span>
                  Read More
                  <span className={styles["blog-brackets"]}>]</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
