import { GenArtBlock } from "../components/GenArtBlock";
import { MainFooter } from "../components/MainFooter";
import { MainHeader } from "../components/MainHeader";
import { MainIntro } from "../components/MainIntro";
import { ProjectsList } from "../components/ProjectsList";
import { RecentPosts } from "../components/RecentPosts";
import { SharedHead } from "../components/SharedHead";
import { SharedNav } from "../components/SharedNav";
import { getPostsList, PostSummary } from "../lib/getPosts";

export default function Home(props: { postsList: PostSummary[] }) {
  return (
    <html lang="en">
      <SharedHead title="Justin Poliachik" />
      <body className="text-gray-800">
        <SharedNav />
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
