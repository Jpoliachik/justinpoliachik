import { PostFull } from "../lib/getPosts";

export const PostBody = (props: { post: PostFull }) => {
  return (
    <div className="max-w mx-auto">
      <div className="font-sans" dangerouslySetInnerHTML={{ __html: props.post.content }} />
    </div>
  );
};
