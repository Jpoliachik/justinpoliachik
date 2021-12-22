import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getAllPosts, getPost, PostFull } from "../../lib/getPosts";
import markdownToHtml from "../../lib/markdownToHtml";
import { MainHeader } from "../../components/MainHeader";
import { MainFooter } from "../../components/MainFooter";
import { PostBody } from "../../components/PostBody";
import { SharedHead } from "../../components/SharedHead";

export default function Post(props: { post: PostFull }) {
  const router = useRouter();
  // const { id } = router.query;

  if (!router.isFallback && !props.post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <html lang="en">
      <SharedHead title={props.post.title} />
      <body className="text-gray-800">
        <nav id="header" className="sticky w-full z-10 top-0">
          <div className="w-full h-20 bg-white justify-center border-b border-gray-200">
            <div className="h-full w-full md:max-w-3xl mx-auto px-4">
              <MainHeader />
            </div>
          </div>
        </nav>
        <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
          <article className="max-w space-y-12 px-4">
            {/* <PostHeader/> */}
            <PostBody post={props.post} />
          </article>
        </div>
        <div className="w-full h-24 bg-gray-100 justify-center">
          <div className="h-full w-full md:max-w-3xl mx-auto px-4">
            <MainFooter />
          </div>
        </div>
      </body>
    </html>
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

  console.log(
    "paths",
    Object.keys(posts).map((postId) => {
      return {
        params: {
          id: postId,
        },
      };
    })
  );

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
