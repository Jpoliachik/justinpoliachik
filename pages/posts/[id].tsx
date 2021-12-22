import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getAllPosts, getPost, PostFull } from "../../lib/getPosts";
import markdownToHtml from "../../lib/markdownToHtml";
import { MainHeader } from "../../components/MainHeader";
import { MainFooter } from "../../components/MainFooter";
import { PostBody } from "../../components/PostBody";

export default function Post(props: { post: PostFull }) {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isFallback && !props.post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <html lang="en">
      <Head>
        <title>{props.post.title}</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦊</text></svg>"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700&display=swap" rel="stylesheet" />
      </Head>
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
