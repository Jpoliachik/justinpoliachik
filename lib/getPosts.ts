import fs from "fs";
import path from "path";
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

const postsDirectory = path.join(process.cwd(), "_posts");

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

  const posts = postsDirContents.map((slug) => {
    // don't include content for list
    const { content, ...summaryPost } = getPost(slug);
    return summaryPost;
  });

  const sketchesDirectory = path.join(process.cwd(), "pages/sketches");
  const filenames = fs.readdirSync(sketchesDirectory);
  const sketches = filenames.map((filename) => {
    const name = path.parse(filename).name;
    const nameParts = name.split("_");
    const date = nameParts[0];
    const post: PostSummary = {
      id: filename,
      title: `Gen Art - ${nameParts[1]}`,
      date,
      link: `/sketches/${name}`,
    };

    return post;
  });

  const allPosts = posts.concat(sketches).sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return allPosts;
};

export function getPost(id): PostFull {
  const realSlug = id.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
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
