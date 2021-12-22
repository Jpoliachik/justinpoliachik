import { SocialLinks } from "./SocialLinks";

export const MainFooter = () => {
  return (
    <div className="flex h-full flex-row items-center justify-center">
      <div className="text-sm text-gray-500 mr-8">@ Justin Poliachik ~all the years~</div>
      <SocialLinks />
    </div>
  );
};
