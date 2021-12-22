import { format, getYear } from "date-fns";
import { PostFull, PostSummary } from "../lib/getPosts";

export const AllPosts = (props: { posts: PostSummary[] }) => {
  const groupedByYear = groupBy(props.posts, (post) => getYear(new Date(post.date)));
  console.log("grouped posts", groupedByYear);
  return (
    <div className="font-sans flex flex-1 flex-col">
      <div className="text-3xl md:text-5xl font-serif font-bold">Posts</div>

      {Array.from(groupedByYear.keys()).map((year) => {
        console.log(year);
        const postsInYear = groupedByYear.get(year);
        return (
          <div className="mt-8">
            <div className="text-2xl text-gray-400 font-serif">{year}</div>
            <div className="mt-2 space-y-2">
              {postsInYear.map((post) => {
                return <PostEntry post={post} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PostEntry = (props: { post: PostSummary }) => {
  const dateString = format(new Date(props.post.date), "MMM dd");
  return (
    <a
      href={`posts/${props.post.id}`}
      className="flex flex-row font-sans font-semibold items-center no-underline hover:underline"
    >
      <div className="text-left w-20 md:w-32">{dateString}</div>
      <div className="flex flex-1 ">{props.post.title}</div>
    </a>
  );
};

const groupBy = (list, keyGetter) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};
