export const RecentPosts = () => {
  return (
    <div>
      <div className="text-xl font-serif">Recent Posts</div>
      <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
      <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
      <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
      <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
      <div className="text-l text-right font-sans">All Posts</div>
    </div>
  );
};

const PostLink = (props: { title: string; date: string }) => {
  return (
    <div className="flex flex-row text-m font-sans justify-between">
      <div>{props.title}</div>
      <div>{props.date}</div>
    </div>
  );
};
