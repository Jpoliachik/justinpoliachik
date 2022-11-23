import { promises as fs } from "fs";
import path from "path";

import { AllPosts } from "../components/AllPosts";
import { MainFooter } from "../components/MainFooter";
import { MainHeader } from "../components/MainHeader";
import { SharedHead } from "../components/SharedHead";
import { SharedNav } from "../components/SharedNav";
import { getPostsList, PostSummary } from "../lib/getPosts";

export default function Posts(props: { postsList: PostSummary[] }) {
  return (
    <div>
      <SharedHead title="Posts" />
      <SharedNav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
        <div className="max-w space-y-12 min-h-screen px-4">
          <AllPosts posts={props.postsList} />
        </div>
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
  const postsList = await getPostsList();
  return {
    props: { postsList },
  };
}
