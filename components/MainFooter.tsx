import { resumeUrl } from "../lib/links";
import { SocialLinks } from "./SocialLinks";

export const MainFooter = () => {
  return (
    <div className="flex h-full flex-row items-center justify-center">
      <div className="text-xs text-gray-400 mr-8">@ Justin Poliachik ~ all of the years ~</div>
      <SocialLinks showResume={true} />
      <a className="ml-4 text-sm font-semibold text-green-700 no-underline hover:underline" href={resumeUrl}>
        CV (2022)
      </a>
    </div>
  );
};
