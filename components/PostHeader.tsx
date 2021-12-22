import { format } from "date-fns";
import { PostFull } from "../lib/getPosts";

export const PostHeader = (props: { post: PostFull }) => {
  const dateString = format(new Date(props.post.date), "PPP");
  return (
    <div className="max-w mx-auto">
      <div className="text-2xl md:text-4xl font-serif font-semibold">{props.post.title}</div>
      <div className="text-sm font-sans">{dateString}</div>
    </div>
  );
};
