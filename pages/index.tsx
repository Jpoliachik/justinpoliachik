import { GenSketch } from "../components/GenSketch";
import { MainFooter } from "../components/MainFooter";
import { MainIntro } from "../components/MainIntro";
import { ProjectsList } from "../components/ProjectsList";
import { RecentPosts } from "../components/RecentPosts";
import { SharedHead } from "../components/SharedHead";
import { SharedNav } from "../components/SharedNav";
import { getPostsList, PostSummary } from "../lib/getPosts";
import { drawSketch } from "../genart/sketches/sketch_2022_abstract_waves";
import { RecommendationsWidget } from "../components/RecommendationsWidget";
export default function Home(props: { postsList: PostSummary[] }) {
  return (
    <div>
      <SharedHead title="Justin Poliachik" />
      <SharedNav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
        <div className="max-w space-y-12 px-4">
          <MainIntro />
          <GenSketch className="w-full h-72" draw={drawSketch} enableRedraw={true} />
          <div id="recentposts" className="section">
            <RecentPosts postsList={props.postsList} />
          </div>
          <RecommendationsWidget />
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
    </div>
  );
}

export async function getStaticProps() {
  const postsList = await getPostsList();
  return {
    props: { postsList },
  };
}
