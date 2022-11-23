import { MainFooter } from "../components/MainFooter";
import { MainHeader } from "../components/MainHeader";
import { SharedHead } from "../components/SharedHead";
import { SharedNav } from "../components/SharedNav";

export default function About() {
  return (
    <html lang="en">
      <SharedHead title="About" />
      <SharedNav />
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
        <div className="max-w space-y-12 min-h-screen px-4">[still working on this bit]</div>
      </div>
      <div className="w-full h-24 bg-gray-100 justify-center">
        <div className="h-full w-full md:max-w-3xl mx-auto px-4">
          <MainFooter />
        </div>
      </div>
    </html>
  );
}
