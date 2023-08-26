import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Post } from "../../Posts";

interface BlogSectionProps {
  posts: Post[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
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
              <div
                className={styles["blog-content"]}
                dangerouslySetInnerHTML={{ __html: post.content.slice(0, 200) }}
              />
              <span>...</span>
              <div className={styles["blog-buttons"]}>
                <Link to={`/blog/${index}`} className={styles["blog-link"]}>
                  <button>
                    <span className={styles["blog-brackets"]}>[</span>
                    Read More
                    <span className={styles["blog-brackets"]}>]</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
