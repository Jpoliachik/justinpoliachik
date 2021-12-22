import { PostFull } from "../lib/getPosts";
import markdownStyles from "../styles/markdown-styles.module.css";

export const PostBody = (props: { post: PostFull }) => {
  return (
    <div className="max-w mx-auto">
      <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </div>
  );
};
