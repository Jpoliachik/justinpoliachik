import { getPost, PostFull } from "../lib/getPosts";
import markdownToHtml from "../lib/markdownToHtml";
import { MainFooter } from "../components/MainFooter";
import { PostBody } from "../components/PostBody";
import { SharedHead } from "../components/SharedHead";
import { PostHeader } from "../components/PostHeader";
import { SharedNav } from "../components/SharedNav";

export default function AI(props: { post: PostFull }) {
  return (
    <div>
      <SharedHead title={props.post.title} />
      <SharedNav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28 min-h-screen">
        <article className="max-w space-y-12 px-4">
          <PostHeader post={props.post} />
          <PostBody post={props.post} />
        </article>
      </div>
      <div className="w-full h-24 bg-gray-100 justify-center">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <MainFooter />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const post = getPost("2024-ai-manifesto");
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
