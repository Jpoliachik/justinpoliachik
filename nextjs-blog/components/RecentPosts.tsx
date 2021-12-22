export const RecentPosts = () => {
  return (
    <div>
      <div className="text-xl font-serif text-gray-400">Recent Posts</div>
      <div className="my-2 space-y-1">
        <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
        <PostLink
          title={
            "Bacon ipsum dolor amet pastrami brisket buffalo chuck ground round boudin turkey burgdoggen. Tongue burgdo"
          }
          date={"Oct 13 2021"}
        />
        <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
        <PostLink title={"How I backup my old dev projects"} date={"Dec 11 2021"} />
      </div>

      <div className="text-right">
        <a href="#" className="text-l font-sans font-semibold text-green-700 no-underline hover:underline">
          All Posts
        </a>
      </div>
    </div>
  );
};

const PostLink = (props: { title: string; date: string }) => {
  return (
    <div className="flex flex-row text-m font-sans justify-between items-center">
      <a href="#" className="flex flex-1 font-semibold no-underline hover:underline">
        {props.title}
      </a>
      <div className="text-xs text-gray-400 mt ml-2 text-right">{props.date}</div>
    </div>
  );
};
