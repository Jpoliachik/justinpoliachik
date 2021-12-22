import Head from "next/head";
import { GenArtBlock } from "../components/GenArtBlock";
import { MainFooter } from "../components/MainFooter";
import { MainHeader } from "../components/MainHeader";
import { MainIntro } from "../components/MainIntro";
import { ProjectsList } from "../components/ProjectsList";
import { RecentPosts } from "../components/RecentPosts";
import { getPostsList, PostSummary } from "../lib/getPosts";

export default function Home(props: { postsList: PostSummary[] }) {
  return (
    <html lang="en">
      <Head>
        <title>Justin Poliachik</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦊</text></svg>"
        />
        <meta name="description" content="Justin Poliachik is a software engineer." />
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
          <div className="max-w space-y-12 px-4">
            <MainIntro />
            <GenArtBlock />
            <div id="recentposts" className="section">
              <RecentPosts postsList={props.postsList} />
            </div>
            <div id="projects" className="section">
              <ProjectsList />
            </div>
          </div>
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

export async function getStaticProps() {
  const postsList = await getPostsList();
  return {
    props: { postsList },
  };
}
