import { format } from "date-fns";

import { PostSummary } from "../lib/getPosts";

export const RecentPosts = (props: { postsList: PostSummary[] }) => {
  const recentPosts = props.postsList.slice(0, 4);
  return (
    <div>
      <div className="text-xl font-serif text-gray-400">Recent Posts</div>
      <div className="my-2 space-y-1">
        {recentPosts.map((post) => {
          const dateString = format(new Date(post.date), "PP");
          return <PostLink title={post.title} date={dateString} link={`/posts/${post.id}`} />;
        })}
      </div>

      <div className="text-right">
        <a href="/posts" className="text-l font-sans font-semibold text-green-700 no-underline hover:underline">
          All Posts
        </a>
      </div>
    </div>
  );
};

const PostLink = (props: { title: string; date: string; link: string }) => {
  return (
    <div className="flex flex-row text-m font-sans justify-between items-center">
      <a href={props.link} className="flex flex-1 font-semibold no-underline hover:underline">
        {props.title}
      </a>
      <div className="text-xs text-gray-400 ml-2 text-right">{props.date}</div>
    </div>
  );
};
