import { resumeUrl } from "../lib/links";
import { SocialLinks } from "./SocialLinks";

export const MainFooter = () => {
  return (
    <div className="flex h-full flex-row items-center justify-center">
      <div className="text-xs text-gray-400 mr-8">@ Justin Poliachik ~ all of the years ~</div>
      <SocialLinks showResume={false} />
    </div>
  );
};
