import classess from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={classess.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
