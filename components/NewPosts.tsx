import { useEffect, useState } from "react";

export type PostSummary = {
  title: string;
  description: string;
};

export type NewPostsProps = {
  postsList: PostSummary[];
};

export const NewPosts = ({ postsList }: NewPostsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostSummary[]>([]);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, [postsList]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {postsList.map((post) => {
        return (
          <div className="flex flex-row ph-8 border-4">
            <div className="font-semibold mt-4 ">{post.title}</div>
            <div className="font-s mt-2">{post.description}</div>
          </div>
        );
      })}
      {!isLoading && posts.length === 0 && <p>No posts found</p>}
    </div>
  );
};
