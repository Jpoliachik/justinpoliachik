import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export type PostSummary = {
  id: string;
  title: string;
  date: string;
  link: string;
};

export type PostFull = {
  id: string;
  title: string;
  date: string;
  link: string;
  content: string;
};

const postsDirectory = join(process.cwd(), "_posts");

export const getAllPosts = async (): Promise<{ [id: string]: PostFull }> => {
  const postsDirContents = fs.readdirSync(postsDirectory);

  const allPosts = {};
  postsDirContents.forEach((slug) => {
    const post = getPost(slug);
    allPosts[post.id] = post;
  });
  return allPosts;
};

export const getPostsList = async (): Promise<PostSummary[]> => {
  const postsDirContents = fs.readdirSync(postsDirectory);

  const posts = postsDirContents
    .map((slug) => {
      // don't include content for list
      const { content, ...summaryPost } = getPost(slug);
      return summaryPost;
    })
    // sort posts by date in descending order
    // @ts-ignore
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};

export function getPost(id): PostFull {
  const realSlug = id.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id: realSlug,
    title: data.title,
    date: data.date,
    content: content,
    link: `/posts/${realSlug}/`,
  };
}
