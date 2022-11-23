import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getAllPosts, getPost, PostFull } from "../../lib/getPosts";
import markdownToHtml from "../../lib/markdownToHtml";
import { MainFooter } from "../../components/MainFooter";
import { PostBody } from "../../components/PostBody";
import { SharedHead } from "../../components/SharedHead";
import { PostHeader } from "../../components/PostHeader";
import { SharedNav } from "../../components/SharedNav";

export default function Post(props: { post: PostFull }) {
  const router = useRouter();
  // const { id } = router.query;

  if (!router.isFallback && !props.post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <SharedHead title={props.post.title} />
      <SharedNav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
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

export async function getStaticProps({ params }) {
  const post = getPost(params.id);
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

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: Object.keys(posts).map((postId) => {
      return {
        params: {
          id: postId,
        },
      };
    }),
    fallback: false,
  };
}
