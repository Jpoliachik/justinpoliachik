import Head from "next/head";
import { GenArtBlock } from "../components/GenArtBlock";
import { MainHeader } from "../components/MainHeader";
import { MainIntro } from "../components/MainIntro";
import { ProjectsList } from "../components/ProjectsList";
import { RecentPosts } from "../components/RecentPosts";

export default function Home() {
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
      </Head>
      <body>
        <nav id="header" className="fixed w-full z-10 top-0">
          <div className="w-full h-24 bg-white justify-center border-b border-gray-200">
            <div className="h-full w-full md:max-w-3xl mx-auto">
              <MainHeader />
            </div>
          </div>
        </nav>
        <div className="container w-full md:max-w-3xl mx-auto py-12 mt-24">
          <div className="max-w space-y-12">
            <MainIntro />
            <GenArtBlock />
            <RecentPosts />
            <ProjectsList />
          </div>
        </div>
      </body>
    </html>
  );
}
